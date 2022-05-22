import React, { useState } from 'react'

const Shortcircteval = () => {
    // short circuit eval is used to check the condition using operators))
    const [data, setData] = useState('Sumit')
  return (
    <div>
       <h1> Short Circuit Evaluation</h1>
       {/* in || operator if the data is empty then it will put the value of right hand side || from this operator   */}
       <button> {data|| 'Sumit'}</button> 
       {/*  in && operator it will not print the value (singh) if the data value is empty  */}
       <button>{data && 'Singh'}</button>
        </div>
  )
}

export default Shortcircteval;