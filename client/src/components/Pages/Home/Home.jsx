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
            className="img"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ce177064-ae79-49c7-a553-9229b09c2058/sportswear-oversized-funnel-neck-fleece-hoodie-211sK7.png"
            />
          </Link>
          <Link to="/Kids">
            <img
            className="img"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d1915ba4-e40f-427d-9ad1-7d429cb40dce/sportswear-older-short-sleeve-top-PZKvvv.png"
            />
          </Link>
          <Link to="/Mens">
            <img
            className="img"
              src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/751b2bcd-b39b-487a-a670-6c780e7be4f5/sportswear-t-shirt-LJpTf2.png"
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
