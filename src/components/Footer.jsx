import React from "react";

export default function Footer() {
    return (
        <div className=" bg-white grid grid-cols-1 m-12 md:-mt-20 md:grid-cols-2 gap-4 border rounded-3xl relative border-gray-950 p-4 z-50">
            <div className="p-4 border-b md:border-b-0 ">
                <div className="flex md:items-start items-center justify-center ">
                    <img className="w-[120px] h-[120px] rounded mr-4 " src="images/rec1.png" alt="rec1" />
                    <p class="md:pr-8 items-center justify-center md:text-lg text-sm"> Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero. Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.</p>
                </div>
            </div>

            <div className="p-4">
                <div className="flex md:items-start items-center justify-center  ">
                    <img className="w-[120px] h-[120px] md:items-start sm:justify-center rounded mr-4 " src="images/rec2.png" alt="rec2" />
                    <p class="md:text-lg text-sm">
                        Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero. Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.
                    </p>
                </div>
            </div>
        </div>
    );
}