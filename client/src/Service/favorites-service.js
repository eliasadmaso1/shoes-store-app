import { getServerBaseUrl } from "./utils";

const getFavoritesProducts = async (userId) => {
  try {
    return fetch(`${getServerBaseUrl()}/favorites/${userId}`).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};

const addFavorite = async (productId, userId) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ productId, userId }),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`${getServerBaseUrl()}/favorites/add-favorite`, options);
  } catch (error) {
    console.log(error);
  }
};

const deleteFavourite = async (productId , userId)=>{
  const options = {
    method: "DELETE",
    body: JSON.stringify({ productId, userId }),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`${getServerBaseUrl()}/favorites/delete-favorite`, options);
  } catch (error) {
    console.log(error);
  }


}


export { getFavoritesProducts, addFavorite, deleteFavourite };
