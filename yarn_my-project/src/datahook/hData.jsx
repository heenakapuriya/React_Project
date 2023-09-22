import React from 'react'
import { useState } from 'react'
import datas from "./data.json"

const Hdata = () => {

    const [nData, setnData] = useState(datas);

    const handleClick = () => {
        setnData([])
    }
    const handleremove = (itemId) => {
        setnData(nData.filter(item => item.id !== itemId))
    }
    return (
        <div>
            <ul>
                {
                    nData.map(items =>
                        <li key={items.id}>
                            {items.name}
                            <button onClick={() => handleremove(items.id)}>remove</button>
                        </li>)
                }
            </ul>

            <button onClick={handleClick}>clear</button>
        </div>
    )
}


export default Hdata