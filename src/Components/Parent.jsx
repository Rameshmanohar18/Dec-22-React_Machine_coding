import React from "react";
import { useState } from "react";
import Child from "./Child";

const Parent = () => {
  const [showChild, setShowChild] = useState(false);

  return (
    <div>
      <h2>Parent Component</h2>
      <button onClick={() => setShowChild(!showChild)}>
        {showChild ? "HideChild" : "ShowChild"}
        {showChild && <Child />}
      </button>
    </div>
  );
};
export default Parent;
