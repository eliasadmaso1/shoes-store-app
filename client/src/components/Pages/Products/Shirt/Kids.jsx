import Card from "../../Feauters/Cards/Cards";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getShirts } from "../../../Service/productService";
import {Link} from 'react-router-dom';
import "./styles.css";

export default function KidsShirts() {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    getShirts().then((res) => {
      setShirts(
        res.filter((shirt) => {
          return shirt.category === "Kids Clothing";
        })
      );
    });
  }, []);

  return (
    <div className="shirts-container">
      <h1 className="shirts-title" style={{color:"black"}}>Women Clothing</h1>
      <div className="shirt-div">
        {shirts.map((product) => (
          <Link to={`/Shirt/${product._id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}