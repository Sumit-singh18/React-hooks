import React from 'react'
import {useSelector,useDispatch} from 'react-redux'
import {Increment,Decrement} from './Action/Action'

const Apps = () => {
  const myState = useSelector((state)=> state.ChangeValue)
  const dispatch = useDispatch();
  return (
    <>
       <div>
        <h1>Increment And Decrement </h1>
        <button onClick={()=>dispatch(Decrement())}>-</button>
        <input 
        type='text'
        value={myState}/>
        <button onClick={()=>dispatch(Increment())}>+</button>
       </div>
    </>
  )
}

export default Apps