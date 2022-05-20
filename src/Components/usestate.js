import React, { useState } from "react";

const Usestate = () => {
  const [myName, setmyName] = useState("Sumit Kumar");

  const ChangeName = () => {
    let value = myName;
    value === "Sumit Kumar"
      ? setmyName("Sumit Singh")
      : setmyName("Sumit Kumar");
  };

  return (
    <div>
      <h1>{myName}</h1>
      <button onClick={ChangeName}> Click to change Name</button>
    </div>
  );
};
export default Usestate;
