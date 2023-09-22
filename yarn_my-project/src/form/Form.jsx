import React, { useState } from "react";

const Form = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

const handleName = (e) => {
        setName(e.target.value);
    }

    const handleEmail = (e) => {
        setEmail(e.target.value)
    }

    const handlePassword = (e) => {
        setPassword(e.target.value)
    }

    const handelSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <div className="container h-auto w-1/2  bg-slate-200 mt-10 mx-auto">
            <form onSubmit={handelSubmit} className=" flex-wrap mt-5">
                <label className="ms-5 ">
                    Name:
                    <input type="text" value={name} onChange={handleName} className=" ms-6 mt-6 w-5/6 border-2 border-slate-300"></input>
                </label>

                <label  className="ms-5 ">
                    Email:
                    <input type="email" value={email} onChange={handleEmail} className=" ms-6 mt-6 w-5/6 border-2 border-slate-300"></input>
                </label><br></br>

                <label className="ms-5 ">
                    Password:
                    <input type="password" value={password} onChange={handlePassword}className=" ms-6 mt-6 w-4/6 border-2 border-slate-300"></input>
                </label><br></br>

                <button type="submit" className=" mt-5 ms-72 w-20 mb-5 border-2 border-green-700 bg-green-600 text-center text-green-900 font-semibold text-xl">Submit</button>
            </form>
        </div>
    )
}
export default Form