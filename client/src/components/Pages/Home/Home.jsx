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
        <div theme className={"homeContainer"}>
          <img src={nikeBack} style={{ marginTop: "5px", width: "100%" }} />
        </div>
        <div className="homeSection">
          <Link to="/Womens">
            <img
              src="https://pa.namshicdn.com/product/A6/02936W/v4/1-zoom-desktop.jpg"
              style={{ width: "25vw" }}
            />
          </Link>
          <Link to="/Kids">
            <img
              src="https://i.pinimg.com/originals/d6/de/4f/d6de4f0c79b3e2f9424a379a05c7d8fd.jpg"
              style={{ width: "36vw" }}
            />
          </Link>
          <Link to="/Mens">
            <img
              src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/5d1dc95a-50db-4259-8c87-00f151426155/air-t-shirt-5B9kGf.jpg"
              style={{ width: "29vw" }}
            />
          </Link>
        </div>

        <Footer />
      </div>
    </>
  );
}
