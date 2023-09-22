import React from 'react'

const TeaList = ({ name,TEA_PRODUCTION, COFFEE_PRODUCTION}) => {
    let isStatus=false;
    function handleclick(){
    if (isStatus) {
        TEA_PRODUCTION()
    }
    else {
        COFFEE_PRODUCTION()
    }
    isStatus=!isStatus;
}

return (
    <div className='h-auto'>
   <div className='mt-3  flex justify-center'>
    <button onClick={handleclick} className='h-10 w-20 bg-green-800 rounded-xl text-center text-amber-50  '>{name}</button>
    </div>
    <div id="result" className="h-auto w-96 mx-auto mt-5 text-center text-slate-900 bg-amber-50 font-semibold text-2xl shadow-2xl rounded-2xl shadow-gray-600"></div>
      
    </div>
  )
}
export default TeaList