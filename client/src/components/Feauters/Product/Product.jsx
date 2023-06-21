import React from "react";
import { useState } from "react";
import Select from "../Select/Select";

const Product = ({product}) => {
  const [chosenSize, setChosenSize] = useState(null);
  return (
      <>
          <div className="product-container">
          <div className="product-layout">
            <div className="shoe-images">
             {product.images.map((img,index)=>{
                return <img className={`#img${index}`} src={img} width="500" />
             })}
            </div>
            <div className="shoe-details">
              <h3>{product.category}</h3>
              <h1>{product.name}</h1>
              <h4>{product.price}$</h4>
              <h4 style={{ color: "green" }}>{product.status}</h4>
              <>
                <Select
                  label="Size"
                  value={chosenSize}
                  setValue={setChosenSize}
                  options={["33", "33.5", "34", "34.5", "35"]}
                />
              </>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      </>
    )
};

export default Product;