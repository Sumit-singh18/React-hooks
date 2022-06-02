import React, { useRef, useState } from 'react'

// preserve Value
// does not triggerre-render
// targeting the node /element

const UseReff_Basic = () => {
  const [rname, setRname] = useState(false)
  const name = useRef(null)

  const SubmitData = (e) => {
    e.preventDefault()
    var vname = name.current.value;
    vname === "" ? alert('please fill your name') : setRname(true)
  }




  return (
    <>
      <div>
        <form onSubmit={SubmitData}>
          <label >Enter Your Name</label>
          <input type="text" ref={name} />
          <br />
          <button>Submit Your Name</button>
          <p>{rname ? `Your Name ${name.current.value}` : ''}</p>
        </form>
      </div>

    </>
  )
}

export default UseReff_Basic