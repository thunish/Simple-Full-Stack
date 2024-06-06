import React from "react";
import Heading from "../components/Heading";
import SubHeading from "../components/SubHeading";
import InputComponent from "../components/InputComponent";
import Button from "../components/Button";
import BottomWarning from "../components/BottomWarning";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function Signup(){
    const navigate=useNavigate();
    const [firstName, setFirstName]=useState("")
    const [lastName, setLastName]=useState("")
    const [email, setEmail]=useState("")
    const [password, setPassword]=useState("")
    return (
        
        <div className="bg-slate-900 flex h-screen justify-center items-center ">
            
            <div className="flex flex-col justify-center text-center bg-white rounded-lg w-80 px-4">
                    <Heading label={"Sign up"}></Heading>
                    <SubHeading text={"Enter your information to create an account"}></SubHeading>
                    <InputComponent title={"First Name"} placer={"John"} onchange={e=>{
                        setFirstName(e.target.value)
                    }}></InputComponent>
                    <InputComponent title={"Last Name"} placer={"Doe"} onchange={e=>{
                        setLastName(e.target.value)
                    }} ></InputComponent>
                    <InputComponent title={"Email"} placer={"exampla@domain.com"} onchange={e=>{
                        setEmail(e.target.value)
                    }} ></InputComponent>
                    <InputComponent title={"Paswword"} placer={"********"} onchange={e=>{
                        setPassword(e.target.value)
                    }} ></InputComponent>
                    <Button text={"Sign up"} onclick={async ()=>{
                        const response=await axios.post("http://localhost:3000/api/v1/user/signup", {
                            username: email,
                            password: password,
                            lastName: lastName,
                            firstName: firstName,
                        })
                        localStorage.setItem("token", response.data.token)
                        navigate("/dashboard");
                    }}></Button>
                    <BottomWarning label={"Already have an account?"} buttonText={"Sign in"} to={"/signin"}></BottomWarning>
            </div>
        </div>
    )
}