import React, { Component } from 'react'

export class Statefull extends Component {
constructor(props) {
  super(props)

  this.state = {
     firstName: 'Sumit',
  }
}

  render() {
    return (
      <div>
      <h1>My Name is {this.state.firstName}</h1>

      </div>
    )
  }
}
// Statefull component are those which is holidng some  Local state like FirstName

export default Statefull