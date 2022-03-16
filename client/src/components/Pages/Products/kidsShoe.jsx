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
import { addFavorite } from "../../../Service/favorites-service";
import SliderComponent from "../../Feauters/Slider/Slider";

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
  }, []);

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
        <SubHeader />
        <div className="shoe-images-kids">
          <img src={product.images[0]} width="500" />
          <img className="img" src={product.images[1]} width="500" />
          <div className="shoe-details-kids">
            <h3>{product.category}</h3>
            <h1>{product.name}</h1>
            <h4>{product.price}$</h4>
            <h4 style={{ color: "green" }}>{product.status}</h4>
            <Select
              label="Size"
              value={chosenSize}
              setValue={setChosenSize}
              options={["34", "34.5", "35", "35.5", "36"]}
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
            <Link to="/KidsShoes">
              <button className="backButton">Back To Shoes</button>
            </Link>
          </div>
        </div>
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1584,c_limit/cfc94562-b61c-4c31-8601-f721d8bb75a7/nike-kids.jpg" width="1600" style={{marginBottom:"25px",marginLeft:"42px"}}/>
        <h1 style={{ marginLeft: "20px", fontSize: "22px" }}>
          You Might Also Like
        </h1>

        <SliderComponent products={products} route="KidsShoes" />

        <Footer />
      </>
    )
  );
};

export default KidsShoe;
