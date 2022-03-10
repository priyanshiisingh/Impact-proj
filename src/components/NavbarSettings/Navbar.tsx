import * as React from "react";
import Resnav from "../Main-Menu/OptionsRes";
import "./navbar.css";

const Navbar = () => {
  return (
    <div className="nav">
      <a href="#" className="brand">
        Impact
      </a>
      <Resnav />
    </div>
  );
};

export default Navbar;
