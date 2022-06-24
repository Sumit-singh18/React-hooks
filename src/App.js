import './App.css';
import React from 'react'
import About from './Components/ReactContext/About';
import DataState from './Components/ReactContext/DataState';


function App() {
  return (
    <div>
      <DataState>
      <About/>
      </DataState>
      
    </div>
  );
}

export default App;
