import React from "react";
import "./products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccessories } from "../../../Service/productService";
import { addProductToCart } from "../../../Service/cart-service";
import { addFavorite } from "../../../Service/favorites-service";
import SubHeader from "../../Feauters/SubHeader/SubHeader";
import Footer from "../../Feauters/Footer/Footer";
import { useMyContext } from "../../context";
import { Link } from "react-router-dom";

const Accessorie = () => {
  const { id } = useParams();
  const [accessorie, setAccessorie] = useState(null);
  const [message, setMessage] = useState(null);
  const [message1, setMessage1] = useState(null);
  const { user, isUpdated, updateData } = useMyContext();

  useEffect(() => {
    getAccessories().then((result) => {
      const currectAccessorie = result.find((product) => {
        return product._id === id;
      });
      setAccessorie(currectAccessorie);
    });
  }, []);

  const toFavourites = async () => {
    if (user) {
      await addFavorite(accessorie._id, user._id);
      await updateData();
    } else {
      setMessage1("You Must Login!");
    }
  };
  const addProduct = async () => {
    if (user) {
      await addProductToCart(accessorie._id, user._id, "no size");
      await updateData();
    } else {
      setMessage("You Must Login!");
    }
  };

  return (
    accessorie && (
      <>
        <SubHeader />
        <div className="accessories-images">
          <img className="img1" src={accessorie.images[0]} width="500" />
          <img className="img2" src={accessorie.images[1]} width="500" />

          <div className="accessories-details">
            <h3>{accessorie.category}</h3>
            <h1>{accessorie.name}</h1>
            <h4>{accessorie.price}$</h4>
            <h4 style={{ color: "green" }}>{accessorie.status}</h4>
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
            <p>{accessorie.description}</p>
            <Link to="/Accessories">
              <button className="backButton">Back To Accessories</button>
            </Link>
          </div>
        </div>
        <Footer />
      </>
    )
  );
};

export default Accessorie;
