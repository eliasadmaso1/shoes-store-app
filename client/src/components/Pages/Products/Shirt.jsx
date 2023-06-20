import React from "react";
import "./products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getShirts } from "../../../Service/productService";
import { addProductToCart } from "../../../Service/cart-service";
import { addFavorite } from "../../../Service/favorites-service";
import Footer from "../../Feauters/Footer/Footer";
import { Link } from "react-router-dom";
import { useMyContext } from "../../context";
import Select from "../../Feauters/Select";
import SliderComponent from "../../Feauters/Slider/Slider";

export default function Shirt() {
  const { id } = useParams();
  const [shirt, setShirt] = useState(null);
  const [chosenSize, setChosenSize] = useState(null);
  const [message, setMessage] = useState(null);
  const [message1, setMessage1] = useState(null);
  const { user, updateData } = useMyContext();
  const [items,setItems] = useState([]);

  const toFavourites = async () => {
    if (user) {
      await addFavorite(shirt._id, user._id);
      await updateData();
    } else {
      setMessage1("You Must Login!");
    }
  };
  const addProduct = async () => {
    if (user) {
      await addProductToCart(shirt._id, user._id, chosenSize);
      await updateData();
    } else {
      setMessage("You Must Login!");
    }
  };

  useEffect(() => {
    getShirts().then((result) => {
      const currectAccessorie = result.find((product) => {
        return product._id === id;
      });
      if(currectAccessorie){
        const categoryItem  = currectAccessorie.category;
        getShirts().then((res) => {
          setItems(
            res.filter((shirt) => {
              return shirt.category === categoryItem;
            })
          );
        });

      }
      setShirt(currectAccessorie);
    });
  }, [id]);

  return (
    shirt && (
      <>
        <div className="product-container">
          <div className="product-layout">
            <div className="shoe-images">
              <img className="img1" src={shirt.images[0]} width="500" />
              <img className="img2" src={shirt.images[3]} width="500" />
              <img className="img3" src={shirt.images[2]} width="500" />
              <img className="img4" src={shirt.images[1]} width="500" />
            </div>
            <div className="shoe-details">
              <h3>{shirt.category}</h3>

              <h1>{shirt.name}</h1>
              <h4>{shirt.price}$</h4>
              <h4 style={{ color: "green" }}>{shirt.status}</h4>
              <>
                <Select
                  label="Size"
                  value={chosenSize}
                  setValue={setChosenSize}
                  options={["XS", "S", "M", "L", "XL"]}
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
              <p>{shirt.description}</p>
              <Link to="/">
                <button className="backButton">Back To Shirts</button>
              </Link>
            </div>
          </div>
        </div>

        <h1 style={{ marginLeft: "20px", marginTop: "50px", fontSize: "22px" }}>
          You Might Also Like
        </h1>
        <SliderComponent products={items} route="/Shirt" link={true}/>
      </>
    )
  );
}
