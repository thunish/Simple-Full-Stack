import React, { useEffect, useState } from 'react'
import Heading from '../components/Heading';
import { useSearchParams } from 'react-router-dom';
import axios from "axios"
import { useNavigate } from 'react-router-dom';

export default function SendMoney(){
    const [searchParams]=useSearchParams();
    const id=searchParams.get("id");
    const name=searchParams.get("name")
    const [amount, setAmount]=useState(0)
    const navigate=useNavigate();
    const token=localStorage.getItem("token");

    useEffect(()=>{
        if(!token){
            navigate("/signin");
        }
    },[])
    if(!token){
        return null;
    }
        return(
            <div className='bg-slate-800 h-screen flex justify-center  items-center'>
                <div className='bg-white rounded-lg flex flex-col '>
                    <div className="w-96 max-w-md  p-4 text">
                        <Heading label={"Send Money"}></Heading>
                        <div className='py-6'>
                            <div className=' flex items-center space-x-4'>
                                <div className=' flex justify-center bg-slate-200 w-12 h-12 rounded-full items-center'>
                                    <span className=' text-2xl font-normal'>{name[0].toUpperCase()}</span>
                                </div>
                                <div className='text-xl font-semibold'>
                                    {name}
                                </div>
                            </div>
                            <div className=' space-y-4 ' >
                                <div class="space-y-2">
                                    <label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for="amount"
                                    >
                                        Amount (in Rs)
                                    </label>
                                    <input
                                        type="number"
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                        id="amount"
                                        placeholder="Enter amount"
                                        onChange={(e)=>{
                                            setAmount(e.target.value)
                                        }}
                                    />
                                </div>
                                <button onClick={async ()=>{
                                    await axios.post("http://localhost:3000/api/v1/account/transfer", {
                                        to:id,
                                        amount:amount
                                    },{
                                        headers:{
                                            Authorization:"Bearer "+localStorage.getItem("token")
                                        }
                                    })
                                }} className=" justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-slate-700 hover:bg-slate-900 text-white">
                                    Initiate Transfer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
}

