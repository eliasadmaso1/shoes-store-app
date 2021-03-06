import { getServerBaseUrl } from "./utils";
import axios from "axios";

const getCartProducts = async (userId) => {
  try {
    return fetch(`${getServerBaseUrl()}/cart/${userId}`).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};

const addProductToCart = async (productId, userId, size) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ productId, userId, size }),
    headers: { "Content-Type": "application/json" },
  };
  try {
    // return axios.post(`${getServerBaseUrl()}/cart/add-product`, { productId, userId, size });
    return fetch(`${getServerBaseUrl()}/cart/add-product`, options);
  } catch (error) {
    console.log(error);
  }
};

const decrementProductFromCart = async (productId, userId) => {
  const options = {
    method: "DELETE",
    body: JSON.stringify({ productId, userId }),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`${getServerBaseUrl()}/cart/decrement-product`, options);
  } catch (error) {
    console.log(error);
  }
};

const deleteProductFromCart = async (productId, userId, size) => {
  const options = {
    method: "DELETE",
    body: JSON.stringify({ productId, userId, size }),
    headers: { "Content-Type": "application/json" },
  };
  try {
    return fetch(`${getServerBaseUrl()}/cart/delete-product`, options);
  } catch (error) {
    console.log(error);
  }
};

export {
  getCartProducts,
  addProductToCart,
  decrementProductFromCart,
  deleteProductFromCart,
};
