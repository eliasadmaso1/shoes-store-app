import React from "react";
import { Badge } from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Nike from "../../../images/logos/nike.png";
import { getCartProducts } from "../../../Service/cart-service";
import { getFavoritesProducts } from "../../../Service/favorites-service";
import { useState, useEffect } from "react";
import { useMyContext } from "../../context";

import PersonIcon from "@mui/icons-material/Person";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GroupRemoveIcon from "@mui/icons-material/GroupRemove";

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
        <img src={Nike} />
      </div>
      {user ? null : (
        <div className="icons">
          <Link to="/Login">
            {" "}
            <PersonIcon
              style={{
                fontSize: "30px",
              }}
            />
          </Link>
        </div>
      )}

      {user ? (
        <div className="icons">
          <span className="welcome">Welcome, {userName}</span>
          <Link>
            <GroupRemoveIcon onClick={logOut} className="icon" />{" "}
          </Link>
          <Badge
            badgeContent={user ? favourites.length : null}
            color="secondary"
            className="badge"
          >
            <Link to="/Favorites" className="icon">
              <FavoriteIcon />
            </Link>
          </Badge>
          <Badge
            badgeContent={user ? products.length : null}
            color="primary"
            className="badge"
          >
            <Link to="/CartPage" className="icon">
              <ShoppingCartIcon />
            </Link>
          </Badge>
        </div>
      ) : null}
    </div>
  );
}
