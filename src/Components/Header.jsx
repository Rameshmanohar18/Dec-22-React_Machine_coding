import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="vertical-nav">
      {/* <div link="/">Home</div>
      <div link="/about">About</div>
      <div link="/contact">Contact</div> */}
      <a href="/">Home</a>
      <a href="/about">About</a>
      <a href="/contact">Contact</a>
      <a href ="/Dec22Task">December-22 Task </a>
    </nav>
  );
};

export default Header;
