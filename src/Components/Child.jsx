import React from "react";
import { useEffect } from "react";

const Child = () => {
  useEffect(() => {
    console.log("Child Component Mounted");
    alert("Child Component is showing now!");
    return () => {
      console.log("Child Component Unmounted");
    };
  }, []);

  return (
    <div>
      <h3>Child Component</h3>
    </div>
  );
};

export default Child;
