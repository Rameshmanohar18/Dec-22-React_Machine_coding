import { React, useReducer } from "react";

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    case "SET_VALUE":
      return { count: action.payload };
    default:
      return state;
  }
}

const DisplayCounterUseReducer = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Counter: {state.count}</h1>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <br />
      <input
        type="number"
        value={state.count}
        onChange={(e) =>
          dispatch({
            type: "SET_VALUE",
            payload: Number(e.target.value) || 0,
          })
        }
      />
    </div>
  );
};
export default DisplayCounterUseReducer;
