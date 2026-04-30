import React, { useReducer } from "react";

const initialState = { count: 0 };

function counterReducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    case "SET_VALUE":
      return { count: action.payload };
    default:
      return state;
  }
}

const DisplayIncDecWithUseReducer = () => {
  // function Counter() {
  const [state, dispatch] = useReducer(counterReducer, initialState);

  return (
    <div> 
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>Increment</button>
      <button onClick={() => dispatch({ type: "decrement" })}>Decrement</button>
      <button onAbort={() => dispatch({ type: "reset" })}>Reset</button>
      {/* <input
        type="number"
        value={state.count}
        onChange={(e) =>
          dispatch({
            type: "SET_VALUE",
            payload: Number(e.target.value) || 0,
          })
        }
      /> */}
    </div>
  );
  // }
};

export default DisplayIncDecWithUseReducer;
