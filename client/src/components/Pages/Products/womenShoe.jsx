import React from "react";
import "./products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getWomenShoes } from "../../../Service/productService";
import { addProductToCart } from "../../../Service/cart-service";
import SubHeader from "../../Feauters/SubHeader/SubHeader";
import Footer from "../../Feauters/Footer/Footer";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context";
import Select from "../../Feauters/Select";
import { addFavorite } from "../../../Service/favorites-service";

const WomensShoe = () => {
  const { id } = useParams();
  const { user, isUpdated, updateData } = useMyContext();
  const [product, setProduct] = useState(null);
  const [chosenSize, setChosenSize] = useState(null);
  const [message, setMessage] = useState(null);
  const [message1, setMessage1] = useState(null);

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

  useEffect(() => {
    getWomenShoes().then((result) => {
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
              options={["39", "40", "41", "42", "43"]}
            />

            {user && (
              <>
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
            )}
            <p>{product.description}</p>
            <Link to="/WomensShoes">
              <button className="backButton">Back To Shoes</button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default WomensShoe;
