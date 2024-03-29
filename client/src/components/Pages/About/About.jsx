import React from 'react';
import './About.css';
import Cart from '../../../images/cart.png';
import Favourites from '../../../images/fav.png';
import Auth from '../../../images/auth.png';



const About = ()=>{
    return(
    <div className="about-container">
        <div className="about-1">
        <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_1584,c_limit/36f58738-05dc-4e35-97db-748778258095/women-s-shoes-clothing-accessories.jpg"  />
        <div className="sub-about">
        <h2>Display and design</h2>
            <h3>The site allows the user to enjoy a display of fashion and sports products</h3>
            <h3>I used react combined with css</h3>
        </div>
        </div>


        <div className="about-1">
            <img src={Auth}  />
            <div className="sub-about">
            <h2>User Authentication</h2>
            <h3>There is authentication to the user login, if you are new user you can register and get in to the database, with the token in the local storage we display all the details about the current user.</h3>
            <h3>The logic behind the authentication written at the server side with nodejs,the password is hash and with jwt i create a token for the user.</h3>
        </div>

        </div>



        <div className="about-1">
            <img src={Cart}  />
            <div className="sub-about">
            <h2>Shopping Cart</h2>
            <h3>Option to put products in a shopping cart where the products are displayed with the option to add quantity, or delete a product and the total price is displayed at the top of the page</h3>
            <h3>I added payment technology combined with paypal</h3>
        </div>

        </div>

        <div className="about-1">
        <img src={Favourites}  />
        <div className="sub-about">
        <h2>Favourites</h2>
            <h3>The user can select products he liked and add them to a favorites page where the products will be displayed with their details</h3>
            <h3>Clicking on the Favorites button will put the product into a collection of favorites in the database I created using Mongodb</h3>
        </div>
        </div>


    </div>)
}

export default About
