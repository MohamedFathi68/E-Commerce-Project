import React, { useEffect, useState } from "react";
import "./HomeProducts.module.css";
import axios from "axios";
import { RotatingLines } from "react-loader-spinner";

export default function HomeProducts() {
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

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
    <>
      {isLoading ? (
        <div className="text-center">
          <RotatingLines
            visible={true}
            height="96"
            width="96"
            color="grey"
            strokeWidth="5"
            animationDuration="0.75"
            ariaLabel="rotating-lines-loading"
            wrapperStyle={{}}
            wrapperClass=""
          />
        </div>
      ) : (
        <div className="row g-3">
          {products.map((product) => (
            <div className="col-md-2">
              <div
                className="product cursor-pointer rounded rounded-3 overflow-hidden p-2"
                key={product.id}>
                <img
                  src={product.imageCover}
                  alt={product.title.split(" ").slice(0, 2).join(" ")}
                  className="w-100"
                  height={200}
                />
                <p className="text-main">{product.category.name}</p>
                <h5 className="overflow-hidden text-wrap">
                  {product.title.split(" ").slice(0, 2).join(" ")}
                </h5>
                <div className="d-flex justify-content-between align-items-center">
                  <h6 className="small align-self-center">
                    {product.price} EGP
                  </h6>
                  <div className="small d-flex">
                    <i className="fa fa-star rating-color"></i>
                    <p>{product.ratingsAverage}</p>
                  </div>
                </div>
                <div className="text-center">
                  <button className="btn bg-main text-center w-100">
                    add to cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </>
  );
}
