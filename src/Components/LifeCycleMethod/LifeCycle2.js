import React, { Component } from 'react'
// component is rendiring twice because of th React strict Mode in index.js


export class LifeCycle2 extends Component {
constructor(props) {
  super(props)

  this.state = {
     name:"Sumit Singh"
     
  }
  console.log('LifeCycle2: Constructor')

}
static getDerivedStateFromProps(props,state){
    console.log('LifeCycle2:getderivedstatefromprops')
    return null;
}
componentDidMount() {
    console.log('LifeCycle2:ComponenDidMount')
}
  render() {
    console.log('LifeCycle2:Render')

    return (
      <div><h1>LifeCycle2</h1></div>
    )
  }
}

export default LifeCycle2