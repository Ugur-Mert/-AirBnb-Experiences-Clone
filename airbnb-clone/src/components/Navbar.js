import React from "react";
import Logo from "../images/logo.png";

export default function Navbar() {
  return (
    <nav>
      <img className="air-logo" src={Logo} alt="Logo" />
    </nav>
  );
}
