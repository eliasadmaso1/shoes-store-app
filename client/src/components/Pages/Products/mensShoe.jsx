import React from "react";
import "./products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getMenShoes } from "../../../Service/productService";
import {addProductToCart} from '../../../Service/cart-service';
import {addFavorite} from '../../../Service/favorites-service'
import SubHeader from "../../Feauters/SubHeader/SubHeader";
import Footer from "../../Feauters/Footer/Footer";
import {Link} from 'react-router-dom';
import { useMyContext } from "../../context";


const MensShoe = () => {
  const { id } = useParams();
 const [product, setProduct] = useState(null);
 const { user } = useMyContext();


  useEffect(() => {
    getMenShoes()
      .then((result) => {
        const currectShoe = result.find((shoe) => {
          return shoe._id === id;
        });
        setProduct(currectShoe);
      });
  }, []);

  const changeBtn = ()=>{
    addFavorite(product._id,user._id);
    
}

  

  

  


  return (
    product && (
      <>
      <SubHeader/>
      <div className="shoe-images">
         
         <img  src={product.images[0]} width="500" />
         <img className="img" src={product.images[3]} width="500" />
         <img className="img2" src={product.images[2]} width="500" />
         <img className="img3" src={product.images[1]} width="500" />

         <div className="shoe-details">
        <h3>{product.category}</h3>
        <h1>{product.name}</h1>
        <h4>{product.price}$</h4>
        <h4 style={{color:"green"}}>{product.status}</h4>
        {user && <><button className="addButton" onClick={()=>{addProductToCart(product._id,user._id)}}>Add To Bag</button>
        <button  className={"favouritesButton"} onClick={changeBtn}>Favourites</button></>}
        <p>{product.description}</p>
        <Link to="/MenShoes"><button className="backButton">Back To Shoes</button></Link>

        </div>
         </div>
         <Footer/>
     
       
          
          </>
      
       
       
    
    )
  );
};

export default MensShoe;
