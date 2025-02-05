import React from "react";

export default function Right() {
    return (
        <div className="relative"> 
            <div className="md:basis-1/2 flex z-10">
                <div className="flex justify-center items-center relative"> 
                    <img className="w-[700px] [h-646px]" src="/images/left.png" alt="A conceptual representation of a green home project."/>

                    <div className="absolute -top-4 -right-8 bg-white rounded-full p-2 pt-10 z-20"> 
                        <img className="w-138px h-138px max-w-md:100px max-h-dvh:100px" src="/images/Font circle.png" alt="Circle overlay" />
                    </div>
                </div>
            </div>
        </div>
    );
}