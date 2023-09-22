import React, { useState } from "react";

const Form_1 = () => {
const [formData, setformData] = useState({
    name: "",
    email: "",
    password: ""
})

const handleInput = (e) => {
    const { name, value } = e.target;
    setformData({
        ...formData, [name]: value
    })

}
const handleSubmit = (e) => {
    e.preventDefault();
}

return (
    <div className="container h-auto w-1/2  bg-slate-200 mt-10 mx-auto">
        <form onSubmit={handleSubmit} className=" flex-wrap mt-5">
            <label className="ms-5 ">
                Name:
                <input type="text" value={formData.name} name="name" onChange={handleInput} className=" ms-6 mt-6 w-5/6 border-2 border-slate-300"></input>
            </label>

            <label  className="ms-5 ">
                Email:
                <input type="email" value={formData.email} name="email" onChange={handleInput} className=" ms-6 mt-6 w-5/6 border-2 border-slate-300"></input>
            </label><br></br>

            <label className="ms-5 ">
                Password:
                <input type="password" value={formData.password} name="password" onChange={handleInput}className=" ms-6 mt-6 w-4/6 border-2 border-slate-300"></input>
            </label><br></br>

            <button type="submit" className=" mt-5 ms-72 w-20 mb-5 border-2 border-green-700 bg-green-600 text-center text-green-900 font-semibold text-xl">Submit</button>
        </form>
    </div>
)
}
export default Form_1