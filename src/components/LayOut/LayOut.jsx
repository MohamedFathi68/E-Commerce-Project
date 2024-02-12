import React from "react";
import "./LayOut.module.css";
import NavBar from "./../NavBar/NavBar.jsx";
import Footer from "./../Footer/Footer.jsx";
import { Outlet } from "react-router-dom";

export default function LayOut() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}
