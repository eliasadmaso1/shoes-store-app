import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/Pages/Home/Home";
import Accessories from "../components/Pages/Accessories/Accessories";
import MenShirts from "../components/Pages/Shirts/MenShirts";
import CartPage from "../components/Pages/CartPage/CartPage";
import MenShoes from "../components/Pages/Shoes/MenShoes";
import Mens from "../components/Pages/Mens/Mens";
import Womens from "../components/Pages/Womens/Womens";
import Kids from "../components/Pages/Kids/kids";
import KidsShoes from "../components/Pages/Shoes/KidsShoes";
import WomensShoes from "../components/Pages/Shoes/WomensShoes";
import KidsShirts from "../components/Pages/Shirts/KidsShirts";
import WomensShirts from "../components/Pages/Shirts/WomensShirts";
import Login from "../components/Pages/Login/Login";
import Registration from "../components/Pages/Registration/Registration";
import ForgotPassword from "../components/Pages/ForgotPassword/ForgotPassword";
import About from "../components/Pages/About/About";
import kidsShoe from "../components/Pages/Products/kidsShoe";
import Contact from "../components/Pages/Contact/Contact";
import womenShoe from "../components/Pages/Products/womenShoe";
import mensShoe from "../components/Pages/Products/mensShoe";
import Favorites from "../components/Pages/Favorites/Favorites";
import Accessorie from "../components/Pages/Products/accessorie";
import Bags from "../components/Pages/Accessories/Bags";
import Hats from "../components/Pages/Accessories/Hats";
import Socks from "../components/Pages/Accessories/Socks";
import Balls from "../components/Pages/Accessories/Balls";
import Shirt from "../components/Pages/Products/Shirt";

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
      <Route path="/Login" component={Login}></Route>
      <Route path="/Registration" component={Registration}></Route>
      <Route path="/ForgotPasssword" component={ForgotPassword}></Route>
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
    </Switch>
  );
}
