import React from "react";
// import { ConnectWallet } from "@thirdweb-dev/react";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar-start">
        <a className="navbar-item">Sweet</a>
      </div>
      <div className="navbar-end">
        <button className="btn">Connect button</button>
      </div>
    </div>
  );
}

export default Navbar;
