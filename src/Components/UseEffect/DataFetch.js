// fetching the data using button and axios\
import React ,{useState,useEffect}from 'react'
import axios from 'axios'

const DataFetch = () => {
    const[api,setApi]=useState({})
    const [id,setId]=useState(1)
    const[idfromclick,setIdfromclick]=useState(1)
    

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/photos/${idfromclick}`)
        .then(response => {
            setApi(response.data)
        })
      .catch(error => {
          console.log(error.message)
      })
    }, [idfromclick])
    
    const handlevent=()=>{
        setIdfromclick(id)
    }



  return (
    <div>
        <h1>Fetching the data using button</h1>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <button onClick={handlevent}>Fetch IMage Url</button>
        <h5>{api.title}</h5>
    </div>
  )
}

export default DataFetch