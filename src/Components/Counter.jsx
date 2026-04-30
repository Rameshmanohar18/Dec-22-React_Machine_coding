import { useState, useEffect } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  // runs AFTER render
  useEffect(() => {
    console.log("🔥 useEffect ran. Count is:", count);

    document.title = `Count: ${count}`;

    return () => {
      console.log("🧹 Cleanup before next effect or unmount");
    };
  }, [count]); // dependency array

  return (
    <div style={{ padding: "20px" }}>
      <h2>Counter: {count}</h2>

      <button onClick={() => setCount(count + 1)}>➕ Increment</button>
      <button onClick={() => setCount(count - 1)}>➖ Decrement</button>
    </div>
  );
}

export default Counter;
