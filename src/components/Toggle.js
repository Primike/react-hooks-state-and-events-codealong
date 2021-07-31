import React, {useState} from "react";

function Toggle() {
  const [parameter, change] = useState(false)

  function handleClick() {
    change((parameter) => !parameter);
  }
 
  const style = parameter ? "red" : "white"
  
  return <button style={{background: style}} onClick={handleClick}>{parameter ? "ON": "OFF"}</button>;
}

export default Toggle;
