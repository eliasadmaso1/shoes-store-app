import React from "react";
import "./products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getKidsShoes } from "../../../../Service/productService";
import { addProductToCart } from "../../../../Service/cart-service";
import Footer from "../../../Feauters/Footer/Footer";
import { Link } from "react-router-dom";
import { useMyContext } from "../../../../Context/context";
import Select from "../../../Feauters/Select/Select";
import { addFavorite } from "../../../../Service/favorites-service";
import SliderComponent from "../../../Feauters/Slider/Slider";

const KidsShoe = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [chosenSize, setChosenSize] = useState(null);
  const [message, setMessage] = useState(null);
  const [message1, setMessage1] = useState(null);
  const [products, setProducts] = useState([]);

  const { user, updateData } = useMyContext();

  useEffect(() => {
    getKidsShoes().then((result) => {
      setProducts(result);
      const currectShoe = result.find((shoe) => {
        return shoe._id === id;
      });
      setProduct(currectShoe);
    });
  }, [id]);

  const toFavourites = async () => {
    if (user) {
      await addFavorite(product._id, user._id);
      await updateData();
    } else {
      setMessage1("You Must Login!");
    }
  };
  const addProduct = async () => {
    if (user) {
      await addProductToCart(product._id, user._id, chosenSize);
      await updateData();
    } else {
      setMessage("You Must Login!");
    }
  };

 

  return (
    product && (
      <>
          <div className="product-container">
          <div className="product-layout">
            <div className="shoe-images">
              <img className="img1" src={product.images[0]} width="500" />
              <img className="img2" src={product.images[1]} width="500" />
            
            </div>
            <div className="shoe-details">
              <h3>{product.category}</h3>
            
              <h1>{product.name}</h1>
              <h4>{product.price}$</h4>
              <h4 style={{ color: "green" }}>{product.status}</h4>
              <>
                <Select
                  label="Size"
                  value={chosenSize}
                  setValue={setChosenSize}
                  options={["33", "33.5", "34", "34.5", "35"]}
                />

                <button className="addButton" onClick={addProduct}>
                  Add To Bag
                </button>
                <div style={{ fontWeight: "bold", marginLeft: "64px" }}>
                  {message}
                </div>
                <button className={"favouritesButton"} onClick={toFavourites}>
                  Favourites
                </button>
                <div style={{ fontWeight: "bold", marginLeft: "64px" }}>
                  {message1}
                </div>
              </>
              <p>{product.description}</p>
              <Link to="/KidsShoes">
                <button className="backButton">Back To Shoes</button>
              </Link>
            </div>
          </div>
        </div>

        <h1 style={{ marginLeft: "20px", fontSize: "22px" }}>
          You Might Also Like
        </h1>
        <SliderComponent products={products} route="/kidsShoe" link={true}/>
      </>
    )
  );
};

export default KidsShoe;
