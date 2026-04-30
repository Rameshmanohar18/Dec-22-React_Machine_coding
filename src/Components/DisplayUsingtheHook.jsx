import { useState } from "react";
// import "./useCounter";
// import DisplayCustomHook from "./useCounter";
import { useCounter } from "./useCounter";

const DisplayUsingtheHook = () => {
  const { counter, increment, decrement, reset } = useCounter(0);

  return (
    <div>
      <h2>Counter:{counter} </h2>
      <button onClick={decrement}> - </button>
      <button onClick={increment}> + </button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default DisplayUsingtheHook;
