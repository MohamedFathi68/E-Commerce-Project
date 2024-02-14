import React from "react";
import "./Footer.module.css";
import android from "./../../assets/android.png";
import ios from "./../../assets/ios.png";
import img from "./../../assets/Capture.PNG";

export default function Footer() {
  return (
    <footer className="bg-body-tertiary text-center text-lg-start">
      <div className="container py-4">
        <div className="border-bottom">
          <h5 className="pt-2">
            <strong>Get the Fresh Cart app</strong>
          </h5>
          <p className="my-3">
            We will send you a link, open it on your phone to download the app.
          </p>
          <div className="row ">
            <div className="col-md-9 mb-4 mb-md-0">
              <div data-mdb-input-init className="form-outline mb-4">
                <input
                  type="email"
                  id=""
                  className="form-control"
                  placeholder="Email ....."
                />
              </div>
            </div>
            <div className="col-md-3 mb-4 mb-md-0">
              <button
                data-mdb-ripple-init
                type="button"
                className="btn w-100 text-white  bg-main">
                Share App Link
              </button>
            </div>
          </div>
        </div>
        <div className="py-4 border-bottom mb-5 ">
          <div className="row">
            <div className="col-md-6 d-flex align-items-center  ">
              <p>Payment partners</p>
              <div className="w-50 ">
                <img src={img} alt="android" className="w-100" />
              </div>
            </div>
            <div className="col-md-6 d-flex justify-content-around align-items-center  ">
              <p>Get deliveries with Fresh Cart</p>
              <img src={android} alt="android" className="w-25" />
              <img src={ios} alt="ios" className="w-25" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
