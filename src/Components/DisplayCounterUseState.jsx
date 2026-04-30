import React, { useState } from "react";

const DisplayCounterUseState = () => {
  const [count, setCount] = useState(0);

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "50px",
    fontFamily: "system-ui, sans-serif",
  };

  const counterStyle = {
    fontSize: "2.8rem",
    fontWeight: "700",
    padding: "5px 20px",
    borderRadius: "16px",
    background: "linear-gradient(135deg, #6366f1, #8b5cf6)",
    color: "#ffffff",
    boxShadow: "0 15px 40px /rgba(99, 102, 241, 0.35)",
    minWidth: "220px",
    textAlign: "center",
  };

  const buttonContainerStyle = {
    display: "flex",
    gap: "12px",
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const buttonStyle = {
    padding: "10px 18px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    fontWeight: "600",
    background: "#4f46e5",
    color: "#fff",
    boxShadow: "0 6px 18px rgba(0,0,0,0.12)",
    transition: "all 0.2s ease",
  };

  const disabledButtonStyle = {
    ...buttonStyle,
    background: "#cbd5e1",
    cursor: "not-allowed",
    boxShadow: "none",
  };
  
  return (
    <div style={containerStyle}>
      <h6 style={counterStyle}>Count is: {count}</h6>

      <div style={buttonContainerStyle}>
        <button
          style={buttonStyle}
          onClick={() => setCount(count + 1)}
        >
          Increment
        </button>

        <button
          style={count === 0 ? disabledButtonStyle : buttonStyle}
          onClick={() => setCount(count - 1)}
          disabled={count === 0}
        >
          Decrement
        </button>

        <button
          style={buttonStyle}
          onClick={() => setCount(count + 2)}
        >
          Increment by 2
        </button>

        <button
          style={{ ...buttonStyle, background: "#ef4444" }}
          onClick={() => setCount(0)}
        >
          Reset
        </button>
      </div>
    </div>
  );
};

export default DisplayCounterUseState;