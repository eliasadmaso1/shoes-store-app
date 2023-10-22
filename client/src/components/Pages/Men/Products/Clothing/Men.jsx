import Card from "../../../../Feauters/Cards/Cards";
import { useState, useEffect } from "react";
import { getShirts } from "../../../../../Service/productService";
import {Link} from 'react-router-dom';
import "./styles.css";

export default function Shirts() {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    getShirts().then((res) => {
      setShirts(
        res.filter((shirt) => {
          return shirt.category === "Mens Clothing";
        })
      );
    });
  }, []);

  return (
    <div className="shirts-container">
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
