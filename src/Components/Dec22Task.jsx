import React, { useState } from "react";

const Dec22Task = () => {
  const [message, setMessage] = useState("Hello everyone");
  const [color, setColor] = useState("red");

  const handleClick = () => {
    setMessage("Welcome to the SLA Institute for Learning React js Course");
    setColor("yellow");
  };

  return (
    // <div>Dec22Task</div>
    <div>
      <h2 style={{ color: color }}> {message} </h2>
      {/* <button onClick={handleClick}}> Click {message}</button> */}
      <button onClick={handleClick}> Click</button>
    </div>
  );
};

export default Dec22Task;
