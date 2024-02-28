import React, { useContext } from "react";
import "./NavBar.module.css";
import { Link, useNavigate } from "react-router-dom";
import logo from "./../../assets/images/logo.svg";
import { TokenContext } from "../../Context/Token";

export default function NavBar() {
  let { token , setToken } = useContext(TokenContext);
  let navigate = useNavigate();

function logOut() {
  localStorage.removeItem("userToken")
  setToken(null);
  navigate("/login");
  
}



  return (
    <nav className="navbar navbar-expand-sm navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand">
          <img src={logo} alt="FreshCart" />
        </Link>
        <button
          className="navbar-toggler d-lg-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapsibleNavId"
          aria-controls="collapsibleNavId"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapsibleNavId">
          {token ? (
            <ul className="navbar-nav me-auto mt-2 mt-lg-0">
              <li className="nav-item">
                <Link
                  to={"home"}
                  className="nav-link active"
                  aria-current="page">
                  Home
                  <span className="visually-hidden">(current)</span>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"cart"}>
                  Cart
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"products"}>
                  Products
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"categories"}>
                  Categories
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"brands"}>
                  Brands
                </Link>
              </li>
            </ul>
          ) : null}
          <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
            <li className="nav-item d-flex">
              <Link className="nav-link">
                <i className="fab fa-instagram"></i>
              </Link>
              <Link className="nav-link">
                <i className="fab fa-facebook"></i>
              </Link>
              <Link className="nav-link">
                <i className="fab fa-tiktok"></i>
              </Link>
              <Link className="nav-link">
                <i className="fab fa-twitter"></i>
              </Link>
              <Link className="nav-link">
                <i className="fab fa-linkedin"></i>
              </Link>
              <Link className="nav-link">
                <i className="fab fa-youtube"></i>
              </Link>
            </li>
            {token ? (
              <li className="nav-item">
                <button className="nav-link" onClick={()=>{logOut()}}>
                  LogOut
                </button>
              </li>
            ) : (
              <>
                <li className="nav-item">
                  <Link className="nav-link" to={"login"}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={"register"}>
                    Register
                  </Link>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}
