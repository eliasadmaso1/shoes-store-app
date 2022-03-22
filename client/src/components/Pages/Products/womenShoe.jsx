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
import SliderComponent from "../../Feauters/Slider/Slider";


const WomensShoe = () => {
  const { id } = useParams();
  const { user, isUpdated, updateData } = useMyContext();
  const [product, setProduct] = useState(null);
  const [chosenSize, setChosenSize] = useState(null);
  const [message, setMessage] = useState(null);
  const [message1, setMessage1] = useState(null);
  const [products,setProducts] = useState([]);

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
      setProducts(result);
      const currectShoe = result.find((shoe) => {
        return shoe._id === id;
      });
      setProduct(currectShoe);
    });
  }, []);

  return (
    product && (
      <>
          <div className="product-container">
          <SubHeader />
          <div className="product-layout">
            <div className="shoe-images">
              <img className="img1" src={product.images[0]} width="500" />
              <img className="img2" src={product.images[1]} width="500" />
            
            </div>
            <div className="shoe-details">
              <h3>{product.category}</h3>
              <Link to={`/mensShoe/${product._id}`}>
                <span></span>
              </Link>
              <h1>{product.name}</h1>
              <h4>{product.price}$</h4>
              <h4 style={{ color: "green" }}>{product.status}</h4>
              <>
                <Select
                  label="Size"
                  value={chosenSize}
                  setValue={setChosenSize}
                  options={["39", "40", "41", "42", "43"]}
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
              <Link to="/MenShoes">
                <button className="backButton">Back To Shoes</button>
              </Link>
            </div>
          </div>
        </div>

        <h1 style={{ marginLeft: "20px", fontSize: "22px" }}>
          You Might Also Like
        </h1>
        <SliderComponent products={products} route="MenShoes" />
        <Footer />
      </>
    )
  );
};

export default WomensShoe;
