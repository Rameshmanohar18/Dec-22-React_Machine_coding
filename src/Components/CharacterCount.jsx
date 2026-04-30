// import { useState } from "react";

// const CharacterCount = () => {
//   const [text, setText] = useState("");

//   return (
//     <div>
//       <h2>Character Count</h2>
//       <textarea onChange={(e) => setText(e.target.value)} />
//       <p>Characters: {text.length}</p>
//     </div>
//   );
// };

// export default CharacterCount;
import { useState } from "react";

const CharacterCount = () => {
  const [text, setText] = useState("");
  const maxChars = 200;

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#f3f4f6",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          background: "#ffffff",
          padding: "24px",
          borderRadius: "10px",
          width: "360px",
          boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
        }}
      >
        <h2 style={{ marginBottom: "12px", textAlign: "center" }}>
          📝 Character Counter
        </h2>

        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          maxLength={maxChars}
          placeholder="Start typing here..."
          style={{
            width: "100%",
            minHeight: "120px",
            padding: "10px",
            borderRadius: "6px",
            border: "1px solid #d1d5db",
            resize: "none",
            outline: "none",
            fontSize: "14px",
          }}
        />

        <div
          style={{
            marginTop: "8px",
            textAlign: "right",
            fontSize: "13px",
            color: text.length === maxChars ? "#dc2626" : "#6b7280",
          }}
        >
          {text.length} / {maxChars} characters
        </div>
      </div>
    </div>
  );
};

export default CharacterCount;
