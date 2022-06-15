import React, { Component } from "react";
import LifeCycle2 from "./LifeCycle2";
// component is rendiring twice because of th React strict Mode in index.js

export class LifeCycle1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "Sumit Singh",
    };
    console.log("LifeCycle1: Constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("LifeCycle1:getderivedstatefromprops");
    return null;
  }

//   when You Insert Component in Your DOM then its called Mounting.
  componentDidMount() {
    console.log("LifeCycle1:ComponenDidMount");
  }
  render() {
    console.log("LifeCycle1:Render");

    return (
      <div>
        <h1>
          LifeCycle1
          <LifeCycle2 />
        </h1>
      </div>
    );
  }
}

export default LifeCycle1;
