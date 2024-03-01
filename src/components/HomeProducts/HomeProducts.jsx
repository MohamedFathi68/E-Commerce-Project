import React, { useEffect, useState } from "react";
import "./HomeProducts.module.css";
import axios from "axios";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);

  async function getAllProducts() {
    let { data } = await axios.get(
      "https://ecommerce.routemisr.com/api/v1/products"
    );
    setProducts(data.data);
  }

  useEffect(() => {
    getAllProducts();
  });

  return (
    <div className="row g-3">
      {products.map((product) => (
        <div className="col-md-2">
          <div className="ProductCard" key={product.id}>
            <img
              src={product.imageCover}
              alt=""
              className="w-100"
              height={200}
            />
            <p className="text-main">{product.category.name}</p>
            <h5 className="overflow-hidden text-wrap">{product.title}</h5>
            <div className="d-flex justify-content-between align-items-center">
              <h6 className="small align-self-center">{product.price} EGP</h6>
              <div className="small d-flex">
                <i className="fa fa-star rating-color"></i>
                <p>{product.ratingsAverage}</p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
