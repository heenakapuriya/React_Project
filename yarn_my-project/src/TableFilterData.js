import React from 'react'



const TableFilterData = (props) => {


    let { image, title, auther, type, price } = props;
    return (
        <>
            <tr className='border border-separate border-slate-800 h-36 '>
                <td className='border-2 border-collapse border-slate-800'><img src={image} alt={title} className='h-36 w-36' /></td>
                <td className='border-2 border-collapse border-slate-800 text-center text-gray-700'> <h5>{title}</h5></td>
                <td className='border-2 border-collapse border-slate-800 text-center text-gray-700 w-56'><h5>{type}</h5></td>
                <td className='border-2 border-collapse border-slate-800 text-center text-gray-700 w-40'><h5>{auther}</h5></td>
                <td className='border-2 border-collapse border-slate-800 text-center text-gray-700 w-28'><h5>{price}</h5></td>

            </tr>
        </>
    )

}

export default TableFilterData;