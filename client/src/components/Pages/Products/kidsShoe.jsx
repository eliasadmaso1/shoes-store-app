import React from "react";
import "./products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getKidsShoes } from "../../../Service/productService";
import { addProductToCart } from "../../../Service/cart-service";
import SubHeader from "../../Feauters/SubHeader/SubHeader";
import Footer from "../../Feauters/Footer/Footer";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context";
import Select from "../../Feauters/Select";

const KidsShoe = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [chosenSize, setChosenSize] = useState(null);

  const { updateToggleCart, user } = useMyContext();

  useEffect(() => {
    getKidsShoes().then((result) => {
      const currectShoe = result.find((shoe) => {
        return shoe._id === id;
      });
      setProduct(currectShoe);
    });
  }, []);

  return (
    product && (
      <>
        <SubHeader />
        <div className="shoe-images">
          <img src={product.images[0]} width="500" />
          <img className="img" src={product.images[1]} width="500" />
          <div className="shoe-details">
            <h3>{product.category}</h3>
            <h1>{product.name}</h1>
            <h4>{product.price}$</h4>
            <h4 style={{ color: "green" }}>{product.status}</h4>
            <Select
              label="Size"
              value={chosenSize}
              setValue={setChosenSize}
              options={["34","34.5","35","35.5","36"]}
            />

            {user && (
              <button
                className="addButton"
                onClick={async () => {
                  await addProductToCart(product._id, user._id,chosenSize);
                  updateToggleCart();
                }}
              >
                Add To Bag
              </button>
            )}

            <p>{product.description}</p>
            <Link to="/KidsShoes">
              <button className="backButton">Back To Shoes</button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default KidsShoe;
