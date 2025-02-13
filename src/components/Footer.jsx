import React from "react";

export default function Footer() {
    return (
        <div className=" bg-white grid grid-cols-1 m-12 md:-mt-20 fx:grid-cols-2 gap-4 border rounded-3xl relative border-gray-950 p-4 z-50">
            <div className="p-4 border-b md:border-b-0 ">
                <div className="flex md:items-start items-center justify-center ">
                    <img className="w-[140px] h-[140px]  self-center rounded mr-4 " src="images/rec1.png" alt="rec1" />
                    <p className="md:pr-8 md:text-lg text-[15px] self-center "> Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero. Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.</p>
                </div>
            </div>

            <div className="p-4">
                <div className="flex md:items-start items-center justify-center  ">
                    <img className="w-[140px] h-[140px] self-center  rounded mr-4 " src="images/rec2.png" alt="rec2" />
                    <p className="md:pr-8 md:text-lg text-[15px] self-center">
                        Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero. Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.
                    </p>
                </div>
            </div>
        </div>
    );
}