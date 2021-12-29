import React from "react";
import "./products.css";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getShirts } from "../../../Service/productService";
import {addProductToCart} from '../../../Service/cart-service';
import {addFavorite} from '../../../Service/favorites-service'
import SubHeader from "../../Feauters/SubHeader/SubHeader";
import Footer from "../../Feauters/Footer/Footer";
import {Link} from 'react-router-dom';
import { useMyContext } from "../../context";


export default function Shirt() {

    const { id } = useParams();
    const [shirt, setShirt] = useState(null);
    const { user } = useMyContext();

    useEffect(() => {
        getShirts()
          .then((result) => {
            const currectAccessorie = result.find((product) => {
              return product._id === id;
            });
            setShirt(currectAccessorie);
          });
      }, []);

    return (
        shirt && (
            <>
            <SubHeader/>
            <div className="shoe-images">
               
            <img  src={shirt.images[0]} width="500" />
         <img className="img" src={shirt.images[3]} width="500" />
         <img className="img2" src={shirt.images[2]} width="500" />
         <img className="img3" src={shirt.images[1]} width="500" />
      
               <div className="shoe-details">
              <h3>{shirt.category}</h3>
              <h1>{shirt.name}</h1>
              <h4>{shirt.price}$</h4>
              <h4 style={{color:"green"}}>{shirt.status}</h4>
              {user && <><button className="addButton" onClick={()=>{addProductToCart(shirt._id,user._id)}}>Add To Bag</button>
            <button  className={"favouritesButton"} onClick={()=>{addFavorite(shirt._id,user._id)}}>Favourites</button></>}
              <p>{shirt.description}</p>
              <Link to="/MenShirts"><button className="backButton">Back To Clothing</button></Link>
      
              </div>
               </div>
               <Footer/>
           
             
                
                </>
    )
    )
        }
