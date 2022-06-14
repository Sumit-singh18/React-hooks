import React,{useState} from 'react'

const Functionnclick = () => {

    const [event, setEvent] = useState()

    const changeevent=()=>{
        let value = event
        value === null ? setEvent('hi button ') :setEvent('by ')

    }
  return (
    <div>
        <button onClick={changeevent}> Click me</button>
        <h1>{event}</h1>
    </div>
  )
}

export default Functionnclick;