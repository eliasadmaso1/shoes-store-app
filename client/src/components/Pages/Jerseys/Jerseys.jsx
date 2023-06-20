import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getKidsShoes } from "../../../Service/productService";
import Product from '../../Feauters/Product/Product';

export default function Jerseys() {

    
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [products, setProducts] = useState([]);

    useEffect(() => {
      getKidsShoes().then((result) => {
        const currectShoe = result.find((shoe) => {
          return shoe._id = id;
        });
        setProduct(currectShoe);
      });
    }, [id]);
  
  return (
    <div className="jerseys-div">
        <h1 className="jerseys-title">Jerseys</h1>
        {product && <Product product={product} />}
    
    

 
 </div>
  );
}
