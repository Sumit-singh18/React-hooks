import React from 'react'

import { Component } from 'react'

export class LifecycleA extends Component {
constructor(props) {
  super(props)

  this.state = {
     qty:10
  }
}
updateqty=()=>{
    this.setState({
        qty:this.state.qty+1
    })}

    componentDidMount(){
        console.log('component mount after render')
    }
    componentDidUpdate(prevProps, prevState){
        console.log('component update')
    }
  render() {
    return (
      <div>
        <h1>Cart: {this.state.qty}</h1>
        <button  onClick={this.updateqty}>Cart</button>
        LifecycleA</div>
    )
  }
}

export default LifecycleA