import React from "react";
import Midcircle from './Midcircle';
import Midcircleone from './Midcircleone.jsx';

export default function Mid() {
    return (
        <div className="bg-[#F4F4F4] md:mt-16 m-12  rounded-3xl flex flex-col dx:flex-row  justify-between relative gap-8 z-100">

            <div className="relative flex-1 md:p-8 mb-4 md:mb-0">
                <img className="absolute top-0 left-0 w-[350px] h-[350px] z-20 rounded-3xl " src="images/Blob.png" />
                <div className="relative z-30 mt-4 p-10 dx:mt-32 md:mt-10">
                    <h2 className="md:text-[48px] text-3xl md:leading-[61px] text-center dx:text-left font-semibold py-3 text-gray-800">
                        Love your plants<br/>Take care of yourself
                    </h2>
                    <p className="text-[#252525] mt-2 md:pt-4 md:text-2xl leading-[34px] text-center dx:text-left font-poppins sm:text-lg hidden sm:block">
                        Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Faucibus in libero risus<br/> semper habitant arcu eget. Et integer.
                    </p>
                    <p className="text-[#252525] mt-2  text-center  font-poppins sm:hidden block">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Faucibus in libero risus semper habitant arcu eget. Et integer.
                    </p>
                    <button className="mt-6 px-6 md:px-10 py-3 md:py-6 md:mt-10 bg-[#333333] md:text-2xl text-white rounded-[40px] shadow-custom hover:bg-slate-600 flex mx-auto dx:mx-0 dx:self-start">
                        Explore all plants
                    </button>
                </div>
            </div>

            <div className="relative items-end flex-1 flex justify-center -mt-7 dx:mt-14">
            <div ><Midcircle/></div>
            <div ><Midcircleone/></div>
                <img className="absolute bottom-0 z-10  md:h-[575px] w-[550px] md:w-[450px] h-[300px] md:rounded-none rounded-3xl" src="images/shape.png" alt="Shape"/>
                <img className="relative  z-20 md:w-[400px] md:h-[675px] w-[300px] h-[400px]" src="images/mid.png" alt="Main"/>
            </div>
        </div>
    );
}