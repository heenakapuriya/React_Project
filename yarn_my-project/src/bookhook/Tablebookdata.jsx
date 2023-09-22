import React from 'react'
import { useState } from 'react'
import BookData from './book.json';


const BookTableList = () => {
    const [nData, setnData] = useState(BookData);

    const handleClick = () => {
        setnData([])
    }
    const handleremove = (itemId) => {
        setnData(nData.filter(item => item.id !== itemId))
    }
    
    return (
        
           
<div>
            <div className="h-auto w-full mt-2 ">
                <table className="border-2 border-slate-800 border-colapse mx-auto">
                    <thead>
                        <tr className="h-14 text-grey-500">
                            <th className="h-14 text-center text-gray-700">Image</th>
                            <th className="h-14  text-gray-700">Title</th>
                            <th className="h-14  text-gray-700">Auther</th>
                            <th className="h-14  text-gray-700">Type</th>
                            <th className="h-14  text-gray-700">Price</th>
                            <th className="h-14  text-gray-700">Price</th>
                        </tr>
                    </thead>


                    <tbody>



                        {
                            nData.filter((ele1) => { return (ele1.type === "Action") }).map((ele1) => {
                                return (



                                    <tr className='border border-separate border-slate-800 h-36 '>
                                        <td className='border-2 border-collapse border-slate-800'><img src={ele1.image} className='h-36 w-36' /></td>
                                        <td className='border-2 border-collapse border-slate-800 text-center text-gray-700'> <h5>{ele1.title}</h5></td>
                                        <td className='border-2 border-collapse border-slate-800 text-center text-gray-700 w-56'><h5>{ele1.type}</h5></td>
                                        <td className='border-2 border-collapse border-slate-800 text-center text-gray-700 w-40'><h5>{ele1.auther}</h5></td>
                                        <td className='border-2 border-collapse border-slate-800 text-center text-gray-700 w-28'><h5>{ele1.price}</h5></td>
                                        <td><button onClick={() => handleremove(ele1.id)}>remove</button></td>

                                    </tr>
                                )
                            })
                        }
                    </tbody>
                </table>

            </div>
        

            <button onClick={handleClick}>clear</button>

            </div>
    )
                    }
    
       
export default BookTableList;