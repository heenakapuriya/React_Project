import React from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { buyCake } from "../redux/cake/cakeActions"

const HookContainer = () => {
    const numofCakes = useSelector(state => state.numOfCakes)
    const dispatch = useDispatch()

    return (
        <div>
            <h2>Num of Cakes-{numofCakes}</h2>
            <button onClick={() => dispatch(buyCake())}>Buy cake</button>
        </div>
    )
}

export default HookContainer