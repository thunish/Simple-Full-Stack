import React, { useEffect } from "react";
import { useState } from "react";
import Button from "./Button";
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function Users(){
    const [users, setUsers]=useState([]);
    const [inputChanged, setInputChanging]=useState(true);
    const [filter, setFilter]=useState("")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get("http://localhost:3000/api/v1/user/bulk?filter="+filter,{
                    headers:{
                        Authorization:"Bearer "+localStorage.getItem("token")
                    }
                });
                setUsers(response.data.user);
            } catch (error) {
                console.error("Error fetching users:", error);
            }
        };

        fetchData();
    }, [filter]);

    return(
        <div className="">
            <div className=" font-bold ml-2 mt-4 text-xl  ">Users :-</div>
            <div className="my-3 ml-2 mr-2">
                <input onChange={(e)=>{
                    setFilter(e.target.value)
                }} className="w-full px-2 py-1 border rounded-lg border-slate-200 " type="text" placeholder="Search Users..."/>
            </div>
            <div>
                {
                    users.map(user=><TheUsers user={user}></TheUsers>)
                }
            </div>
        </div>
    )
}

function TheUsers({user}){
    const navigate=useNavigate();
    return (
        <div className="flex justify-between mx-2 mb-4 ">
                <div className="flex">
                    <div className=" w-12 h-12 rounded-full flex justify-center bg-slate-200 mt-1 mr-2">
                        <div className="text-xl flex items-center h-full">
                            {user.firstName[0]}
                        </div>
                    </div>
                    <div className="h-full flex flex-col justify-center">
                        <div>
                            {user.firstName} {user.lastName}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full ml-10">
                    <button onClick={(e)=>{
                        navigate(`/transaction?id=${user._id}&name=${user.firstName}`)
                    }} className="bg-slate-700 text-white rounded px-4 h-full py-2 justify-center hover:bg-slate-900 mt-2">
                        Send Money
                    </button>
                </div>
        </div>
    )
}