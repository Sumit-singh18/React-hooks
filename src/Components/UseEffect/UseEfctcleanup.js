import React, { useState, useEffect } from 'react'

const UseEfctcleanup = () => {

  const [Width, setWidth] = useState(window.screen.width)
  const [movex,setMovex] =useState(0)
  const [movey,setMovey] =useState(0)

  const OriginalWidth = () => {
    setWidth(window.innerWidth)
  }
  const MouseMv=(e)=>{
    setMovex(e.clientX)
    setMovey(e.clientY)

  }

  useEffect(() => {
    window.addEventListener('resize', OriginalWidth) 
    window.addEventListener('mousemove',MouseMv)
    // return in effect is used as a cleanup function to clean a memory space
    return () => {
      window.removeEventListener('resize', OriginalWidth)

    }
  },[])
  return (
    <div>
      <p>Width of window is:{Width}</p>
      <h1>
        x:{movex}
        y:{movey}
      </h1>
    </div>
  )
}

export default UseEfctcleanup;



