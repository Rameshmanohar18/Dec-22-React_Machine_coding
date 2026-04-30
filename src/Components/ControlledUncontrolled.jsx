import React, { useState } from "react";

const ControlledUncontrolled = () => {
  const [name, setName] = useState("");

  return (
    <div>
      <h2> Controlled component</h2>

      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Type here...."
      ></input>
      <p>Your name is: {name}</p>

      <h2> Uncontrolled component</h2>
    </div>
  );
};

export default ControlledUncontrolled;
