import React from "react";
import { Link } from "react-router-dom";
import { getFavoritesProducts } from "../../../Service/favorites-service";
import { getAllProducts } from "../../../Service/productService";
import { useState, useEffect } from "react";
import { useMyContext } from "../../../Context/context";
import DeleteIcon from "@material-ui/icons/Delete";
import { IconButton } from "@material-ui/core";
import { deleteFavourite } from "../../../Service/favorites-service";
import Loader from "../../Feauters/Loader/Loader";
import './Favourites.css';

function Favorites() {
  const { user, isUpdated, updateData } = useMyContext();
  const [favoritesProducts, setFavoritesProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (user) {
      getFavoritesProducts(user._id).then(async (favoritesProductsRes) => {
        const allProducts = await getAllProducts();
        const correctProduct = favoritesProductsRes.map((favorite) => {
          return allProducts.find((p) => p._id === favorite.productId);
        });
        console.log({ correctProduct });
        setFavoritesProduct(correctProduct);
        setLoading(false);

      });
    }
  }, [user, isUpdated]);

  return (
    <>
      <div className="favourites-div">
        <h2>Favorites</h2>
        {loading ? (<div className="loader"><Loader/></div>) :  favoritesProducts.length === 0 && (
          <h3>
            Items added to your Favourites will be saved here.
          </h3>
        )}
        <div className="favourites-display">
          {favoritesProducts.map((product) => (
              <div className="favourite">
                <Link to={`/mensShoe/${product._id}`}>
                  <img src={product.images[0]} width="360" />
                </Link>
                <h4>{product.name}</h4>
                <h5>{product.category}</h5>
                <h5>{product.price}$</h5>
                <IconButton>
                  <DeleteIcon
                    onClick={async () => {
                      await deleteFavourite(product._id, user._id);
                      await updateData();
                    }}
                  />
                </IconButton>
              </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Favorites;
