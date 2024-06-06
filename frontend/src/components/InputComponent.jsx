import React from "react";

export default function InputComponent({title,placer,onchange}){
    return (
        <div>
            <div className="font-medium text-lg py-2 text-left">{title} :-</div>
            <input onChange={onchange} placeholder={placer} type="text" className="border-slate-300 border w-full rounded px-2 py-1" />
        </div>
    )
}