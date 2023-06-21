import "./styles.css";
import nikeBack from "../../../images/nikeWebBackground.jpeg";
import { Link } from "react-router-dom";
import SliderComponent from "../../Feauters/Slider/Slider";
import { getAllProducts } from "../../../Service/productService";
import { useEffect, useState } from "react";

export default function Home() {
  const [products, setProducts] = useState([]);

  useEffect(async () => {
    await getAllProducts().then((res) => {
      setProducts(res);
    });
  }, []);

  console.log(products);

  return (
    <div className="container">
      <main>
        <img src={nikeBack} />
      </main>

      <div className="content1">
        <Link to="/Womens">
          <div className="shop-div">
            <button className="shop-btn">Women Shop</button>
          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ce177064-ae79-49c7-a553-9229b09c2058/sportswear-oversized-funnel-neck-fleece-hoodie-211sK7.png" />

          </div>
        </Link>
        <Link to="/Kids">
          <div className="shop-div">
          <button className="shop-btn">Kids Shop</button>

          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/d1915ba4-e40f-427d-9ad1-7d429cb40dce/sportswear-older-short-sleeve-top-PZKvvv.png" />

          </div>
        </Link>
        <Link to="/Mens">
          <div className="shop-div">
          <button className="shop-btn">Men Shop</button>

          <img src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/751b2bcd-b39b-487a-a670-6c780e7be4f5/sportswear-t-shirt-LJpTf2.png" />

          </div>
        </Link>
      </div>
      <div className="content2">
        <h2>Our Products</h2>
        <SliderComponent products={products} />
      </div>

      <div className="content3">
        <Link to="/Accessories">
          <button className="accessories-shop-btn">Accessories Shop</button>
          <img src="https://static.nike.com/a/images/f_auto/dpr_2.0,cs_srgb/w_786,c_limit/25ab408d-6697-4b17-a80f-47aeeaa6eb32/nike-just-do-it.jpg" />

        </Link>
      </div>
    </div>
  );
}
