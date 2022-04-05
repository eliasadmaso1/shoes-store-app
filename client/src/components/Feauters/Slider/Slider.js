import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./Slider.css";
import { Link } from "react-router-dom";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#e6e6e6",
        marginTop: "-18%",
        width: "35px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "26px",
        marginRight: "28px",
      }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "#e6e6e6",
        marginTop: "-17.99%",
        width: "35px",
        height: "35px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "26px",
        marginLeft: "96.5%",
      }}
      onClick={onClick}
    />
  );
}

function SliderComponent({ products, route }) {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow  />,
    prevArrow: <SamplePrevArrow  />,
    responsive:[
      {
        breakpoint:426,
        settings:{
          slidesToShow:1,
          centerMode:false
        },
      },
    ],
  };

  return (
    <>
      <div className="div">
        <Slider {...settings}>
          {products.map((product) => {
            return (
              <div className="product-div">
                <Link to={`${route}/${product._id}`}>
                  <img src={product.images[0]} width="400" height="500" />
                  <p className="name">{product.name}</p>
                  <p className="price">{product.price}$</p>
                  <p className="category">{product.category}</p>
                </Link>
              </div>
            );
          })}
        </Slider>
      </div>
    </>
  );
}

export default SliderComponent;
