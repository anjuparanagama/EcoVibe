import React from "react";

export default function Footer() {
    return (
        <div className=" bg-white grid grid-cols-1 m-12 md:-mt-20 fx:grid-cols-2 gap-4 border rounded-3xl relative border-gray-950 pl-4 z-50">
            <div className="p-4 border-b md:border-b-0 ">
                <div className="flex md:items-start items-center justify-center ">
                    <img className="md:w-[140px] md:h-[140px] w-[80px] h-[80px] self-center md:py-2 md:rounded  mr-4 " src="images/rec1.png" alt="rec1" />
                    <p className="md:pr-8 md:text-lg text-[15px] self-center "><p className="font-bold">Succulent Duo</p> A stunning air-purifying plant that thrives in low light, requires minimal care, and adds elegance to any space.</p>
                </div>
            </div>

            <div className="p-4">
                <div className="flex md:items-start items-center justify-center  ">
                    <img className="md:w-[140px] md:h-[140px] w-[80px] h-[80px] self-center md:py-2  md:rounded  mr-4 " src="images/rec2.png" alt="rec2" />
                    <p className="md:pr-8 md:text-lg text-[15px] self-center"><p className="font-bold">Peace Lily</p>These low-maintenance plants store water, require little attention, and are perfect for adding natural beauty to your indoor environment. </p>
                </div>
            </div>
        </div>
    );
}