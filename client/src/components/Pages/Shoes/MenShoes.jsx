import { Grid } from "@material-ui/core";
import "./styles.css";
import Card from "../../Feauters/Cards/Cards";
import { useState,useEffect } from "react";
import Select from '../../Feauters/Select';
import TextField from '@material-ui/core/TextField';
import {Link} from 'react-router-dom';
import {getMenShoes} from '../../../Service/productService';
import { useMediaQuery } from 'react-responsive'


export default function Shoes() {

  const mobile = useMediaQuery({ query: '(max-width: 1224px)' })

  const [Shoes, setShoes] = useState([]);

  useEffect(() => {
    getMenShoes()
      .then(result => setShoes(result));
  }, []);

  const [filteredShoes, setFilteredShoes] = useState([]);
  const [selectedPrice, setSelectedPrice] = useState("All");
  const [shoesName, setShoesName] = useState("");

  const filteredBy = () => {
    const newFilteredShoes = Shoes.filter((product) => {
      const byPrice = selectedPrice === "All" || product.price > selectedPrice;
      const byName = shoesName === "" || product.name.toLowerCase().includes(shoesName.toLowerCase())
      return byPrice && byName;
    })

    setFilteredShoes(newFilteredShoes);
  }

  useEffect(() => {
    filteredBy()
  })

  return (
    <main style={{ marginTop: "85px" } }>
      <Select label="Shoes by price" value={selectedPrice} setValue={setSelectedPrice} options={["All", "50$", "100$", "150$", "200$", "250$", "300$", "350$", "400$"]} />
      <TextField onChange={(e)=>setShoesName(e.target.value)} id="standard-basic" label="Search" />
      <Grid container spacing={15}               style={mobile ? { flexDirection: "column" }:{ flexDirection: "row" } }
>

        {filteredShoes.map((product) => (
          <Grid item key={product._id} md={3}>
             <Link to={`/mensShoe/${product._id}`}> <Card product={product} /></Link>
          </Grid>
        ))}
        <div className="mightAlso">
            <h2 style={{ marginRight: "78%", fontSize: "15px",marginBottom:"15%" }}>
              YOU MIGHT ALSO LIKE
            </h2>
            <Grid
              container
              justify="center"
              spacing={4}
            >
              <div className="img">
                <Link to="/MenShoes">
                  <img
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/350e7f3a-979a-402b-9396-a8a998dd76ab/air-force-1-07-shoe-ZLZpmn.png"
                    width="350"
                  />
                </Link>

                <h4>Nike Air Force 1 '07</h4>
                <h5>Men's Shoes</h5>
                <h6>275$</h6>
              </div>
              <div className="img">
                <Link to="/MenShoes">
                  <img
                    src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/748a9f2b-4d80-4bf4-805b-594288fed313/air-max-90-shoe-HzscVW.png"
                    width="350"
                  />
                </Link>

                <h4>Nike Air Max 90</h4>
                <h5>Men's Shoes</h5>
                <h6>285$</h6>
              </div>
            </Grid>
          </div>
      </Grid>
    </main>
  );
}
