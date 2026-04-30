// import { useState } from "react";

// const ThemeToggle = () => {
//   const [theme, setTheme] = useState("light");

//   return (
//     <div
//       style={{
//         background: theme === "light" ? "#fff" : "#333",
//         color: theme === "light" ? "#000" : "#fff",
//         height: "100vh",
//       }}
//     >
//       <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
//         Toggle Theme
//       </button>
//     </div>
//   );
// };

// export default ThemeToggle;

import { useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa";

const ThemeToggle = () => {
  const [theme, setTheme] = useState("light");
  const isLight = theme === "light";

  return (
    <div
      style={{
        background: isLight ? "#ffffff" : "#121212",
        color: isLight ? "#000" : "#fff",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <button
        onClick={() => setTheme(isLight ? "dark" : "light")}
        style={{
          padding: "12px 18px",
          borderRadius: "50%",
          border: "none",
          cursor: "pointer",
          fontSize: "20px",
          background: isLight ? "#000" : "#fff",
          color: isLight ? "#fff" : "#000",
        }}
      >
        {isLight ? <FaMoon /> : <FaSun />}
      </button>
    </div>
  );
};

export default ThemeToggle;
