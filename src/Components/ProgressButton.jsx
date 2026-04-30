import React, { useState, useRef } from "react";
import "../holdconfirm.css";

const HOLD_DURATION = 3500; // 3.5 seconds

export default function HoldToConfirm() {
  const [progress, setProgress] = useState(0);
  const [completed, setCompleted] = useState(false);

  const intervalRef = useRef(null);
  const startTimeRef = useRef(null);

  const startHolding = () => {
    if (completed) return;

    startTimeRef.current = Date.now();

    intervalRef.current = setInterval(() => {
      const elapsed = Date.now() - startTimeRef.current;
      const percent = Math.min((elapsed / HOLD_DURATION) * 100, 100);

      setProgress(percent);

      if (percent >= 100) {
        clearInterval(intervalRef.current);
        setCompleted(true);
      }
    }, 30);
  };

  const stopHolding = () => {
    if (completed) return;

    clearInterval(intervalRef.current);
    setProgress(0);
  };

  return (
    <div className="container">
      <button
        className={`hold-btn ${completed ? "done" : ""}`}
        onMouseDown={startHolding}
        onMouseUp={stopHolding}
        onMouseLeave={stopHolding}
        onTouchStart={startHolding}
        onTouchEnd={stopHolding}
      >
        {completed ? "✔" : "Hold to Confirm"}

        <div className="progress-bar">
          <div className="progress-fill" style={{ width: `${progress}%` }} />
        </div>
      </button>
    </div>
  );
}
