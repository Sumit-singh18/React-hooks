import React,{useState,useEffect} from 'react'

const UseEffect1 = () => {

const [count, setCount] = useState(0)

useEffect(() => {
    console.log('Hello Useeffect')
    document.title=`you click (${count})`
  
},[count]);
// [] we are givig these empty dependencies array to avoid re-render the page every time but if we want to render only when the button is clicked 
// then we need to pass the value in the empty array as seen above [count] so it will only render the page when the value of count will be changed

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