import React from "react";
import Slider from "react-slick";
import img1 from "./../../assets/images/slider-image-1.jpeg";
import img2 from "./../../assets/images/slider-image-2.jpeg";
import img3 from "./../../assets/images/slider-image-3.jpeg";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <Slider {...settings}>
      <img src={img1} alt="img1" className="w-100" />
      <img src={img2} alt="img2" className="w-100" />
      <img src={img3} alt="img3" className="w-100" />
    </Slider>
  );
}
