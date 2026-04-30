import React, { useState } from "react";

const DisplayUserInput = () => {
  const [inputValue, setInputValue] = useState("");

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "18px",
    padding: "40px",
    fontFamily: "system-ui, sans-serif",
  };

  const inputStyle = {
    width: "280px",
    height: "45px",
    padding: "0 14px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1px solid #148d56",
    outline: "none",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  };

  const readOnlyStyle = {
    ...inputStyle,
    backgroundColor: "#318507",
    border: "1px solid #2c0c35",
  };

  const textStyle = {
    fontSize: "18px",
    fontWeight: "600",
    color: "#374151",
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Type something..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        style={inputStyle}
      />

      <input
        type="text"
        placeholder="Mirrored here..."
        value={inputValue}
        readOnly
        style={readOnlyStyle}
      />

      <p style={textStyle}>You typed: {inputValue}</p>
    </div>
  );
};

export default DisplayUserInput;