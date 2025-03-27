import React from "react";
import Swipper from './test.jsx';

export default function BUpper() {
  return (
      <div className="m-12">
        <div className="mb-12">
          <h4 className="text-[20px] pb-4">OUR SHOP</h4>
          <h3 className="text-[48px] pb-6 leading-[50px] font-bold">Here are the best seller from our <br/>varieties</h3>
          <button className=" bg-black text-white px-10 py-3 rounded-3xl">See all</button>
        </div>

        <div>
          <Swipper/>
        </div>

      </div>
  );
}