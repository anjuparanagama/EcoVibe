import React from "react";

export default function Right() {
    return (
        <div>
            <div className="md:basis-1/2 flex ">
                <div className="flex justify-center items-center">
                    <img className="w-3/4 h-auto" src="/images/left.png" alt="A conceptual representation of a green home project."/>
                    </div>
                {/*circle image*/}
                <div className="absolute -top-4  -right-4 bg-white rounded-full p-5 shadow-lg z-100">
                        <img src= "/images/Font cirlce.png" />
                </div>
            </div>
        </div>
    )
}