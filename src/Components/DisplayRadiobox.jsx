import React, { useState } from "react";
import "../../src/App.css";
const DisplayRadiobox = () => {
  const [selectedOption, setSelectedOption] = useState();
  return (
    <div>
      <div className="radio-container">
        <h3>Select an option:</h3>
        <label className="radio-option">
          <input
            type="radio"
            value="Option 1"
            checked={selectedOption === "Option 1"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 1
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="Option 2"
            checked={selectedOption === "Option 2"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 2
        </label>
        <label className="radio-option">
          <input
            type="radio"
            value="Option 3"
            checked={selectedOption === "Option 3"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 3
        </label>    
        <label className="radio-option">
          <input
           type="radio"
           value="Option 4"
           checked={selectedOption === "Option 4"}
           onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 4
        </label>
        {/* <label className="radio-option">
          <input
            type="radio"
            value="Option 4"
            checked={selectedOption === "Option 4"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 4
        </label>{" "}
        <label className="radio-option">
          <input
            type="radio"
            value="Option 5"
            checked={selectedOption === "Option 5"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 5
        </label>{" "}
        <label className="radio-option">
          <input
            type="radio"
            value="Option 6"
            checked={selectedOption === "Option 6"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 6
        </label>{" "}
        <label className="radio-option">
          <input
            type="radio"
            value="Option 7"
            checked={selectedOption === "Option 7"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 7
        </label>{" "}
        <label className="radio-option">
          <input
            type="radio"
            value="Option 8"
            checked={selectedOption === "Option 8"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 8
        </label>{" "}
        <label className="radio-option">
          <input
            type="radio"
            value="Option 9"
            checked={selectedOption === "Option 9"}
            onChange={(e) => setSelectedOption(e.target.value)}
          />
          Option 9
        </label> */}
        <br />
        <br />
        <div className="radio-output">
          <label>
            Selected option:
            <input type="text" value={selectedOption} readOnly />
          </label>
        </div>
      </div>
    </div>
  );
};

export default DisplayRadiobox;
