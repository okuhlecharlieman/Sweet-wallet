import React from "react";
//import { ConnectWallet } from "@thirdweb-dev/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <Link to="/" className="navbar-item">
          Sweet
        </Link>
      </div>
      <div className="navbar-end">{/* <ConnectWallet /> */}</div>
    </div>
  );
}

export default Navbar;
