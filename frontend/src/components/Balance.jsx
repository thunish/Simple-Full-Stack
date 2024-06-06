import React from "react";

export default function Balance({balance}){
    return(
        <div className="flex mt-4 py-3 items-center">
            <div className=" font-bold text-lg ml-2">
                Your Balance
            </div>
            <div className=" font-semibold ml-2">
                ₹{balance}
            </div>
        </div>
    )
}