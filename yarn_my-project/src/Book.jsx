import React from 'react'

const Book = (props) => {
  const {image,title,author,price}=props;
  return (

    <>
  <div className=' inline-grid '>
    <div className="shadow-2xl h-auto w-80  mt-10 rounded-2xl ms-20 mb-10">
        <img src={image} alt="" className='h-80 w-80 rounded-2xl'/>
        <h2 className='text-gray-700 text-center font-semibold text-2xl  mt-2'>{title}</h2>
        <h3  className='text-gray-700 text-center font-semibold text-xl  mt-2'>{author}</h3>
        <p  className='text-gray-700 text-center font-semibold text-lg  mt-2'>Rs.{price}</p>
        <button className='mx-auto mb-5 mt-2 text-gray-700 text-center bg-green-500 flex alignself-center font-semibold text-lg h-10 w-32'>Add to cart</button>
    </div>
    </div>
    
    </>
  )
}

export default Book;