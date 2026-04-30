import React, { useState, useEffect } from "react";

const Debounce = () => {
  const [inputValue, setInputValue] = useState("");
  const [debouncedValue, setDebouncedValue] = useState("");
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(inputValue);
      console.log("API CALL →", debouncedValue);
    }, 1000);
    return () => {
      clearTimeout(handler);
    };
  }, [inputValue]);

  console.log("🚀 ~ Debounce ~ inputValue:", inputValue);
  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Type something..."
      />
      <p>Debounced Value: {debouncedValue}</p>
      <p>Input Value: {inputValue}</p>
    </div>
  );
};

export default Debounce;
