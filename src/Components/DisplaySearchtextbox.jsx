import React, { useState } from "react";

const DisplaySearchtextbox = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const items = [
    "Apple",
    "Banana",
    "Orange",
    "Mango",
    "Pineapple",
    "Grapes",
    "Strawberry",
  ];

  const filteredItems = items.filter((item) =>
    item.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    fontFamily: "system-ui, sans-serif",
  };

  const inputStyle = {
    width: "300px",
    height: "45px",
    padding: "0 14px",
    fontSize: "16px",
    borderRadius: "10px",
    border: "1px solid #d1d5db",
    outline: "none",
    boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
    marginBottom: "16px",
  };

  const resultsContainerStyle = {
    width: "300px",
    background: "#ffffff",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
    padding: "10px 0",
    listStyle: "none",
  };

  const itemStyle = {
    padding: "10px 16px",
    cursor: "pointer",
    transition: "background 0.2s ease",
  };

  const emptyStyle = {
    padding: "10px 16px",
    color: "#6b7280",
    fontStyle: "italic",
  };

  return (
    <div style={containerStyle}>
      <input
        type="text"
        placeholder="Search fruits..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={inputStyle}
      />

      <ul style={resultsContainerStyle}>
        {filteredItems.length > 0 ? (
          filteredItems.map((item, idx) => (
            <li
              key={idx}
              style={itemStyle}
              onMouseOver={(e) =>
                (e.currentTarget.style.background = "#f3f4f6")
              }
              onMouseOut={(e) =>
                (e.currentTarget.style.background = "transparent")
              }
            >
              {item}
            </li>
          ))
        ) : (
          <li style={emptyStyle}>No results found</li>
        )}
      </ul>
    </div>
  );
};

export default DisplaySearchtextbox;