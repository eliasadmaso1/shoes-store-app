import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Accessories from "../components/Pages/Accessories/Screen/Accessories";
import MenShirts from "../components/Pages/Products/Shirt/Men";
import CartPage from "../components/Pages/CartPage/CartPage";
import MenShoes from "../components/Pages/Men/Shoes/MenShoes";
import Mens from "../components/Pages/Men/Screen/Men";
import Womens from "../components/Pages/Women/Screen/Women";
import Kids from "../components/Pages/Kids/Screen/Kids";
import KidsShoes from "../components/Pages/Kids/Shoes/KidsShoes";
import WomensShoes from "../components/Pages/Women/Shoes/WomensShoes";
import KidsShirts from "../components/Pages/Shirts/Shirt";
import WomensShirts from "../components/Pages/Products/Shirt/Women";
import LoginForm from '../components/Pages/Authentication-Pages/LoginForm';
import About from "../components/Pages/About/About";
import kidsShoe from "../components/Pages/Products/Shoe/Kids";
import Contact from "../components/Pages/Contact/Contact";
import womenShoe from "../components/Pages/Products/Shoe/Women";
import mensShoe from "../components/Pages/Products/Shoe/Men";
import Favorites from "../components/Pages/Favorites/Favorites";
import Accessorie from "../components/Pages/Products/Accessorie/Accessorie";
import Bags from "../components/Pages/Accessories/Products/Bags";
import Hats from "../components/Pages/Accessories/Products/Hats";
import Socks from "../components/Pages/Accessories/Products/Socks";
import Balls from "../components/Pages/Accessories/Products/Balls";
import Shirt from "../components/Pages/Shirts/Shirt";
import RegistrasionForm from "../components/Pages/Authentication-Pages/Registration";
import Jerseys from '../components/Pages/Jerseys/Jerseys';

export default function Routing() {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/MenShirts" component={MenShirts}></Route>
      <Route path="/Accessories" component={Accessories}></Route>
      <Route path="/CartPage" component={CartPage}></Route>
      <Route path="/MenShoes" component={MenShoes}></Route>
      <Route path="/Womens" component={Womens}></Route>
      <Route path="/Kids" component={Kids}></Route>
      <Route path="/Mens" component={Mens}></Route>
      <Route path="/KidsShoes" component={KidsShoes}></Route>
      <Route path="/WomensShoes" component={WomensShoes}></Route>
      <Route path="/KidsShirts" component={KidsShirts}></Route>
      <Route path="/WomensShirts" component={WomensShirts}></Route>
      <Route path="/Login" component={LoginForm}></Route>
      <Route path="/Registration" component={RegistrasionForm}></Route>
      <Route path="/About" component={About}></Route>
      <Route path="/Contact" component={Contact}></Route>
      <Route path="/kidsShoe/:id" component={kidsShoe} />
      <Route path="/mensShoe/:id" component={mensShoe} />
      <Route path="/womenShoe/:id" component={womenShoe} />
      <Route path="/Accessorie/:id" component={Accessorie} />
      <Route path="/Shirt/:id" component={Shirt} />
      <Route path="/Favorites" component={Favorites} />
      <Route path="/Bags" component={Bags} />
      <Route path="/Hats" component={Hats} />
      <Route path="/Socks" component={Socks} />
      <Route path="/Balls" component={Balls} />
      <Route path="/Jerseys" component={Jerseys} />
    </Switch>
  );
}
