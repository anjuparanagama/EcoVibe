import React from "react";

export default function Mid() {
    return (
        <div className="bg-white mt-6 p-6 rounded-md shadow-lg w-11/12 md:w-3/4 mx-auto flex flex-row">
            <div>
                <h2 className="text-2xl font-semibold text-gray-800">Love your plants<br/>Take care of yourself</h2>
                <p className="text-gray-600 mt-2">
                Lorem ipsum dolor sit amet, consectetur<br/>adipiscing elit. Faucibus in libero risus<br/> semper habitant arcu eget. Et integer.
                </p>
                <button >explore all plants</button>
            </div>
        
            <div >
                <img src = "images/main.png"/>
            </div>
        </div>
    )
}