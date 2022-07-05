import React from 'react'

const Stateless = (props) => {
  return (
    <div>
   <h1>My Name is {props.name}</h1>

    </div>
  )
}

// Stateless components are simple functional component
//  without having a local state but remember there is a hook in react to add state behavior in
//  functional component as well.

export default Stateless