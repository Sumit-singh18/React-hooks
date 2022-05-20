import React ,{useState}from 'react'
// we learn about ... dot lesson in this file
const UseStateWObject = () => {

    const [myObj,setMyObj] = useState({name:'Sumit-kumar',age:72, qualification:"5th Class Passed"})

    const ChangeObj=()=>{
        // ...dot is used to copy all the object from the variable.
        setMyObj({...myObj,name:'Sumit-Singh'})

    }

  return (
    <div>
        <h1> Name:{myObj.name} & Age:{myObj.age} & Qualification: {myObj.qualification}</h1>
        <button onClick={ChangeObj}> Update Value</button>
    </div>
  )
}

export default UseStateWObject;