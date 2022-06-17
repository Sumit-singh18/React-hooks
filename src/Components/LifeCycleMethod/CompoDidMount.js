import React, { Component } from 'react'
import axios from 'react'

export class CompoDidMount extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       post:[]
    }
  }
  componentDidMount(prevProps,prevState){
    let api = 'https://jsonplaceholder.typicode.com/posts'
    axios.get(api)
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log(error);
    })
  }

  render() {
    return (
      <div>
        Component did mount 
      </div>
    )
  }
}

export default CompoDidMount