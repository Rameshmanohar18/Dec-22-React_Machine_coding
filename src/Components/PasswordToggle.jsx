import { useState } from "react";

const PasswordToggle = () => {
  const [show, setShow] = useState(false);
  const [password, setPassword] = useState("");

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
          background: "#fff",
          padding: "30px",
          borderRadius: "10px",
          width: "320px",
          boxShadow: "0 10px 25px rgba(174, 177, 162, 0.1)",
        }}
      >
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>Login</h2>

        <label style={{ fontSize: "14px", color: "#374151" }}>Password</label>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            marginTop: "6px",
            border: "1px solid #d1d5db",
            borderRadius: "6px",
            padding: "8px",
          }}
        >
          <input
            type={show ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            style={{
              // border: "none",
              marginTop: "6px",
              border: "1px solid #d1d5db",
              borderRadius: "6px",
              padding: "8px",

              outline: "none",
              flex: 1,
              fontSize: "14px",
            }}
          />

          <button
            onClick={() => setShow(!show)}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              fontSize: "14px",
              color: "#2563eb",
            }}
          >
            {show ? "🙈" : "👁️"}
          </button>
        </div>

        <button
          style={{
            marginTop: "20px",
            width: "100%",
            padding: "10px",
            background: "#2563eb",
            color: "#fff",
            border: "none",
            borderRadius: "6px",
            cursor: "pointer",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default PasswordToggle;
