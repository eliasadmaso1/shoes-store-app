import React from "react";
import { Grid } from "@material-ui/core";
import {Link} from 'react-router-dom'
import { getFavoritesProducts } from "../../../Service/favorites-service";
import { getAllProducts } from "../../../Service/productService";
import { useState, useEffect } from "react";
import { useMyContext } from "../../context";
import DeleteIcon from "@material-ui/icons/Delete";
import {  IconButton} from "@material-ui/core";
import {deleteFavourite} from '../../../Service/favorites-service'



function Favorites() {
  const { user,isUpdated } = useMyContext();
  const [favoritesProducts, setFavoritesProduct] = useState([]);

  useEffect(() => {
    if (user) {
      getFavoritesProducts(user._id).then(async (favoritesProductsRes) => {
        const allProducts = await getAllProducts();
        const correctProduct = favoritesProductsRes.map((favorite) => {
          return allProducts.find((p) => p._id === favorite.productId);
        });
        console.log({ correctProduct });
        setFavoritesProduct(correctProduct);
      });
    }
  }, [user,isUpdated]);

  return (
    <>
      <>
        {user ? (
          <div className="favoritesDiv">
            <h2 style={{ marginLeft: "70%" }}>Favorites</h2>
            {favoritesProducts.length === 0 ? (
              <h3 style={{ marginTop: "20%", marginLeft: "35%" }}>
                {" "}
                Items added to your Favourites will be saved here.
              </h3>
            ) : (
              <h3 style={{ marginTop: "64px",marginLeft:"6%",marginBottom:"45px",fontSize:"20px" }}>
                Favourites
              </h3>
            )}
            <Grid
              container
              justify="center"
              spacing={4}
              style={{ flexDirection: "row" }}
            >
              {favoritesProducts.map((product, index) => (
                <Grid
                  item
                  key={`${product.id}-${index}`}
                  xs={12}
                  sm={6}
                  md={4}
                  lg={3}
                >
                    <div className="favorite">
                    <Link to={`/mensShoe/${product._id}`}><img src={product.images[0]} width="360"/></Link>
                    <h4>{product.name}</h4>
                    <h5>{product.category}</h5>
                    <h5 >{product.price}$</h5>
                    <IconButton>
              <DeleteIcon onClick={async()=>{ await deleteFavourite(product._id , user._id)}}/>
            </IconButton>

                    </div>
                </Grid>
              ))}
              </Grid>
           
          </div>
        ) : (
          <div className="cartDiv">
            <h3 style={{ marginTop: "300px" }}>
              Items added to your Favourites will be saved here.
            </h3>
          </div>
        )}
      </>
    </>
  );
}

export default Favorites;

