import React,{useState,useEffect} from 'react'

const UseEfctcleanup = () => {

  const [Width, setWidth] = useState(window.screen.width)

  const OriginalWidth=()=>{
    setWidth(window.innerWidth)
  }

  useEffect(() => {
    window.addEventListener('resize' , OriginalWidth)
    // return in effect is used as a cleanup function to clean a memory space
    return()=>{
      window.removeEventListener('resize', OriginalWidth)
    }
  })
  return (
    <div>
      <p>Width of window is:</p>
        <h1>
            {Width}
        </h1>
    </div>
  )
}

export default UseEfctcleanup