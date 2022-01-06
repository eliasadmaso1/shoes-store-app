import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { Link } from "react-router-dom";
import "./styles.css";
import Card from "../../Feauters/Cards/Cards";
import { useState } from "react";
import Select from "../../Feauters/Select";
import TextField from "@material-ui/core/TextField";
import { getServerBaseUrl } from "../../../Service/utils";
import { useMediaQuery } from 'react-responsive'


export default function Shoes() {

  const mobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const [Shoes, setShoes] = useState([]);

  useEffect(() => {
    fetch(`${getServerBaseUrl()}/kids`)
      .then((res) => res.json())
      .then((result) => setShoes(result));
  }, []);

  const [filteredShoes, setFilteredShoes] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [shoesName, setShoesName] = useState("");

  const filteredBy = () => {
    const newFilteredShoes = Shoes.filter((product) => {
      const byPrice = selectedPrice === "All" || product.price > selectedPrice;
      const byName =
        shoesName === "" ||
        product.name.toLowerCase().includes(shoesName.toLowerCase());
      return byPrice && byName;
    });

    setFilteredShoes(newFilteredShoes);
  };

  useEffect(() => {
    filteredBy();
  });

  return (
    <main style={{ marginTop: "85px" }}>
      <Select
        label="Shoes by price"
        value={selectedPrice}
        setValue={setSelectedPrice}
        options={["All", "50", "100", "150", "200", "250", "300", "350", "400"]}
      />
      <TextField
        onChange={(e) => setShoesName(e.target.value)}
        id="standard-basic"
        label="Search"
      />
      <Grid container spacing={15} style={mobile ? {display:"flex",flexDirection:"column"} : {display:"flex",flexDirection:"row"}}>
        {filteredShoes.map((product) => (
          <Grid item key={product._id} md={3}>
            <Link to={`/kidsShoe/${product._id}`}>
              <Card product={product} />
            </Link>
          </Grid>
        ))}
      </Grid>
    </main>
  );
}
