import { getServerBaseUrl } from "./utils";

const getCartProducts = async (userId) => {
  try {
    return fetch(`${getServerBaseUrl()}/cart/${userId}`).then((res) =>
      res.json()
    );
  } catch (error) {
    console.log(error);
  }
};

const addProductToCart = async (productId, userId) => {
  const options = {
    method: "POST",
    body: JSON.stringify({ productId, userId }),
    headers: { "Content-Type": "application/json" },
  };
  try {
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

const deleteProductFromCart = async (productId, userId) => {
  const options = {
    method: "DELETE",
    body: JSON.stringify({ productId, userId }),
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
