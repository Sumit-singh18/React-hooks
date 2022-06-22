import React, { useState } from "react";

const Statewrray = () => {
  const [numb, setNumb] = useState([]);
  const Add = () => {
    setNumb([
      ...numb,
      {
        value: Math.floor(Math.random() * 20),
      },
    ]);
  };

  return (
    <div style={{textAlign:'center' }}>
     <h1>Use State With Array</h1> 
      <button onClick={Add}>Add Random Number</button>
      <ul>
        {numb.map(item =>(<li key={item.value}>{item.value}</li>))}
      </ul>
    </div>
  );
};

export default Statewrray;
