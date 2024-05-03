import React from "react";
import Footer from "../Footer";
import NavBar from "../Header/NavBar";

const Applayout = ({ children }) => {
  return (
    <div className="w-full relative">
      <NavBar />
      {children}
      {/* <Footer /> */}
    </div>
  );
};

export default Applayout;
