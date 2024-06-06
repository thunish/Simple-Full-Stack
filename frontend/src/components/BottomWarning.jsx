import React from "react"
import { Link } from "react-router-dom"

export default function BottomWarning({label, buttonText, to}){
    return(
        <div className="flex justify-center py-2 text-sm">
            <div>{label}</div>
            <Link className="pointer pl-1 underline cursor-pointer" to={to}>{buttonText}</Link>
        </div>
    )
}