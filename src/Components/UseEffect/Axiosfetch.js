import React, { useState,useEffect } from 'react'
import axios from 'axios'

const Axiosfetch = () => {
    const[post,setPost]=useState([])
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')

        .then(res=> {
            setPost(res.data)
        })
        .catch(error => {
            console.log(error.message)
         })
      }, [])

  return (
    <div>
        <h1>Axios api fetch with Useeffect</h1>
        {
            post.map((posts)=>{
                return(
                    <h4 key={posts.id}>{posts.title}</h4>
                    )
            })
        }
    </div>
  )
}

export default Axiosfetch;