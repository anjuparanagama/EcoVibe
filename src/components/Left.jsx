import React from "react";

export default function Left() {
    return (
        <div className="w-full md:basis-1/2 p-4 md:p-12 rounded-br-[200px] bg-[#F2F2F2] relative z-0">
            <h2 className="text-4xl text-center dx:text-left sm:text-4xl md:text-[56px] md:leading-[72px] font-bold text-gray-800 mb-4 sm:ml-5 mt-4">
                Bring <span className="text-green-700">GREEN</span> to
                <br /> your home and
                <br /> make you feel <span className="text-green-700">BETTER</span>
            </h2>

            <p className="text-gray-600 text-center dx:text-left sm:ml-6 text-base sm:text-lg md:text-2xl md:py-4 mt-4">
                Lorem ipsum dolor sit amet, consectetur
                <br /> adipiscing elit. Cursus imperdiet sed id
                <br /> elementum. Quam vel aliquam sit.
            </p>

            <div className="flex flex-col text-center md:pt-2 dx:text-left sm:flex-row sm:ml-6 mt-4 sm:gap-1">
                <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                        124K+ </h3>
                    <h3  className="font-mono font-extrabold -mt-4 ">______</h3>
                    <p className="text-sm hidden sm:block sm:text-base">Lorem ipsum<br /> consectetur</p>
                    <p className="text-sm sm:hidden block ">Lorem ipsum consectetur</p>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                        126</h3>
                    <h3  className="font-mono font-extrabold -mt-4 ">______</h3>
                    <p className="text-sm sm:text-base hidden sm:block">Lorem Ipsum<br /> consectetur</p>
                    <p className="text-sm sm:hidden block ">Lorem ipsum consectetur</p>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl ">
                        78K</h3>
                    <h3  className="font-mono font-extrabold -mt-4 ">______</h3>
                    <p className="text-sm sm:text-base hidden sm:block">Lorem Ipsum<br /> Consectetur</p>
                    <p className="text-sm sm:hidden block ">Lorem ipsum consectetur</p>
                </div>
            </div>

            <div className="sm:ml-6 mt-6 md:pt-8 mb-5 dx:text-left text-center">
                <button className="bg-[#437223] text-white px-8 py-2 md:px-[56px] md:py-[24px] md:leading-[18px] rounded-[40px]  text-[15px] md:text-[24px] hover:bg-green-900 transition-colors">
                    Find Your Plant
                </button>
            </div>
        </div>
    );
}
