import React, { useState } from "react";

const CounterWithLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [count, setCount] = useState(0);
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "admin" && password === "1234") {
      setIsLoggedIn(true);
      setError("");
    } else {
      setError("Invalid credentials 👀");
    }
  };

  return (
    <div style={styles.container}>
      {!isLoggedIn ? (
        <form onSubmit={handleLogin} style={styles.card}>
          <h2>Login</h2>

          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            style={styles.input}
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={styles.input}
          />

          {error && <p style={styles.error}>{error}</p>}

          <button style={styles.button}>Login</button>
        </form>
      ) : (
        <div style={styles.card}>
          <h2>Count: {count}</h2>

          <button onClick={() => setCount(count + 1)} style={styles.button}>
            Increment
          </button>

          <button onClick={() => setCount(count - 1)} style={styles.button}>
            Decrement
          </button>

          <button
            onClick={() => {
              setIsLoggedIn(false);
              setCount(0);
            }}
            style={{ ...styles.button, background: "#ef4444" }}
          >
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

const styles = {
  container: {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#05986cff",
    fontFamily: "system-ui",
  },
  card: {
    background: "#fff",
    padding: "30px",
    borderRadius: "12px",
    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
    width: "300px",
    textAlign: "center",
  },
  input: {
    width: "100%",
    padding: "10px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #90c612ff",
  },
  button: {
    width: "100%",
    padding: "10px",
    marginTop: "10px",
    border: "none",
    borderRadius: "8px",
    background: "#6366f1",
    color: "#fff",
    cursor: "pointer",
    fontWeight: "600",
  },
  error: {
    color: "#ef4444",
    fontSize: "0.9rem",
  },
};

export default CounterWithLogin;
