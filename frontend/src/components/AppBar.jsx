import React from "react";
import { useNavigate } from "react-router-dom";

export default function AppBar(){
    const navigate=useNavigate();
    return (
        <div>
            <div className=" shadow-lg flex  justify-between">
                <div className="flex flex-col justify-center  ml-4 text-xl font-medium">
                    PayTm App
                </div>
                <div className="flex">
                    <div className=" flex flex-col justify-center h-full mr-4 text-xl">
                        Hello
                    </div>
                    <div className=" w-12 h-12 rounded-full bg-slate-200 flex justify-center mt-2 mr-2 mb-2">
                        <span className=" flex flex-col h-full justify-center text-xl">U</span>
                    </div>
                    <div className="flex flex-col justify-center">
                        <button onClick={()=>{
                            localStorage.removeItem("token");
                            navigate("/signin")
                        }} className="bg-slate-700 text-white rounded-lg flex flex-col justify-center px-4 py-2 mr-2">Logout</button>
                    </div>
                </div>
            </div>
        </div>
    )
}