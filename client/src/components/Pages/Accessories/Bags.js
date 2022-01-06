import Card from "../../Feauters/Cards/Cards";
import { Grid } from "@material-ui/core";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {getAccessories} from '../../../Service/productService';
import { useMediaQuery } from 'react-responsive'


export default function Bags() {
  const mobile = useMediaQuery({ query: '(max-width: 1224px)' })


    const [accessories,setAccessories] = useState([]);

    useEffect(()=>{
        getAccessories().then((res)=>{setAccessories(res.filter((a)=>{
            return a.group === "Bags"
        }))})
        
    },[])



  return (<main style={mobile? { marginTop: "85px" } : { marginTop: "85px",display:"flex",flexDirection:"column"}}>
  <Grid container spacing={15}>

    {accessories.map((product) => (
      <Grid item key={product._id} md={3}>
         <Link to={`/Accessorie/${product._id}`}> <Card product={product} /></Link>
      </Grid>
    ))}
  </Grid>
</main>);
}