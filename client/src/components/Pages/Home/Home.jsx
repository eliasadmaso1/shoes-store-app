import "./styles.css";
import Navbar from "../../Feauters/NavBar/Navbar";
import nikeBack from "../../../images/logos/nikeWebBackground.jpeg";
import { Link } from "react-router-dom";
import Footer from "../../Feauters/Footer/Footer";


export default function Home() {


  return (
    <>
      <Navbar />
      <div className={"light"}>
        <div theme className="homeContainer">
          <img src={nikeBack}  />
        </div>
        <div className="homeSection">
          <Link to="/Womens">
            <img
            className="women-img"
              src="https://pa.namshicdn.com/product/A6/02936W/v4/1-zoom-desktop.jpg"
              style={{ width: "25vw" }}
            />
          </Link>
          <Link to="/Kids">
            <img
            className="kids-img"
              src="https://i.pinimg.com/originals/d6/de/4f/d6de4f0c79b3e2f9424a379a05c7d8fd.jpg"
              style={{ width: "36vw" }}
            />
          </Link>
          <Link to="/Mens">
            <img
            className="mens-img"
              src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/5d1dc95a-50db-4259-8c87-00f151426155/air-t-shirt-5B9kGf.jpg"
              style={{ width: "29vw" }}
            />
          </Link>
        </div>
        <div className="home-images">
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/f2279bda-f7d2-4687-aca9-c796c601e4f1/blazer-mid-77-jumbo-shoes-g1NlvJ.png" width="550px"/>
          <img src="https://static.nike.com/a/images/w_960,c_limit/56bd12a4-776d-48ba-9dab-a25003f16699/image.webp" width="550px" style={{position:"relative"}}/>
          <button className="shoes-btn">Shop</button>
          <img src="https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/ab6e3782-7067-4a7a-9b66-e0f80aff1c60/air-force-1-low-07-shoes-kGqrWx.png" width="550px"/>


        </div>
        <div className="accessories-div">
          <img src="https://static.nike.com/a/images/w_960,c_limit/1cab4279-0152-4044-8851-233784df0c3c/image.webp" style={{position:"relative"}}/>
          <button className="acc-btn">Accessories</button>
        </div>

        <Footer />
      </div>
    </>
  );
}
