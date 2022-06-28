import React, { Component } from "react";

export class ChildProps extends Component {
  state = {
    person: [
      { name: "sumit", age: 23 },
      { name: "Raghav", age: 22 },
      { name: "sunny", age: 21 },
    ],
  };

   ChnageNameHandler =()=>{
    console.log(this.state.person[1].name)

  }
  render() {
    return (
      <div>
        <button type="button" className="btn btn-danger"  onClick={this.ChnageNameHandler}>Click</button>
        <p> my Name is {this.state.person[0].name}  and age is {this.state.person[0].age}</p>
        <p> my name={this.state.person[1].name} age={this.state.person[1].age}  </p>
        <p> name={this.state.person[2].name} age={this.state.person[2].age}  </p>
      </div>
    );
  }
}

export default ChildProps;
