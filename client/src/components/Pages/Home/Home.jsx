import "./styles.css";
import nikeBack from "../../../images/logos/nikeWebBackground.jpeg";
import { Link } from "react-router-dom";
import Footer from "../../Feauters/Footer/Footer";
import SliderComponent from "../../Feauters/Slider/Slider";
import { getAllProducts } from "../../../Service/productService";
import { useEffect, useState } from "react";
import Navbar from "../../Feauters/NavBar/Navbar";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    await getAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  console.log(products);

  return (
    <>
      <div className="container">
        <Navbar/>
        <main>
          <img src={nikeBack} />
        </main>

        <div className="content1">
          <Link to="/Womens">
            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ce177064-ae79-49c7-a553-9229b09c2058/sportswear-oversized-funnel-neck-fleece-hoodie-211sK7.png" />
          </Link>
          <Link to="/Kids">
            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d1915ba4-e40f-427d-9ad1-7d429cb40dce/sportswear-older-short-sleeve-top-PZKvvv.png" />
          </Link>
          <Link to="/Mens">
            <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/751b2bcd-b39b-487a-a670-6c780e7be4f5/sportswear-t-shirt-LJpTf2.png" />
          </Link>
        </div>
        <div className="content2">
          <SliderComponent
            products={products}
            slidesToShow={4}
            isMobile={false}
          />
        </div>

        <div className="content3">
          <Link to="/Accessories">
            <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/25ab408d-6697-4b17-a80f-47aeeaa6eb32/nike-just-do-it.jpg" />
          </Link>
        </div>
        <footer>
          <Footer />
        </footer>
      </div>
    </>
  );
}
