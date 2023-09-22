import React from 'react'
import { useState } from 'react'
import photo from "./App.json"


const App = () => {
  const [pData, setpData] = useState(photo);

  const [search, setNewSearch] = useState("");
  const handleSearchChange = (e) => {
    setNewSearch(e.target.value);
  }

    const handleClick = () => {
      setpData([])
    }

    return (
      <>
        <div>
          <div className="h-auto  mt-2 ">
            <input type='text' placeholder='search here for Beach,Food,Mountain,Bird' className='h-15 w-1/2 border p-4 text-xl font-semibold ' onChange={handleSearchChange}></input>
            <table className="border-2 w-1/2 mt-5 table-fixed border-slate-800 border-colapse text-center text-2xl">
              <thead>
                <tr className="h-14 text-grey-500">

                  <th className="h-14  text-gray-700">id</th>
                  <th className="h-14 text-center text-gray-700">Image</th>
                  <th className="h-14  text-gray-700">Title</th>

                </tr>
              </thead>
              <tbody>

                {
                  pData.filter((ele1) => { return (ele1.title === search) }).map((ele1) => {
                    return (
                      <tr className='border border-separate border-slate-800 h-36 '>
                        <td className='border-2 border-collapse border-slate-800 text-center w text-gray-700'> <h5>{ele1.id}</h5></td>
                        <td className='border-2 border-collapse border-slate-800'><img src={ele1.image} alt='' className='h-36 w-40 mx-auto' /></td>

                        <td className='border-2 border-collapse border-slate-800 text-center text-gray-700 w-56'><h5>{ele1.title}</h5></td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
          </div>
          <div className='flex justify-center mt-3 mb-3'>
            <button className="w-20 text-xl font-semibold  bg-red-500 text-gray-700 rounded-lg h-10" onClick={handleClick}>clear</button>
          </div>
        </div>
      </>
    )
  }

  export default App
