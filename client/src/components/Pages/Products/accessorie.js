import React from "react";
import "./products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getAccessories } from "../../../Service/productService";
import { addProductToCart } from "../../../Service/cart-service";
import { addFavorite } from "../../../Service/favorites-service";
import Footer from "../../Feauters/Footer/Footer";
import { useMyContext } from "../../context";
import { Link } from "react-router-dom";
import SliderComponent from "../../Feauters/Slider/Slider";

const Accessorie = () => {
  const { id } = useParams();
  const [accessorie, setAccessorie] = useState(null);
  const [message, setMessage] = useState(null);
  const [message1, setMessage1] = useState(null);
  const { user, updateData } = useMyContext();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getAccessories().then((result) => {
      setProducts(result);
      const currectAccessorie = result.find((product) => {
        return product._id === id;
      });
      setAccessorie(currectAccessorie);
    });
  }, [id]);

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
        <div className="product-container">
          <div className="product-layout">
            <div className="shoe-images">
              <img className="img1" src={accessorie.images[0]} width="500" />
              <img className="img2" src={accessorie.images[1]} width="500" />
          
            </div>
            <div className="shoe-details">
              <h3>{accessorie.category}</h3>
             
              <h1>{accessorie.name}</h1>
              <h4>{accessorie.price}$</h4>
              <h4 style={{ color: "green" }}>{accessorie.status}</h4>
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
              <p>{accessorie.description}</p>
              <Link to="/Accessories">
                <button className="backButton">Back To Accessories</button>
              </Link>
            </div>
          </div>
        </div>

        <h1 style={{marginLeft:"20px",marginTop:"50px",fontSize:"22px"}}>You Might Also Like</h1>
        <SliderComponent products={products} route="/Accessorie" link={true}/>
      </>
    )
  );
};

export default Accessorie;
