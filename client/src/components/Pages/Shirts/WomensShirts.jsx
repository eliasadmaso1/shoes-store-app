import Card from "../../Feauters/Cards/Cards";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { getShirts } from "../../../Service/productService";
import {Link} from 'react-router-dom';
import "./styles.css";

export default function WomenShirts() {
  const [shirts, setShirts] = useState([]);

  useEffect(() => {
    getShirts().then((res) => {
      setShirts(
        res.filter((shirt) => {
          return shirt.category === "Womens Clothing";
        })
      );
    });
  }, []);

  return (
    <main style={{ marginTop: "85px" }}>
      <Grid container spacing={15}>
        {shirts.map((product) => (
          <Grid item key={product._id} md={3}>
            <Link to={`/Shirt/${product._id}`}>
              {" "}
              <Card product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}