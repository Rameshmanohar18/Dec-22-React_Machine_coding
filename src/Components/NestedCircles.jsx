import React from "react";
import { useState } from "react";

const NestedCircles = () => {
  const [level, setLevel] = useState(3);
  const [size, setSize] = useState(300);
  const [pattern, setPattern] = useState("solid");
  const [animation, setAnimation] = useState(false);
  //   import React, { useState } from "react";

  // Circle component with recursion
  function Circle({ level, maxLevel, size }) {
    const currentSize = size - level * 30;

    if (currentSize <= 0 || level > maxLevel) {
      return null;
    }

    const colors = ["#FF6B6B", "#4ECDC4", "#FFD166", "#06D6A0", "#118AB2"];
    const color = colors[level % colors.length];

    return (
      <div
        style={{
          width: `${currentSize}px`,
          height: `${currentSize}px`,
          borderRadius: "50%",
          backgroundColor: color,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: "2px solid white",
          boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
          transition: "all 0.3s ease",
        }}
      >
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: Math.max(12, currentSize / 8),
          }}
        >
          {level}
        </span>

        {/* Recursive call for next level */}
        {level < maxLevel && (
          <Circle level={level + 1} maxLevel={maxLevel} size={size} />
        )}
      </div>
    );
  }

  // Circle with different pattern
  function PatternCircle({ level, maxLevel, pattern }) {
    const baseSize = 200;
    const currentSize = baseSize - level * (baseSize / (maxLevel + 1));

    if (level > maxLevel || currentSize <= 20) {
      return null;
    }

    const patterns = {
      solid: `rgba(52, 152, 219, ${0.2 + level * 0.1})`,
      gradient: `radial-gradient(circle, 
      rgba(41, 128, 185, ${0.8 - level * 0.1}), 
      rgba(52, 152, 219, ${0.6 - level * 0.1})
    )`,
      striped: level % 2 === 0 ? "#3498db" : "#2980b9",
      rainbow: ["#FF6B6B", "#FFD166", "#06D6A0", "#118AB2", "#9B59B6"][
        level % 5
      ],
    };

    const backgroundColor = patterns[pattern] || patterns.solid;

    return (
      <div
        style={{
          width: `${currentSize}px`,
          height: `${currentSize}px`,
          borderRadius: "50%",
          background: backgroundColor,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          border: pattern === "striped" ? "2px dashed white" : "none",
          boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
          transition: "all 0.5s ease",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <span
          style={{
            color: "white",
            fontWeight: "bold",
            fontSize: Math.max(14, currentSize / 10),
            textShadow: "1px 1px 2px rgba(0,0,0,0.3)",
            zIndex: 1,
          }}
        >
          {level + 1}
        </span>

        {/* Inner decorative element */}
        {pattern === "gradient" && (
          <div
            style={{
              position: "absolute",
              width: "70%",
              height: "70%",
              borderRadius: "50%",
              background: "rgba(255,255,255,0.1)",
              filter: "blur(5px)",
            }}
          />
        )}

        {/* Recursive call */}
        {level < maxLevel - 1 && (
          <PatternCircle
            level={level + 1}
            maxLevel={maxLevel}
            pattern={pattern}
          />
        )}
      </div>
    );
  }

  // Interactive circle with controls
  //   function InteractiveCircle() {
  //     return (

  //     );
  //   }

  return (
    <div style={{ padding: "20px" }}>
      <h1>Interactive Nested Circles</h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "30px",
          margin: "30px 0",
        }}
      >
        {/* Controls */}
        <div>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Number of Circles: {level}
            </label>
            <input
              type="range"
              min="1"
              max="10"
              value={level}
              onChange={(e) => setLevel(parseInt(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Base Size: {size}px
            </label>
            <input
              type="range"
              min="100"
              max="500"
              value={size}
              onChange={(e) => setSize(parseInt(e.target.value))}
              style={{ width: "100%" }}
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>
              Pattern:
            </label>
            <select
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="solid">Solid</option>
              <option value="gradient">Gradient</option>
              <option value="striped">Striped</option>
              <option value="rainbow">Rainbow</option>
            </select>
          </div>

          <button
            onClick={() => setAnimation(!animation)}
            style={{
              padding: "10px 20px",
              backgroundColor: animation ? "#FF6B6B" : "#4ECDC4",
              color: "white",
              border: "none",
              borderRadius: "4px",
              cursor: "pointer",
              width: "100%",
              fontSize: "16px",
            }}
          >
            {animation ? "Stop Animation" : "Start Animation"}
          </button>
        </div>

        {/* Circle Display */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            minHeight: "400px",
          }}
        >
          <div
            style={{
              animation: animation ? "pulse 2s infinite" : "none",
            }}
          >
            <Circle level={1} maxLevel={level} size={size} />
          </div>
        </div>
      </div>

      {/* Pattern Circle Display */}
      <div
        style={{
          textAlign: "center",
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#57b506ff",
          borderRadius: "8px",
        }}
      >
        <h3>Alternative Pattern: {pattern}</h3>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginTop: "20px",
          }}
        >
          <PatternCircle level={0} maxLevel={level} pattern={pattern} />
        </div>
      </div>

      {/* Explanation */}
      <div
        style={{
          marginTop: "40px",
          padding: "20px",
          backgroundColor: "#1b8722ff",
          borderRadius: "8px",
        }}
      >
        <h3>How This Works:</h3>
        <ul>
          <li>
            <strong>Recursion:</strong> Each circle renders itself and calls the
            next level
          </li>
          <li>
            <strong>Props Drilling:</strong> Level, maxLevel, and size passed
            down recursively
          </li>
          <li>
            <strong>Base Case:</strong> Stops when level exceeds maxLevel or
            size becomes too small
          </li>
          <li>
            <strong>Dynamic Styling:</strong> Size, color, and style calculated
            based on level
          </li>
        </ul>
      </div>

      {/* CSS Animation */}
      <style>{`
        @keyframes pulse {
          0% { transform: scale(1); }
          50% { transform: scale(1.05); }
          100% { transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default NestedCircles;
