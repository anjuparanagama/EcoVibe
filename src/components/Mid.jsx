import React from "react";

export default function Mid() {
    return (
        <div className="bg-[#F4F4F4] mt-6  rounded-3xl w-full h-[650px] md:w-3/4 mx-auto flex flex-col md:flex-row">

            <div className="relative flex-1 mb-6 md:mb-0">
                <img className="absolute top-0 left-0 w-[500px] h-[500px] z-20 rounded-3xl " src="images/Blob.png" />
                <div className="relative z-30 mt-20 p-10 md:mt-32">
                    <h2 className="text-5xl font-semibold py-3 text-gray-800">
                        Love your plants<br/>Take care of yourself
                    </h2>
                    <p className="text-gray-600 mt-2 text-2xl">
                        Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Faucibus in libero risus<br/> semper habitant arcu eget. Et integer.
                    </p>
                    <button className="mt-4 px-6 py-3 bg-black text-white rounded-3xl hover:bg-slate-600">
                        Explore all plants
                    </button>
                </div>
            </div>

            <div className="relative flex-1 flex justify-center items-center">
                <img className="absolute bottom-0 z-10 w-[400px] h-[500px]" src="images/shape.png" alt="Shape"/>
                <img className="relative z-20 w-[350px] h-[600px]" src="images/main.png" alt="Main"/>
            </div>
        </div>
    );
}