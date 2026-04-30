import React, { useState } from "react";

const useCounter = (initialvalue = 0) => {
  const [counter, setCounter] = useState(initialvalue);

  const increment = () => setCounter((prev) => prev + 1);
  const decrement = () => setCounter((prev) => prev - 1);
  const reset = () => setCounter(initialvalue);
  const setValue = () => setCounter(value);

  return counter, increment, decrement, reset, setValue;
};

export default useCounter;
