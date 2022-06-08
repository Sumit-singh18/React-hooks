import React,{useState,useEffect} from 'react'
import axios from 'axios'

const Fetchusingaxios = () => {
    const[post,setPost]=useState({})
    const[id,setId]=useState(1)

    useEffect(() => {
      axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then(res => {
          setPost(res.data)
      })
      .catch(error => {
          console.log(error)
      })
    }, [id])
    
  return (
    <div>
        <h1>Fetch Api Using axios</h1>
        <input type="text" value={id} onChange={e=>setId(e.target.value)}/>
        <div>{post.title}</div>
    </div>
  )
}

export default Fetchusingaxios