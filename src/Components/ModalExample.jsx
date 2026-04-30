import React from "react";
import { useRef } from "react";
import { useState, useLayoutEffect } from "react";

export default function App() {
  const [show, setShow] = useState(false);
  const popup = useRef();
  const button = useRef();

  useLayoutEffect(() => {
    if (popup.current == null || button.current == null) return;
    const { bottom } = button.current.getBoundingClientRect();
    popup.current.style.top = `${bottom + 25} px`;
  }, [show]);

  return (
    <>
      <button ref={button} onClick={() => setShow((prev) => !prev)}>
        Click here
      </button>
      {show && (
        <div style={{ position: "absolute" }} ref={popup} className="popup">
          This is a popup modal!
        </div>
      )}
    </>
  );
}
