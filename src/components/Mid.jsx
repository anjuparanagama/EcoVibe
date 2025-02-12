import React from "react";
import Midcircle from './Midcircle';
import Midcircleone from './Midcircleone.jsx';

export default function Mid() {
    return (
        <div className="bg-[#F4F4F4] md:mt-16 m-12  rounded-3xl flex flex-col dx:flex-row  justify-between relative gap-8 z-100">

            <div className="relative flex-1 md:p-8 mb-4 md:mb-0">
                <img className="absolute top-0 left-0 w-[350px] h-[350px] z-20 rounded-3xl " src="images/Blob.png" />
                <div className="relative z-30 mt-4 p-10  md:mt-32">
                    <h2 className="md:text-5xl text-3xl leading-[2.5rem] font-semibold py-3 text-gray-800">
                        Love your plants<br/>Take care of yourself
                    </h2>
                    <p className="text-[#252525] mt-2 md:text-2xl font-bold sm:text-lg">
                        Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Faucibus in libero risus<br/> semper habitant arcu eget. Et integer.
                    </p>
                    <button className="mt-4 px-6 py-3 md:mt-10 bg-[#333333] text-white rounded-3xl shadow-custom hover:bg-slate-600">
                        Explore all plants
                    </button>
                </div>
            </div>

            <div className="relative items-end flex-1 flex justify-center -mt-7 md:mt-20">
            <div ><Midcircle/></div>
            <div ><Midcircleone/></div>
                <img className="absolute bottom-0 z-10  md:h-[700px] w-[550px] h-[300px] md:rounded-none rounded-3xl" src="images/shape.png" alt="Shape"/>
                <img className="relative  z-20 md:w-[450px] md:h-[750px] w-[300px] h-[400px]" src="images/mid.png" alt="Main"/>
            </div>
        </div>
    );
}