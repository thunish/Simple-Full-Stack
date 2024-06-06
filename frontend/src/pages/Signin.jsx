import React, { useState } from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Signin(){
    const navigate=useNavigate();
    const [username, setUsername]=useState("");
    const [password, setPassword]=useState("");

    return (
        <div className="bg-slate-900 flex h-screen justify-center items-center ">
            <div className="flex flex-col justify-center text-center bg-white rounded-lg w-80 px-4">
                    <Heading label={"Sign in"}></Heading>
                    <SubHeading text={"Enter your credentials to access your account"}></SubHeading>
                    <InputComponent onchange={(e)=>{
                        setUsername(e.target.value)
                    }} title={"Email"} placer={"exampla@domain.com"}></InputComponent>
                    <InputComponent onchange={(e)=>{
                        setPassword(e.target.value)
                    }} title={"Paswword"} placer={"********"}></InputComponent>
                    <Button onclick={async ()=>{
                        const response=await axios.post("http://localhost:3000/api/v1/user/signin",{
                            username,
                            password
                        })
                        localStorage.setItem("token",response.data.token);
                        navigate("/dashboard")
                    }} text={"Sign in"}></Button>
                    <BottomWarning label={"Don't have an account?"} buttonText={"Sign up"} to={"/signup"}></BottomWarning>
            </div>
        </div>
    )
}