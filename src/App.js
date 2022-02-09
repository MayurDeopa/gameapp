import { useState } from 'react';
import './App.css';
import Login from './Components/Login/Login';
import SideBar from './Components/SideBar/SideBar';

function App() {

  const [toggle,setToggle]= useState(false)
  return (
    <div className="App">
      <SideBar value={toggle}/>
      <Login/>
    </div>
  );
}

export default App;
