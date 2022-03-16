import "./styles.css";
import nikeBack from "../../../images/logos/nikeWebBackground.jpeg";
import { Link } from "react-router-dom";
import Footer from "../../Feauters/Footer/Footer";
import SliderComponent from "../../Feauters/Slider/Slider";
import {getAllProducts} from '../../../Service/productService';
import {useEffect,useState} from 'react';


export default function Home() {

  const [products,setProducts] = useState([]);
  let isMobile;


 

  useEffect(async()=>{
    await getAllProducts()
    .then((res)=>{
      setProducts(res)
    })
    

  },[])

  console.log(products);

  


  return (
    <>
      <div className={"light"}>
        <div theme className="homeContainer">
          <img src={nikeBack}  />
        </div>
        <div className="homeSection">
          <Link to="/Womens">
            <img
            className="women-img"
              src="https://pa.namshicdn.com/product/A6/02936W/v4/1-zoom-desktop.jpg"
            />
          </Link>
          <Link to="/Kids">
            <img
            className="kids-img"
              src="https://i.pinimg.com/originals/d6/de/4f/d6de4f0c79b3e2f9424a379a05c7d8fd.jpg"
            />
          </Link>
          <Link to="/Mens">
            <img
            className="mens-img"
              src="https://c.static-nike.com/a/images/t_PDP_1280_v1/f_auto/5d1dc95a-50db-4259-8c87-00f151426155/air-t-shirt-5B9kGf.jpg"
            />
          </Link>
        </div>
        <div className="slider">
        <SliderComponent products={products} slidesToShow={4} isMobile={false}/>

        </div>
        
   
        
        <div className="accessories-div">
          <img src="https://static.nike.com/a/images/w_960,c_limit/1cab4279-0152-4044-8851-233784df0c3c/image.webp" style={{position:"relative"}}/>
         <button className="acc-btn"> <Link to="/Accessories" style={{color:"white"}}>Accessories</Link></button>
        </div>

        <Footer />
      </div>
    </>
  );
}
