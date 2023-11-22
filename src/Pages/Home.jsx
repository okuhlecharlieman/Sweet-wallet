import React from "react";
// import { useAddress } from "@thirdweb-dev/react";
import Navbar from "../Components/Navbar";
import CurrentAmount from "../Components/CurrentAmount";
import Swap from "../Components/Swap";
import Deposit from "../Components/Deposit";
import Withdraw from "../Components/Withdraw";
import Invest from "../Components/Invest";
import Liquidity from "../Components/Liquidity";

function Home() {
  return (
    <div>
      <Navbar />
      <CurrentAmount />
      <div className="flex justify-center w-full ">
        <div className="btn-group btn-group-rounded btn-group-scrollable flex flex-wrap mt-2">
          <button className="btn">Send</button>
          <button className="btn">Receive</button>
          <button className="btn btn-active">Pay</button>
        </div>
      </div>
      <Swap />
      <div className="flex w-full justify-center gap-4">
        <Deposit />
        <div className="divider divider-vertical mx-0 h-44"></div>
        <Withdraw />
      </div>
      <div className="flex w-full justify-center gap-4">
        <Invest />
        <div className="divider divider-vertical mx-0 h-44"></div>
        <Liquidity />
      </div>
      {/* {user} */}
    </div>
  );
}

export default Home;
