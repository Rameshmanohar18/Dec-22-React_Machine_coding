import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
  useReducer,
  useLayoutEffect,
  memo,
  forwardRef,
} from "react";

/* =====================
   CUSTOM HOOK
===================== */
const useDebounce = (value, delay = 500) => {
  const [debounced, setDebounced] = useState(value);

  useEffect(() => {
    const timer = setTimeout(() => setDebounced(value), delay);
    return () => clearTimeout(timer);
  }, [value, delay]);

  return debounced;
};

/* =====================
   REDUCER
===================== */
const reducer = (state, action) => {
  switch (action.type) {
    case "INC":
      return { count: state.count + 1 };
    case "DEC":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

/* =====================
   MEMOIZED CHILD
===================== */
const UserItem = memo(({ user, onDelete }) => {
  console.log("Rendered:", user.name);
  return (
    <p>
      {user.name}
      <button onClick={() => onDelete(user.id)}>❌</button>
    </p>
  );
});

/* =====================
   FORWARD REF
===================== */
const FocusInput = forwardRef((_, ref) => {
  return <input ref={ref} placeholder="Focus me" />;
});

/* =====================
   MAIN COMPONENT
===================== */
const ReactMasterPlayground = () => {
  /* BASIC STATE */
  const [theme, setTheme] = useState("light");
  const [text, setText] = useState("");
  const debouncedText = useDebounce(text);

  /* REF */
  const inputRef = useRef(null);
  const renderCount = useRef(0);

  /* REDUCER */
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  /* USERS */
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  /* SIDE EFFECT */
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((r) => r.json())
      .then((d) => {
        setUsers(d);
        setLoading(false);
      });
  }, []);

  /* LAYOUT EFFECT */
  useLayoutEffect(() => {
    // Runs before paint
    console.log("DOM measured");
  }, []);

  /* DERIVED STATE */
  const filteredUsers = useMemo(() => {
    return users.filter((u) =>
      u.name.toLowerCase().includes(debouncedText.toLowerCase())
    );
  }, [users, debouncedText]);
  console.log("debounce", debouncedText);

  /* CALLBACK */
  const deleteUser = useCallback((id) => {
    setUsers((prev) => prev.filter((u) => u.id !== id));
  }, []);

  /* RENDER COUNT */
  renderCount.current += 1;

  return (
    <div className={theme} style={{ padding: 20 }}>
      <h1>⚛️ React Master Playground</h1>

      <p>Render Count: {renderCount.current}</p>

      {/* THEME */}
      <button
        onClick={() => setTheme((t) => (t === "light" ? "dark" : "light"))}
      >
        Toggle Theme
      </button>

      <hr />

      {/* REDUCER COUNTER */}
      <h2>useReducer Counter: {state.count}</h2>
      <button onClick={() => dispatch({ type: "INC" })}>+</button>
      <button onClick={() => dispatch({ type: "DEC" })}>-</button>

      <hr />

      {/* DEBOUNCED SEARCH */}
      <input
        placeholder="Search users (debounced)"
        onChange={(e) => setText(e.target.value)}
        aria-label="Search users"
      />

      {loading && <p>Loading...</p>}

      {!loading &&
        filteredUsers.map((u) => (
          <UserItem key={u.id} user={u} onDelete={deleteUser} />
        ))}

      {filteredUsers.length === 0 && !loading && <p>No users found</p>}

      <hr />

      {/* REF + FORWARD REF */}
      <FocusInput ref={inputRef} />
      <button onClick={() => inputRef.current.focus()}>Focus Input</button>

      <hr />

      {/* CONTROLLED vs UNCONTROLLED */}
      <input defaultValue="Uncontrolled input" />
      <input
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Controlled input"
      />

      <p>Characters typed: {text.length}</p>

      <hr />

      {/* ENV LOGIC */}
      <p>
        Environment:{" "}
        {process.env.NODE_ENV === "production" ? "Production" : "Development"}
      </p>
    </div>
  );
};

export default ReactMasterPlayground;
