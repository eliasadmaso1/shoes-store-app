import Card from "../../Feauters/Cards/Cards";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getAccessories} from '../../../Service/productService';
import './stuff.css';


export default function Socks() {

    const [accessories,setAccessories] = useState([]);

    useEffect(()=>{
        getAccessories().then((res)=>{setAccessories(res.filter((a)=>{
            return a.group === "Socks"
        }))})
        
    },[])



  return (<main style={{ marginTop: "85px" }} className="main">
        <h1 className="title">Socks</h1>

  <Grid container spacing={15} className="stuff-container">

    {accessories.map((product) => (
      <Grid item key={product._id} md={3}>
         <Link to={`/Accessorie/${product._id}`}> <Card product={product} /></Link>
      </Grid>
    ))}
  </Grid>
</main>);
}