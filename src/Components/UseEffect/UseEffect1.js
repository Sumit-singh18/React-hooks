import React,{useState,useEffect} from 'react'

const UseEffect1 = () => {

const [count, setCount] = useState(0)

useEffect(() => {


    console.log('Hello Useeffect')
    document.title=`you click (${count})`
  
})

const Update =()=>{
    setCount(count+2)
}


  return (
    <div>
        <h1>{count}</h1>
        <button onClick={Update}>Click me</button>
    </div>
  )
}

export default UseEffect1