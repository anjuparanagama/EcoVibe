import React from "react";

export default function Left() {
    return (
        <div className="w-full md:basis-1/2 p-4 md:p-12 rounded-br-[200px] bg-[#F2F2F2] relative z-0">
            <h2 className="text-4xl text-center dx:text-left sm:text-4xl md:text-6xl font-bold text-gray-800 mb-4 sm:ml-5 mt-4">
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
                        124K+ <br /> _______
                    </h3>
                    <p className="text-sm sm:text-base">Lorem ipsum<br /> consectetur</p>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                        126<br /> ________
                    </h3>
                    <p className="text-sm sm:text-base">Lorem Ipsum<br /> consectetur</p>
                </div>
                <div className="flex-1">
                    <h3 className="font-bold text-lg sm:text-xl md:text-2xl">
                        78K<br /> _______
                    </h3>
                    <p className="text-sm sm:text-base">Lorem Ipsum<br /> Consectetur</p>
                </div>
            </div>

            <div className="sm:ml-6 mt-6 md:pt-8 mb-5 dx:text-left text-center">
                <button className="bg-[#437223] text-white px-10 py-2 sm:px-8 sm:py-3 rounded-full text-lg sm:text-xl hover:bg-green-900 transition-colors">
                    Find Your Plant
                </button>
            </div>
        </div>
    );
}
