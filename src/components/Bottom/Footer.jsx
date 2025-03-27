import React from "react";

export default function BFooter() {
  return (
    <div className="flex flex-row m-12 mt-14">
        <div className="w-2/5">
            <p className="py-3">Take Care of point with all your heart</p>
            <p className="text-[48px] font-bold leading-10">How to care for plants</p>

            <div className="flex flex-row gap-7 pt-11 pb-6">
                <img className="w-[50px] h-[50px] " src="images/fone.png" /> 
                <div>
                <h3 className="font-bold">Adjust Lighning</h3>
                <p className="text-[14px]">When caring for indoor plants, make sure the room temperature is neither too cold nor too hot</p>
                </div>
            </div>

            <div className="flex flex-row gap-7 pb-6">
                <img className="w-[50px] h-[50px]" src="images/ftwo.png" /> 
                <div>
                <h3 className="font-bold">Dont water too often</h3>
                <p className="text-[14px]">Watering ornamental plants indoors does not have to be done every day.</p>
                </div>
            </div>

            <div className="flex flex-row gap-7 pb-6">
                <img className="w-[50px] h-[50px]" src="images/ftree.png" /> 
                <div>
                <h3 className="font-bold">Dont water too often</h3>
                <p className="text-[14px]">Watering ornamental plants indoors does not have to be done every day.</p>
                </div>
            </div>

            <div className="flex flex-row gap-7 pb-6">
                <img className="w-[50px] h-[50px]" src="images/ffour.png" /> 
                <div>
                <h3 className="font-bold">Fertilize regularly</h3>
                <p className="text-[14px]">The nutrients most indoor houseplants need are nitrogen for balance and potassium for stem strength</p>
                </div>
            </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <img className="h-[510px] w-[550px] items-center justify-center ml-8" src="images/bub.png"/>
        </div>
    </div>

  );
}