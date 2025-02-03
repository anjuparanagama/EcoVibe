import React from "react";

export default function left() {
    return (
        <div>
            <div className="md:basis-1/2 p-6 md:p-12 rounded-br-[200px] bg-gray-200">
            <h2 className="text-5xl font-bold text-gray-800 mb-4 ml-20  mt-8 z-0	">
                Bring <span className="text-green-700">GREEN</span> to<br/> your home and<br/> make you feel <span className="text-green-700">BETTER</span>
            </h2><br/>
            <p className="text-gray-600 ml-20 ">
                Lorem ipsum dolor sit amet, consectetur<br/> adipiscing elit. Cursus imperdiet sed id<br/> elementum. Quam vel aliquam sit.
            </p>
            <br/>
            
            <div class = "flex flex-row ml-20 justify-around">
                <div className = "basis-1/3">
                <h3 className="font-bold">124K+ <br/> _______ </h3>
                <p>Lorem ipsum<br/> consectetur</p>
                </div>
                <div className = "basis-1/3">
                <h3 className="font-bold">126<br/> _______ </h3>
                <hr />
                <p>Lorem Ipsum<br/> consectetur</p>
                </div>
                <div className = "basis-1/3">
                <h3 className="font-bold">78K<br/> _______ </h3>
                <hr />
                <p>Lorem Ipsum<br/> Consectetur</p>
                </div>
            </div>
            <br/>
            <div>
                <button class = " bg-green-800 text-white px-8 py-2 rounded-full ml-20 text-xl pb-2">find your plant</button>
            </div>
            </div>
        </div>
    )
}