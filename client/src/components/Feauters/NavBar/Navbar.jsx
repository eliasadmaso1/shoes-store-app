import React from "react";
import {
  AppBar,
  Toolbar,
  IconButton,
  Badge,
  Typography,
} from "@material-ui/core";
import './Navbar.css';
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
  const {  user } = useMyContext();
  const [products, setProducts] = useState([]);
  const userName = user?.firstName || "Member";

  const logOut = () => {
    localStorage.removeItem("token");
    window.location.replace(process.env.NODE_ENV === 'production' ? "/shoes-store-app/":  "/");
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
    <AppBar position="fixed" className="appBar" color="inherit" >
      <Toolbar>
        <img src={Nike} width="40px" />
       
       <Typography variant="h7" className="title" color="inherit">
          <Link to="/"  className="link">
            {" "}
            Home
          </Link>
          <Link
            to="/Accessories"
            className="link"
          >
            Accessories
          </Link>
          <Link to="/Contact"  className="link">
            Contact
          </Link>

          <Link to="/About"  className="link">
            About
          </Link>
          
        </Typography>
        

        <div >
      <IconButton>
            <Link
              to="/Login"
              style={{ color: "black", textDecoration: "none",fontWeight:"bold",fontSize:"18px" }}
            >
              
              {user ? `Hello, ${userName}` : null}
              <UserOutlined
                style={{
                  fontSize: "22px",
                  marginLeft: "15px",
                  marginTop: "6px",
                }}
              />
            </Link>
          </IconButton>
         

          {user ? (
            <IconButton aria-label="show cart items" color="inherit">
              <UserDeleteOutlined
                onClick={logOut}
                style={{marginTop: "2px", fontSize: "24px"}}
              />{" "}
            </IconButton>
          ) : null}

          {user ? (
            <IconButton>
              <Link to="/Favorites">
                <HeartOutlined
                  style={{
                    fontSize: "23px",
                    marginTop: "-35px",
                    marginLeft: "5px",
                  }}
                />
              </Link>
            </IconButton>
          ) : null}

          {user ? (
            <IconButton>
              <Badge
                badgeContent={user ? products.length : null}
                color="secondary"
              >
                <Link
                  to="/CartPage"
                  style={{ color: "black", textDecoration: "none" }}
                >
                  <ShoppingCartOutlined
                    style={{ fontSize: "26px", marginTop: "4px" }}
                  />
                </Link>
              </Badge>
            </IconButton>
          ) : null}
        </div>
      </Toolbar>
    </AppBar>
  );
}
