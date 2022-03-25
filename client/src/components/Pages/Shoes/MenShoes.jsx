import { Grid } from "@material-ui/core";
import "./styles.css";
import Card from "../../Feauters/Cards/Cards";
import { useState, useEffect } from "react";
import Select from "../../Feauters/Select";
import TextField from "@material-ui/core/TextField";
import { Link } from "react-router-dom";
import { getMenShoes } from "../../../Service/productService";
import Footer from "../../Feauters/Footer/Footer";

export default function Shoes() {
  const [Shoes, setShoes] = useState([]);

  useEffect(() => {
    getMenShoes().then((result) => setShoes(result));
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
    <div className="men-shoes-div">
      <div className="filter-div">
      <Select
        label="Shoes by price"
        value={selectedPrice}
        setValue={setSelectedPrice}
        options={[
          "All",
          "50$",
          "100$",
          "150$",
          "200$",
          "250$",
          "300$",
          "350$",
          "400$",
        ]}
      />
      <TextField
        onChange={(e) => setShoesName(e.target.value)}
        id="standard-basic"
        label="Search"
      />
      </div>
     
      <div className="shoes-container">
        {filteredShoes.map((product) => (
         
            <Link to={`/mensShoe/${product._id}`}>
              {" "}
              <Card product={product} />
            </Link>
         
        ))}
      </div>
    </div>
  );
}
