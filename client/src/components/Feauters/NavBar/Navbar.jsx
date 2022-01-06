import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import "./Navbar.css";
import { Link } from "react-router-dom";
import Nike from "../../../images/logos/nike.png";
import { getCartProducts } from "../../../Service/cart-service";
import { useState, useEffect } from "react";
import { useMyContext } from "../../context";
import {
  UserOutlined,
  ShoppingCartOutlined,
  UserDeleteOutlined,
  HeartOutlined,
} from "@ant-design/icons";

export default function Navbar() {
  const { user } = useMyContext();
  const [products, setProducts] = useState([]);
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
    }
  }, [user]);

  return (
    <AppBar position="fixed" className="appBar" color="inherit">
      <Toolbar>
        <img src={Nike} width="40px" />

        <Typography variant="h7" className="title" color="inherit">
          <Link to="/" className="link">
            {" "}
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
        </Typography>

        <div>
          {user ? null : (
            <IconButton>
              <Link
                to="/Login"
                style={{
                  color: "black",
                  textDecoration: "none",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
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
            </IconButton>
          )}

          {user ? (
            <div className="icons">
              <IconButton aria-label="show cart items" color="inherit" className="link1">
                <UserDeleteOutlined onClick={logOut}  />{" "}
              </IconButton>
              <IconButton  className="link2">
                <Link to="/Favorites"
               >
                  <HeartOutlined />
                </Link>
              </IconButton>
              <IconButton className="link3">
                <Badge
                  badgeContent={user ? products.length : null}
                  color="secondary"
                >
                  <Link
                    to="/CartPage"
                                      >
                    <ShoppingCartOutlined />
                  </Link>
                </Badge>
              </IconButton>
            </div>
          ) : null}
        </div>
      </Toolbar>
    </AppBar>
  );
}