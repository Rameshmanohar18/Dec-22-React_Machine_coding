// import React, { useState } from "react";

// const DisplayDropDown = () => {
//   const [selectedValue, setSelectedValue] = useState("");
//   const options = [
//     "Apple",
//     "Mango",
//     "Orange",
//     "Pomegranate",
//     "Beetroot",
//     "Pineapple",
//   ];

//   return (
//     <div>
//       <select
//         value={selectedValue}
//         onChange={(e) => setSelectedValue(e.target.value)}
//       >
//         <option value="">Select an option</option>
//         {options.map((opt, idx) => (
//           <option key={idx} value={opt}>
//             {opt}
//           </option>
//         ))}
//       </select>

//       <input
//         type="text"
//         value={selectedValue}
//         readOnly
//         placeholder="Selected value"
//       />
//     </div>
//   );
// };

// export default DisplayDropDown;


import React, { useState } from "react";

const DisplayDropDown = () => {
  const [selectedValue, setSelectedValue] = useState("");

  const options = [
    "Apple",
    "Mango",
    "Orange",
    "Pomegranate",
    "Beetroot",
    "Pineapple",
  ];

  const containerStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    padding: "40px",
  };

  const selectStyle = {
    width: "260px",
    height: "45px",
    padding: "0 12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    cursor: "pointer",
    boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
    transition: "all 0.3s ease",
  };

  const inputStyle = {
    width: "260px",
    height: "45px",
    padding: "0 12px",
    fontSize: "16px",
    borderRadius: "8px",
    border: "1px solid #ddd",
    backgroundColor: "#f9fafb",
    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
  };

  return (
    <div style={containerStyle}>
      <select
        style={selectStyle}
        value={selectedValue}
        onChange={(e) => setSelectedValue(e.target.value)}
      >
        <option value="">Select an option</option>
        {options.map((opt, idx) => (
          <option key={idx} value={opt}>
            {opt}
          </option>
        ))}
      </select>

      <input
        type="text"
        value={selectedValue}
        readOnly
        placeholder="Selected value"
        style={inputStyle}
      />
    </div>
  );
};

export default DisplayDropDown;