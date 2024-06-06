import React, { useEffect } from "react";
import AppBar from "../components/AppBar";
import Balance from "../components/Balance";
import Users from "../components/Users";
import { useNavigate } from "react-router-dom";

export default function Dashboard(){
    const navigate=useNavigate();
    const token=localStorage.getItem("token");
    useEffect(()=>{
        if(!token){
            navigate("/signin");
            // return;  
        }
    },[])
    if(!token){
        return null
    }
    return(
        <div className="bg-slate-900 flex justify-center h-screen items-center">
            <div className="bg-white w-6/12 rounded-lg min-w-fit">
                <AppBar></AppBar>
                <Balance balance={"90,000"}></Balance>
                <Users></Users>
            </div>
        </div>
    )
}