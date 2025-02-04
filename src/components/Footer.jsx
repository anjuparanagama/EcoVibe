import React from "react";

export default function Footer() {
    return (
        <div className="grid grid-cols-1 m-12 md:grid-cols-2 gap-4 border rounded-lg border-gray-950 p-4">
            <div className="p-4 border-b md:border-b-0 ">
                <div className="flex items-start">
                    <img className="w-16 h-16 rounded mr-4" src="images/rec1.png" alt="rec1" />
                    <p class="text-base"> Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero. Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.</p>
                </div>
            </div>

            <div className="p-4">
                <div className="flex items-start">
                    <img
                        className="w-16 h-16 rounded mr-4" src="images/rec2.png" alt="rec2" />
                    <p class="text-base">
                        Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero. Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.
                    </p>
                </div>
            </div>
        </div>
    );
}