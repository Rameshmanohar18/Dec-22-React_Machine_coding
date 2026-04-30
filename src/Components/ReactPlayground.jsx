import { useState, useEffect, useMemo, useCallback } from "react";

const ReactPlayground = () => {
  /* =====================
     STATE MANAGEMENT
  ====================== */
  const [theme, setTheme] = useState("light");
  const [count, setCount] = useState(0);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [showPassword, setShowPassword] = useState(false);

  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  /* =====================
     SIDE EFFECTS
  ====================== */
  useEffect(() => {
    const controller = new AbortController();

    fetch("https://jsonplaceholder.typicode.com/users", {
      signal: controller.signal,
    })
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch users");
        setLoading(false);
      });

    // cleanup
    return () => controller.abort();
  }, []);

  /* =====================
     DERIVED + OPTIMIZED STATE
  ====================== */
  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(search.toLowerCase())
    );
  }, [users, search]);

  const isFormValid = useMemo(() => {
    return form.name && form.email && form.password;
  }, [form]);

  /* =====================
     CALLBACKS
  ====================== */
  const increment = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  const deleteUser = useCallback((id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }, []);

  /* =====================
     HANDLERS
  ====================== */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  /* =====================
     UI
  ====================== */
  return (
    <div className={theme} style={{ padding: 20 }}>
      <h1>React All-in-One Playground</h1>

      {/* THEME TOGGLE */}
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Switch Theme
      </button>

      {/* COUNTER */}
      <h2>Counter: {count}</h2>
      <button onClick={increment}>+</button>

      <hr />

      {/* CONTROLLED FORM */}
      <h2>Register</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
      />

      <input
        name="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type={showPassword ? "text" : "password"}
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
      />

      <button onClick={() => setShowPassword((s) => !s)}>
        {showPassword ? "Hide" : "Show"} Password
      </button>

      <p>Password length: {form.password.length}</p>

      <button disabled={!isFormValid}>Submit</button>

      <hr />

      {/* SEARCH */}
      <input
        placeholder="Search users"
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* API STATES */}
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: "red" }}>{error}</p>}

      {/* LIST RENDERING */}
      {!loading &&
        filteredUsers.map((u) => (
          <p key={u.id}>
            {u.name}
            <button onClick={() => deleteUser(u.id)}>❌</button>
          </p>
        ))}

      {/* EMPTY STATE */}
      {!loading && filteredUsers.length === 0 && <p>No users found</p>}
    </div>
  );
};

export default ReactPlayground;
