import { getServerBaseUrl } from "./utils";

const getKidsShoes = async (req, res) => {
  try {
    return fetch(`${getServerBaseUrl()}/kids`).then((res) => res.json());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getMenShoes = async (req, res) => {
  try {
    return fetch(`${getServerBaseUrl()}/mens`).then((res) => res.json());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getWomenShoes = async (req, res) => {
  try {
    return fetch(`${getServerBaseUrl()}/womens`).then((res) => res.json());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAccessories = async (req, res) => {
  try {
    return fetch(`${getServerBaseUrl()}/accessories`).then((res) => res.json());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getShirts = async (req, res) => {
  try {
    return fetch(`${getServerBaseUrl()}/shirts`).then((res) => res.json());
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server Error" });
  }
};

const getAllProducts = async () => {
  const kidsShoes = await getKidsShoes();
  const menShoes = await getMenShoes();
  const womenShoes = await getWomenShoes();
  const accessories = await getAccessories();
  const shirts = await getShirts();

  return [...kidsShoes, ...menShoes, ...womenShoes, ...accessories, ...shirts];
};

export {
  getKidsShoes,
  getMenShoes,
  getWomenShoes,
  getAccessories,
  getAllProducts,
  getShirts,
};
