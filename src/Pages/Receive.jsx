import React from "react";
import Navbar from "../Components/Navbar";

function Receive() {
  return (
    <div>
      <Navbar />
      <div className="flex items-center justify-center my-4">
        <input className="input-rounded input py-8" placeholder="ZAR(R)" />
        <button className="btn btn-primary ml-2 py-2">Share</button>
        <input className="input-rounded input ml-2 py-8" placeholder="USD($)" />
      </div>
    </div>
  );
}

export default Receive;
