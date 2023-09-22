import React from 'react'
import TeaCoffe from './TeaList';




const Tea = () => {
return (document.getElementById("result").innerHTML=`
<div  className=" container flex justify-center mt-28 ">

  <div className="h-96 w-96  rounded-2xl shadow-2xl shadow-gray-500 p-10">
    <h1 className=" text-4xl font-semibold text-center text-red-900 mt-4" >TEA</h1>
    <div className="h-36 w-48 mt-5 mb-5 mx-auto">
     <img src="https://pngimg.com/uploads/tea/tea_PNG16927.png" className="flex justify-center"></img></div>
    <p className="text-xl font-semibold m-5   text-red-800 text-center">Part of plant tea leaf</p>
    <p className="text-xl font-semibold m-2   text-red-800 text-center">Caffeine content 15-70 mg/cup </p>
    <p className="text-xl font-semibold m-2   text-red-800 text-center">Age 4,000 + year</p>
  </div>
</div>
`)

}
let Coffee = () => {
return (document.getElementById("result").innerHTML=`
<div  className=" container flex justify-center mt-28 ">
  <div className="h-96 w-96  rounded-2xl shadow-2xl shadow-gray-500 p-10">
    <h1 className=" text-4xl font-semibold text-center text-red-900 mt-4" >COFFEE</h1>
    <div className="h-36 w-48 mt-5 mb-10 mx-auto">
      <img src="https://th.bing.com/th/id/OIP.0OWxA3RrmUPUHfeXYxfuAQAAAA?pid=ImgDet&rs=1" className="flex justify-center"></img></div>
    <p className="text-xl font-semibold m-5 mt-5   text-red-800 text-center">Part of plant coffee bean</p>
    <p className="text-xl font-semibold m-2   text-red-800 text-center">Caffeine content 80-185 mg/cup </p>
    <p className="text-xl font-semibold m-2   text-red-800 text-center">Age 1,000 + year</p>
  </div>
 </div>
`)
}

const Teadata = () => {
  return (
    <div>
    <TeaCoffe name="click me" TEA_PRODUCTION={Tea} COFFEE_PRODUCTION={Coffee}></TeaCoffe>
    </div>
  )
}

export default Teadata