import React from "react";
import "./Home.module.css";
import MainSlider from "../MainSlider/MainSlider";

import img1 from "./../../assets/images/blog-img-1.jpeg";
import img2 from "./../../assets/images/blog-img-2.jpeg";
import CategoriesSlider from "../CategoriesSlider/CategoriesSlider";
import HomeProducts from "../HomeProducts/HomeProducts";

export default function Home() {


  return (
    <section className="min-vh-100">
      <div className="row g-0 my-3">
        <div className="col-md-8">
          <MainSlider />
        </div>
        <div className="col-md-4 pb-3">
          <img src={img1} alt="img" className="w-100 h-50" />
          <img src={img2} alt="img" className="w-100 h-50" />
        </div>
      </div>
      <div className="my-5">
        <div className="CategoriesSlider my-3">
          <CategoriesSlider/>
        </div>
        <div className="HomeProducts my-3">
          <HomeProducts/>
        </div>
      </div>
    </section>
  );
}
