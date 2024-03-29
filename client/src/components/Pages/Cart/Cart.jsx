import React from "react";
import { Link } from "react-router-dom";
import Card from "../../Feauters/Cards/Cards";
import { HeartFilled } from "@ant-design/icons";
import {
  getCartProducts,
  addProductToCart,
  decrementProductFromCart,
  deleteProductFromCart,
} from "../../../Service/cart-service";
import { getAllProducts } from "../../../Service/productService";
import { getFavoritesProducts } from "../../../Service/favorites-service";
import { useState, useEffect } from "react";

import "./styles.css";
import { useMyContext } from "../../../Context/context";
import Paypal from "../Payment/Payment";
import Loader from "../../Feauters/Loader/Loader";

export default function CartPage() {
  let delivery_cost = 40;
  const [cartProducts, setCartProduct] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const { user, isUpdated, updateData } = useMyContext();
  const [loading, setLoading] = useState(true);

  const refreshProducts = async () => {
    if (user) {
      getCartProducts(user._id).then(async (cartProductsRes) => {
        const allProducts = await getAllProducts();

        const correctProduct = cartProductsRes.map((cartProduct) => {
          const product = allProducts.find(
            (p) => p._id === cartProduct.productId
          );
          return {
            quantity: cartProduct.quantity,
            ...product,
            size: cartProduct.size,
          };
        });
        setCartProduct(correctProduct);
        setLoading(false);
      });
      getFavoritesProducts(user._id).then(async (favoritesProductsRes) => {
        const allProducts = await getAllProducts();
        const correctProduct = favoritesProductsRes.map((favorite) => {
          return allProducts.find((p) => p._id === favorite.productId);
        });
        console.log({ correctProduct });
        setFavourites(correctProduct);
      });
    }
  };
  useEffect(async () => {
    await refreshProducts();
  }, [user, isUpdated]);

  const totalPrice = cartProducts.reduce((price, product) => {
    price = price + product.price * product.quantity;
    return price;
  }, 0);

  let subTotal = Math.floor(totalPrice);

  console.log(cartProducts);

  return (
    <>
      <div className="cart-container">
        <h2>Bag</h2>
        {loading ? (
          <h2>
            <Loader />
          </h2>
        ) : cartProducts.length === 0 && totalPrice === 0 ? (
          <div className="items-message">          <h3>There is no items in your bag</h3>
          </div>
        ) : (
          <div className="cart-products-div">
            <div className="payment">
              <h3>Subtotal - ${subTotal}</h3>
              <h3>Estimated Delivery - ${delivery_cost}</h3>
              <h3>Total - ${subTotal + delivery_cost}</h3>
              <Paypal />
            </div>

            {cartProducts.map((product, index) => (
              <div>
                <Card
                  isCart={true}
                  product={product}
                  index={index}
                  remove={async () => {
                    await deleteProductFromCart(
                      product._id,
                      user._id,
                      product.size
                    );
                    await updateData();
                  }}
                  addOne={async () => {
                    await addProductToCart(product._id, user._id, product.size);
                    await updateData();
                  }}
                  removeOne={async () => {
                    await decrementProductFromCart(product._id, user._id);
                    await updateData();
                  }}
                />
              </div>
            ))}
          </div>
        )}
      </div>
      <div className="favourites-products-div">
        <h2>Favourites</h2>
        <div className="favourites-layout">
          {favourites.map((product, index) => (
            <div className="favourite-item">
              <Link to={`/mensShoe/${product._id}`}>
                <img src={product.images[0]} width="300" />
              </Link>
              <h3 style={{ color: "rgb(117, 117, 117)", marginLeft: "20%" }}>
                {product.name}
              </h3>
              <h4 style={{ color: "rgb(117, 117, 117)", marginLeft: "26%" }}>
                {product.category}
              </h4>
              <HeartFilled style={{ marginLeft: "36%", fontSize: "18px" }} />
            </div>
          ))}
        </div>
      </div>
      <div className="also-like-div">
        <h2>YOU MIGHT ALSO LIKE</h2>
        <div className="also-like-layout">
          <div className="img">
            <Link to="/MenShoes">
              <img
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-ZLZpmn.png"
                width="350"
              />
            </Link>

            <h4>Nike Air Force 1 '07</h4>
            <h5>Men's Shoes</h5>
            <h6>275$</h6>
          </div>
          <div className="img">
            <Link to="/MenShoes">
              <img
                src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/748a9f2b-4d80-4bf4-805b-594288fed313/air-max-90-shoe-HzscVW.png"
                width="350"
              />
            </Link>

            <h4>Nike Air Max 90</h4>
            <h5>Men's Shoes</h5>
            <h6>285$</h6>
          </div>
        </div>
      </div>
    </>
  );
}
