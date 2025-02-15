import React from "react";
import Circle from './Circles/Circle';

export default function PlantPromo() {
  return (
    <div className="relative justify-center items-center dx:w-2/3 flex  md:mt-20 dx:mt-[-25px] md:mr-5 dx:mb-[-20px] md:basis-1/2  self-center">
        <div className="flex  items-center self-center ">
            <img
                className="w-[400px] dx:mt-20 mt-6 -mb-5 sm:mt-8 sm:ml-0 sm:-mb-5 ml-4 sm:w-[500px] md:w-[750px] dx:w-[1000px] dx:h-[650px]  relative dx:right-10 max-h-[800px] object-contain z-30"
                src="/images/r.png"
                alt="right image"/>

            <div><Circle/></div>
        </div>
</div>
  );
}

