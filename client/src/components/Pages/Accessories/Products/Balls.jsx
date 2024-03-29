import Card from "../../../Feauters/Cards/Cards";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getAccessories } from "../../../../Service/productService";
import "./accessorie.css";

export default function Balls() {
  const [accessories, setAccessories] = useState([]);

  useEffect(() => {
    getAccessories().then((res) => {
      setAccessories(
        res.filter((a) => {
          return a.group === "Balls";
        })
      );
    });
  }, []);

  return (
    <div className="accessorie-container">
      <h1 className="accessorie-title" style={{ color: "black" }}>
        Balls
      </h1>
      <div className="accessorie-div">
        {accessories.map((product) => (
          <Link to={`/Accessorie/${product._id}`}>
            <Card product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}
