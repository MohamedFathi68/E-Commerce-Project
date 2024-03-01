import React, { useEffect, useState } from "react";
import "./CategoriesSlider.module.css";
import Slider from "react-slick";
import axios from "axios";

export default function CategoriesSlider() {
  const [categories, setCategories] = useState([]);

  async function getCategories() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/categories"
    );
    setCategories(data.data);
  }

  useEffect(() => {
    getCategories();
  });

  var settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    arrows: false,
  };
  return (
    <>
      <h2>Shop Popular Categories :</h2>
      <Slider {...settings}>
        {categories.map((category) => (
          <div key={category._id}>
            <img
              src={category.image}
              alt="img1"
              height={200}
              className="w-100"
            />
            <p className="small text-center">{category.name}</p>
          </div>
        ))}
      </Slider>
    </>
  );
}
