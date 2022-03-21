import React from "react";
import { Badge } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Nike from "../../../images/logos/nike.png";
import { getCartProducts } from "../../../Service/cart-service";
import { getFavoritesProducts } from "../../../Service/favorites-service";
import { useState, useEffect } from "react";
import { useMyContext } from "../../context";
import {
  UserOutlined,
  ShoppingCartOutlined,
  UserDeleteOutlined,
  HeartOutlined,
} from "@ant-design/icons";


export default function Navbar() {

  

  
  const { user, isUpdated, updateData } = useMyContext();
  const [products, setProducts] = useState([]);
  const [favourites, setFavourites] = useState([]);
  const userName = user?.firstName || "Member";

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.replace(
      process.env.NODE_ENV === "production" ? "/shoes-store-app/" : "/"
    );
  };

  useEffect(() => {
    console.log({ user });
    if (user) {
      getCartProducts(user._id).then((result) => {
        setProducts(result);
      });
      if (user) {
        getFavoritesProducts(user._id).then((res) => {
          setFavourites(res);
        });
      }
    }
  }, [user, isUpdated]);

  return (
    <div className="navbar">
      <div className="logo">
      <img src={Nike}  />

      </div>


      <div className="menu" >
      <Link to="/" className="link">
          Home
        </Link>
       
        <Link to="/Accessories" className="link">
          Accessories
        </Link>
        <Link to="/Contact" className="link">
          Contact
        </Link>

        <Link to="/About" className="link">
          About
        </Link>
      </div>

      {user ? null : (
        <div className="icons">
              <Link
          to="/Login"
         
        >
          {" "}
          <UserOutlined
            style={{
              fontSize: "22px",
              marginLeft: "15px",
              marginTop: "6px",
            }}
          />
        </Link>
        </div>
    
      )}

      {user ? (
        <div className="icons">
          <span className="welcome">Welcome, {userName}</span>
          <UserDeleteOutlined onClick={logOut} className="link1" />{" "}
          <Badge
            badgeContent={user ? favourites.length : null}
            color="secondary"
            className="link3"
          >
            <Link to="/Favorites" className="link2">
              <HeartOutlined />
            </Link>
          </Badge>
          <Badge
            badgeContent={user ? products.length : null}
            color="primary"
            className="link3"
          >
            <Link to="/CartPage" className="link3">
              <ShoppingCartOutlined />
            </Link>
          </Badge>
        </div>
      ) :   null}
    </div>
  );
}
