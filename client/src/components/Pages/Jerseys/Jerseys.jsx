import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "./jerseys.css";
import Card from "../../Feauters/Cards/Cards";
import { useState } from "react";
import Select from "../../Feauters/Select/Select";
import TextField from "@material-ui/core/TextField";
import { getServerBaseUrl } from "../../../Service/utils";

export default function Jerseys() {

  const [Jerseys, setJerseys] = useState([]);

  useEffect(() => {
    fetch(`${getServerBaseUrl()}/jerseys`)
      .then((res) => res.json())
      .then((result) => setJerseys(result));
  }, []);

  return (
    <div className="shoes-div">
    <div className="shoes-container">
      {Jerseys.map((product) => (
       
          <Link to={`/kidsShoe/${product._id}`}>
            {" "}
            <Card product={product} />
          </Link>
       
      ))}
    </div>
  </div>
  );
}
