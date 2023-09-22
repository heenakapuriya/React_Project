import React from "react"

let tea = () => {
  return <div className=" container flex justify-center mt-28">
    <div className="h-96 w-96  rounded-2xl shadow-2xl shadow-gray-500">
      <h1 className=" text-4xl font-semibold text-center text-red-900 mt-4" >TEA</h1>
      <div className="h-36 w-48 mt-5 mb-5 mx-auto">
        <img src="https://pngimg.com/uploads/tea/tea_PNG16927.png" className="flex justify-center"></img>
      </div>
      <p className="text-xl font-semibold m-3   text-red-800 text-center">Part of plant tea leaf</p>
      <p className="text-xl font-semibold m-2   text-red-800 text-center">Caffeine content 15-70 mg/cup </p>
      <p className="text-xl font-semibold m-2   text-red-800 text-center">Age 4,000 + year</p>
    </div>
  </div>

}

let coffee = () => {
  return <div className=" container flex justify-center mt-28">
    <div className="h-96 w-96  rounded-2xl shadow-2xl shadow-gray-500">
      <h1 className=" text-4xl font-semibold text-center text-red-900 mt-4" >COFFEE</h1>
      <div className="h-36 w-48 mt-5 mb-5 mx-auto">
        <img src="https://th.bing.com/th/id/OIP.0OWxA3RrmUPUHfeXYxfuAQAAAA?pid=ImgDet&rs=1" className="flex justify-center"></img>
      </div>
      <p className="text-xl font-semibold m-3   text-red-800 text-center">Part of plant coffee bean</p>
      <p className="text-xl font-semibold m-2   text-red-800 text-center">Caffeine content 80-185 mg/cup </p>
      <p className="text-xl font-semibold m-2   text-red-800 text-center">Age 1,000 + year</p>
    </div>
  </div>
}

let Find = ({ tea_leafs, coffe_beans, find_result }) => {
  if (find_result === "TEA") {
    return <div>{tea_leafs}</div>
  }
  else if (find_result === "COFFEE") {
    return <div>{coffe_beans}</div>
  }
  else {
    return <h1>not found</h1>
  }
}

const Condition_1 = () => {
  return (
    <div>
      <Find tea_leafs={tea()} coffe_beans={coffee()} find_result="TEA" />
    </div>
  )
}

// const itemList = ["Tea", "Coffee"];
// const Find = itemList.includes("Coffee");
// const Tea = () => {


//   return (document.getElementById("result").innerHTML`
//   <div  className=" container flex justify-center mt-28">
 
//     <div className="h-96 w-96  rounded-2xl shadow-2xl shadow-gray-500">
//       <h1 className=" text-4xl font-semibold text-center text-red-900 mt-4" >TEA</h1>
//       <div className="h-36 w-48 mt-5 mb-5 mx-auto">
//        <img src="https://pngimg.com/uploads/tea/tea_PNG16927.png" className="flex justify-center"></img></div>
//       <p className="text-xl font-semibold m-3   text-red-800 text-center">Part of plant tea leaf</p>
//       <p className="text-xl font-semibold m-2   text-red-800 text-center">Caffeine content 15-70 mg/cup </p>
//       <p className="text-xl font-semibold m-2   text-red-800 text-center">Age 4,000 + year</p>
//     </div>
//   </div>
//   `)

// }
// let Coffee = () => {
//   return (document.getElementById("result").innerHTML`
//   <div  className=" container flex justify-center mt-28">
//     <div className="h-96 w-96  rounded-2xl shadow-2xl shadow-gray-500">
//       <h1 className=" text-4xl font-semibold text-center text-red-900 mt-4" >COFFEE</h1>
//       <div className="h-36 w-48 mt-5 mb-5 mx-auto">
//         <img src="https://pngimg.com/uploads/tea/tea_PNG16927.png" className="flex justify-center"></img></div>
//       <p className="text-xl font-semibold m-3   text-red-800 text-center">Part of plant coffee bean</p>
//       <p className="text-xl font-semibold m-2   text-red-800 text-center">Caffeine content 80-185 mg/cup </p>
//       <p className="text-xl font-semibold m-2   text-red-800 text-center">Age 1,000 + year</p>
//     </div>
//    </div>
//  `)
// }

// const handleclick = ({ TEA, COFFEE, Find_result }) => {
//   if (Find_result) {
//     return <div>{TEA}</div>
//   }
//   else {
//     return <div>{COFFEE}</div>
//   }

// }
// const Condition_1 = () => {
//   return (
//     <div>
//     <button onClick={handleclick} className="bg-green-600 text-white">click me!</button>
//     <h1 id="result">information</h1>
//     </div>
//   )
// }


export default Condition_1;
