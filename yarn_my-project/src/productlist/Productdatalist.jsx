import React from 'react'
import productList from "./product.json"
import { useState } from 'react'




const Productdatalist = () => {
    const [productData, setproductData] = useState(productList);

    const handleremove = (itemId) => {
        setproductData(productData.filter(item => item.id !== itemId))
    }

    
    const [newName,setNewName]=useState("");
    const [Name , setName] = useState(productData.Name);

    const eventhandler = () =>{
        setName(newName);
     } 
   
     const changehandler = (event) =>{
       setNewName(event.target.value);
     }
    return (
        <>
            <div className=" container h-auto  mx-auto">
                <div className='flex '>
                    <div className='  text-grey-800  mt-2 font-semibold'>
                        <h1 className='text-xl h-16'>Contacts</h1>
                    </div>
                    <div className='flex justify-end w-full mt-2'>
                    <input type="text" className='w-80 me-6 h-10 border-green-300 border-2' value={newName} onChange={changehandler}/>
                    
                        <div className=''>
                            <button className='w-40 h-10 bg-blue-600 rounded-lg'>Add Contacts</button>
                        </div>
                        <div className=' bg-blue-600 h-10 w-10 rounded-lg ms-3 text-center'>2</div>
                        <div className='border-2 border-blue-600 h-10  w-10 rounded-lg ms-3 text-center'>3</div>
                        <div className=''><input type='text' placeholder='Search Contact' className='ms-3 w-36 rounded-lg border-2 h-10 text-center text-lg text-slate-400 border-slate-200'></input></div>
                    </div>
                </div>

                <table className="border-2 w-full border-colapse table-fixed">
                    <thead>
                        <tr className="h-14 text-grey-500">
                            <th className="h-14 text-center text-gray-700">Name</th>
                            <th className="h-14  text-gray-700">Email</th>
                            <th className="h-14  text-gray-700">Location</th>
                            <th className="h-14  text-gray-700">Phone</th>
                            <th className="h-14  text-gray-700">Action</th>
                        </tr>
                    </thead>
                    <tbody className='text-center  text-gray-700'>
                        {
                            productData.map((ele1) => {
                                return (

                                    <>
                                        <tr className='border-2  border-colapse  h-12 '>
                                            <td className='flex justify-start ms-8'><img src={ele1.Image} alt="" className='h-12 border-2 rounded-full ' /><span className=" mt-3 ms-2">{Name}</span></td>
                                            <td className=' '>{ele1.Email}</td>
                                            <td className=''>{ele1.Location}</td>
                                            <td className=' '>{ele1.Phone}</td>
                                            <td className=''>   
                                            <button className="border-2 border-blue-500 w-16  rounded-lg text-lg text-violet-600" onClick={eventhandler}>Edit</button>

                                                <button onClick={() => handleremove(ele1.id)} className="border-2  ms-3 border-red-500 w-16 text-center rounded-lg text-lg text-red-600">Delete</button></td>


                                        </tr>
                                    </>
                                )
                            }
                            )
                        }



                    </tbody>
                </table>
            </div>

        </>
    )
}
export default Productdatalist