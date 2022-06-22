import React,{useState} from 'react'

const UseStateSpreadop = () => {

     const [name, setName] = useState({firstName:'',lastName:''})

  return (
    <div>UseState objec with Spread operator

        <form>
            <input type="text" placeholder='Name' value={name.firstName} onChange={e=>{setName({...name,firstName:e.target.value}) }}/>
            <input type="text" placeholder='lastName' value={name.lastName} onChange={e=>{setName({...name,lastName:e.target.value}) }}/>

        </form>
{name.firstName}
{name.lastName}
    </div>
  )
}

export default UseStateSpreadop