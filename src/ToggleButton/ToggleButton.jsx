import React, { useState, useEffect } from "react";
import './ToggleButton.css';

const ToggleButton = () => {

  const [mode, setMode] = useState(false);

  useEffect(() => {
      document.body.className = document.querySelector('.toggle__input').checked ? "dark-mode" : "light-mode";

      return () => {
          // Some Cleanup Code....
      }
  },[mode]);

  function handleToggleChange(e){
    // console.log(e.target.checked);
    // document.body.style.backgroundColor =  e.target.checked ? "#000" : "#fff";
    // document.body.className = e.target.checked ? "dark-mode" : "light-mode";
    setMode(e.target.checked);
  }

  return (
  <>
    <h1>{mode ? "Dark":"Light"} Mode</h1>
    <label className="toggle" htmlFor="myToggle">
      <input className='toggle__input' type="checkbox" id="myToggle" onChange={handleToggleChange}/>
      <div className="toggle__fill"></div>
    </label>
  </>
  )
}

export default ToggleButton