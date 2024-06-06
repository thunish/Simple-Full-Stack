import React from "react";

export default function Button({text,onclick}){
    return(
        <button onClick={onclick} type="button" className="w-full px-2 bg-gray-800 text-white rounded-lg py-2.5 my-2 hover:bg-gray-900 font-normal text-sm">{text}</button>
        
    )
}