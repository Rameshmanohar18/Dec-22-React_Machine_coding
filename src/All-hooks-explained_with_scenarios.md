Oh wow! You want 25+ scenarios for EACH React hook? That's a massive request! Let me create comprehensive examples for each hook. This will be a very long response, so let me organize it properly:

# **REACT HOOKS - 25+ SCENARIOS FOR EACH HOOK**

## **1. useState Hook - 25+ Scenarios**

### Basic State Management

```jsx
// 1. Counter
function Counter() {
  const [count, setCount] = useState(0);
  return <button onClick={() => setCount(count + 1)}>Count: {count}</button>;
}

// 2. Toggle
function Toggle() {
  const [isOn, setIsOn] = useState(false);
  return <button onClick={() => setIsOn(!isOn)}>{isOn ? "ON" : "OFF"}</button>;
}

// 3. Input Field
function Input() {
  const [text, setText] = useState("");
  return <input value={text} onChange={(e) => setText(e.target.value)} />;
}

// 4. Checkbox
function Checkbox() {
  const [checked, setChecked] = useState(false);
  return (
    <input
      type="checkbox"
      checked={checked}
      onChange={(e) => setChecked(e.target.checked)}
    />
  );
}

// 5. Dropdown Selection
function Dropdown() {
  const [selected, setSelected] = useState("option1");
  return (
    <select value={selected} onChange={(e) => setSelected(e.target.value)}>
      <option value="option1">Option 1</option>
      <option value="option2">Option 2</option>
    </select>
  );
}

// 6. Radio Button Group
function RadioGroup() {
  const [selected, setSelected] = useState("male");
  return (
    <div>
      <input
        type="radio"
        value="male"
        checked={selected === "male"}
        onChange={(e) => setSelected(e.target.value)}
      />{" "}
      Male
      <input
        type="radio"
        value="female"
        checked={selected === "female"}
        onChange={(e) => setSelected(e.target.value)}
      />{" "}
      Female
    </div>
  );
}

// 7. Multi-select Checkboxes
function Hobbies() {
  const [hobbies, setHobbies] = useState([]);
  const toggleHobby = (hobby) => {
    setHobbies((prev) =>
      prev.includes(hobby) ? prev.filter((h) => h !== hobby) : [...prev, hobby],
    );
  };
  return (
    <div>
      <label>
        <input type="checkbox" onChange={() => toggleHobby("reading")} />
        Reading
      </label>
      <label>
        <input type="checkbox" onChange={() => toggleHobby("gaming")} />
        Gaming
      </label>
    </div>
  );
}

// 8. Textarea
function Textarea() {
  const [message, setMessage] = useState("");
  return (
    <textarea value={message} onChange={(e) => setMessage(e.target.value)} />
  );
}

// 9. Range Slider
function Slider() {
  const [value, setValue] = useState(50);
  return (
    <input
      type="range"
      min="0"
      max="100"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}

// 10. Color Picker
function ColorPicker() {
  const [color, setColor] = useState("#ff0000");
  return (
    <input
      type="color"
      value={color}
      onChange={(e) => setColor(e.target.value)}
    />
  );
}

// 11. Date Picker
function DatePicker() {
  const [date, setDate] = useState("");
  return (
    <input type="date" value={date} onChange={(e) => setDate(e.target.value)} />
  );
}

// 12. Time Picker
function TimePicker() {
  const [time, setTime] = useState("");
  return (
    <input type="time" value={time} onChange={(e) => setTime(e.target.value)} />
  );
}

// 13. File Upload
function FileUpload() {
  const [file, setFile] = useState(null);
  return <input type="file" onChange={(e) => setFile(e.target.files[0])} />;
}

// 14. Multiple File Upload
function MultiFileUpload() {
  const [files, setFiles] = useState([]);
  return (
    <input
      type="file"
      multiple
      onChange={(e) => setFiles(Array.from(e.target.files))}
    />
  );
}

// 15. Password Visibility Toggle
function PasswordField() {
  const [showPassword, setShowPassword] = useState(false);
  const [password, setPassword] = useState("");
  return (
    <div>
      <input
        type={showPassword ? "text" : "password"}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={() => setShowPassword(!showPassword)}>
        {showPassword ? "Hide" : "Show"}
      </button>
    </div>
  );
}

// 16. Accordion
function Accordion() {
  const [openSections, setOpenSections] = useState([]);
  const toggleSection = (sectionId) => {
    setOpenSections((prev) =>
      prev.includes(sectionId)
        ? prev.filter((id) => id !== sectionId)
        : [...prev, sectionId],
    );
  };
  return (
    <div>
      <button onClick={() => toggleSection(1)}>Section 1</button>
      {openSections.includes(1) && <div>Content 1</div>}
      <button onClick={() => toggleSection(2)}>Section 2</button>
      {openSections.includes(2) && <div>Content 2</div>}
    </div>
  );
}

// 17. Tab Component
function Tabs() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Tab 1", "Tab 2", "Tab 3"];
  return (
    <div>
      <div>
        {tabs.map((tab, index) => (
          <button key={index} onClick={() => setActiveTab(index)}>
            {tab}
          </button>
        ))}
      </div>
      <div>Content for {tabs[activeTab]}</div>
    </div>
  );
}

// 18. Pagination
function Pagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 10;
  return (
    <div>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage((p) => p - 1)}
      >
        Previous
      </button>
      <span>
        Page {currentPage} of {totalPages}
      </span>
      <button
        disabled={currentPage === totalPages}
        onClick={() => setCurrentPage((p) => p + 1)}
      >
        Next
      </button>
    </div>
  );
}

// 19. Star Rating
function StarRating() {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  return (
    <div>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => setRating(star)}
          onMouseEnter={() => setHover(star)}
          onMouseLeave={() => setHover(0)}
        >
          {star <= (hover || rating) ? "★" : "☆"}
        </span>
      ))}
    </div>
  );
}

// 20. Shopping Cart Quantity
function QuantitySelector() {
  const [quantity, setQuantity] = useState(1);
  return (
    <div>
      <button onClick={() => setQuantity((q) => Math.max(1, q - 1))}>-</button>
      <span>{quantity}</span>
      <button onClick={() => setQuantity((q) => q + 1)}>+</button>
    </div>
  );
}

// 21. Form with Multiple Fields
function RegistrationForm() {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    age: "",
    country: "",
    terms: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <form>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      <input
        name="email"
        type="email"
        value={formData.email}
        onChange={handleChange}
      />
      <input
        name="password"
        type="password"
        value={formData.password}
        onChange={handleChange}
      />
      <input
        name="age"
        type="number"
        value={formData.age}
        onChange={handleChange}
      />
      <select name="country" value={formData.country} onChange={handleChange}>
        <option value="">Select Country</option>
        <option value="us">USA</option>
        <option value="uk">UK</option>
      </select>
      <input
        type="checkbox"
        name="terms"
        checked={formData.terms}
        onChange={handleChange}
      />
    </form>
  );
}

// 22. Search History
function SearchHistory() {
  const [searchTerm, setSearchTerm] = useState("");
  const [history, setHistory] = useState([]);

  const handleSearch = () => {
    if (searchTerm.trim()) {
      setHistory((prev) => [searchTerm, ...prev.slice(0, 4)]);
      setSearchTerm("");
    }
  };

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>
      <ul>
        {history.map((term, index) => (
          <li key={index}>{term}</li>
        ))}
      </ul>
    </div>
  );
}

// 23. Todo List
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [input, setInput] = useState("");

  const addTodo = () => {
    if (input.trim()) {
      setTodos((prev) => [
        ...prev,
        { id: Date.now(), text: input, completed: false },
      ]);
      setInput("");
    }
  };

  const toggleTodo = (id) => {
    setTodos((prev) =>
      prev.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id));
  };

  return (
    <div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span
              style={{
                textDecoration: todo.completed ? "line-through" : "none",
              }}
              onClick={() => toggleTodo(todo.id)}
            >
              {todo.text}
            </span>
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

// 24. Notification System
function NotificationSystem() {
  const [notifications, setNotifications] = useState([]);
  let counter = 0;

  const addNotification = (type, message) => {
    const id = counter++;
    setNotifications((prev) => [...prev, { id, type, message }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  };

  return (
    <div>
      <button
        onClick={() => addNotification("success", "Operation successful!")}
      >
        Show Success
      </button>
      <button onClick={() => addNotification("error", "Something went wrong!")}>
        Show Error
      </button>
      <div className="notifications">
        {notifications.map((n) => (
          <div key={n.id} className={`notification ${n.type}`}>
            {n.message}
          </div>
        ))}
      </div>
    </div>
  );
}

// 25. Multi-step Form Wizard
function FormWizard() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    personal: { name: "", email: "" },
    address: { street: "", city: "" },
    payment: { card: "", expiry: "" },
  });

  const updateFormData = (section, field, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: { ...prev[section], [field]: value },
    }));
  };

  const nextStep = () => setStep((s) => Math.min(s + 1, 3));
  const prevStep = () => setStep((s) => Math.max(s - 1, 1));

  return (
    <div>
      {step === 1 && (
        <div>
          <h2>Personal Information</h2>
          <input
            placeholder="Name"
            value={formData.personal.name}
            onChange={(e) => updateFormData("personal", "name", e.target.value)}
          />
          <input
            placeholder="Email"
            value={formData.personal.email}
            onChange={(e) =>
              updateFormData("personal", "email", e.target.value)
            }
          />
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Address</h2>
          <input
            placeholder="Street"
            value={formData.address.street}
            onChange={(e) =>
              updateFormData("address", "street", e.target.value)
            }
          />
          <input
            placeholder="City"
            value={formData.address.city}
            onChange={(e) => updateFormData("address", "city", e.target.value)}
          />
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Payment</h2>
          <input
            placeholder="Card Number"
            value={formData.payment.card}
            onChange={(e) => updateFormData("payment", "card", e.target.value)}
          />
          <input
            placeholder="Expiry"
            value={formData.payment.expiry}
            onChange={(e) =>
              updateFormData("payment", "expiry", e.target.value)
            }
          />
        </div>
      )}
      <button onClick={prevStep} disabled={step === 1}>
        Previous
      </button>
      <button onClick={nextStep} disabled={step === 3}>
        Next
      </button>
    </div>
  );
}

// 26. Expandable Text
function ExpandableText({ text, maxLength = 100 }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const displayText = isExpanded ? text : text.slice(0, maxLength) + "...";

  return (
    <div>
      <p>{displayText}</p>
      {text.length > maxLength && (
        <button onClick={() => setIsExpanded(!isExpanded)}>
          {isExpanded ? "Show Less" : "Show More"}
        </button>
      )}
    </div>
  );
}

// 27. Voting System
function VotingSystem() {
  const [votes, setVotes] = useState({
    optionA: 0,
    optionB: 0,
    optionC: 0,
  });
  const [hasVoted, setHasVoted] = useState(false);

  const vote = (option) => {
    if (!hasVoted) {
      setVotes((prev) => ({ ...prev, [option]: prev[option] + 1 }));
      setHasVoted(true);
    }
  };

  const totalVotes = Object.values(votes).reduce((a, b) => a + b, 0);

  return (
    <div>
      <h3>Total Votes: {totalVotes}</h3>
      {Object.entries(votes).map(([option, count]) => (
        <div key={option}>
          <button onClick={() => vote(option)} disabled={hasVoted}>
            Vote for {option}
          </button>
          <span>
            {" "}
            {count} votes ({((count / totalVotes) * 100 || 0).toFixed(1)}%)
          </span>
        </div>
      ))}
    </div>
  );
}

// 28. Image Gallery with Lightbox
function ImageGallery() {
  const [images] = useState(["image1.jpg", "image2.jpg", "image3.jpg"]);
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <div>
      <div className="gallery">
        {images.map((img, index) => (
          <img key={index} src={img} onClick={() => setSelectedImage(img)} />
        ))}
      </div>
      {selectedImage && (
        <div className="lightbox" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} />
        </div>
      )}
    </div>
  );
}
```

<!-------------------------------




useEffect Hooks






 ------------------------------>

## **2. useEffect Hook - 25+ Scenarios**

```jsx
// 1. Update Document Title
function DocumentTitleUpdater() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = `Count: ${count}`;
  }, [count]);

  return <button onClick={() => setCount((c) => c + 1)}>Increment</button>;
}

// 2. Fetch Data on Mount
function UserList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api.example.com/users")
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []); // Empty array = run once on mount

  if (loading) return <div>Loading...</div>;
  return (
    <div>
      {users.map((u) => (
        <div key={u.id}>{u.name}</div>
      ))}
    </div>
  );
}

// 3. Fetch Data with Dependency
function UserProfile({ userId }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    let isMounted = true;

    fetch(`https://api.example.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => {
        if (isMounted) {
          setUser(data);
        }
      });

    return () => {
      isMounted = false; // Cleanup to prevent memory leaks
    };
  }, [userId]);

  return <div>{user?.name}</div>;
}

// 4. Window Resize Listener
function WindowSize() {
  const [size, setSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setSize({ width: window.innerWidth, height: window.innerHeight });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div>
      Window size: {size.width} x {size.height}
    </div>
  );
}

// 5. Keyboard Event Listener
function KeyPressLogger() {
  const [lastKey, setLastKey] = useState("");

  useEffect(() => {
    const handleKeyPress = (e) => {
      setLastKey(e.key);
    };

    window.addEventListener("keypress", handleKeyPress);
    return () => window.removeEventListener("keypress", handleKeyPress);
  }, []);

  return <div>Last key pressed: {lastKey}</div>;
}

// 6. Scroll Position Tracker
function ScrollTracker() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>Scroll position: {scrollY}px</div>;
}

// 7. Local Storage Sync
function PersistentCounter() {
  const [count, setCount] = useState(() => {
    const saved = localStorage.getItem("count");
    return saved ? JSON.parse(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return <button onClick={() => setCount((c) => c + 1)}>Count: {count}</button>;
}

// 8. Timer with Cleanup
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return <div>Time elapsed: {seconds}s</div>;
}

// 9. Debounced Search
function DebouncedSearch() {
  const [searchTerm, setSearchTerm] = useState("");
  const [results, setResults] = useState([]);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (searchTerm) {
        fetch(`https://api.example.com/search?q=${searchTerm}`)
          .then((res) => res.json())
          .then((data) => setResults(data));
      }
    }, 500);

    return () => clearTimeout(timeoutId);
  }, [searchTerm]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      {results.map((r) => (
        <div key={r.id}>{r.name}</div>
      ))}
    </div>
  );
}

// 10. WebSocket Connection
function LiveChat() {
  const [messages, setMessages] = useState([]);
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const ws = new WebSocket("wss://example.com/chat");

    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, JSON.parse(event.data)]);
    };

    setSocket(ws);

    return () => {
      ws.close();
    };
  }, []);

  const sendMessage = (msg) => {
    if (socket) {
      socket.send(JSON.stringify({ text: msg }));
    }
  };

  return (
    <div>
      {messages.map((msg, i) => (
        <div key={i}>{msg.text}</div>
      ))}
    </div>
  );
}

// 11. Geolocation
function UserLocation() {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    const success = (position) => {
      setLocation({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
      });
    };

    const error = () => {
      setError("Unable to get location");
    };

    const watcher = navigator.geolocation.watchPosition(success, error);

    return () => navigator.geolocation.clearWatch(watcher);
  }, []);

  return (
    <div>
      {error && <div>{error}</div>}
      {location && (
        <div>
          Lat: {location.lat}, Lng: {location.lng}
        </div>
      )}
    </div>
  );
}

// 12. Online Status
function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return <div>Status: {isOnline ? "🟢 Online" : "🔴 Offline"}</div>;
}

// 13. Page Visibility
function PageVisibility() {
  const [isVisible, setIsVisible] = useState(!document.hidden);

  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsVisible(!document.hidden);
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () =>
      document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  return <div>Page is {isVisible ? "visible" : "hidden"}</div>;
}

// 14. Mouse Position
function MouseTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div>
      Mouse: {position.x}, {position.y}
    </div>
  );
}

// 15. Copy to Clipboard
function CopyToClipboard({ text }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text);
    setCopied(true);
  };

  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  return <button onClick={handleCopy}>{copied ? "Copied!" : "Copy"}</button>;
}

// 16. Countdown Timer
function CountdownTimer({ initialSeconds = 60 }) {
  const [seconds, setSeconds] = useState(initialSeconds);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;

    if (isActive && seconds > 0) {
      interval = setInterval(() => {
        setSeconds((s) => s - 1);
      }, 1000);
    } else if (seconds === 0) {
      setIsActive(false);
    }

    return () => clearInterval(interval);
  }, [isActive, seconds]);

  return (
    <div>
      <div>{seconds} seconds remaining</div>
      <button onClick={() => setIsActive(true)} disabled={isActive}>
        Start
      </button>
      <button onClick={() => setIsActive(false)} disabled={!isActive}>
        Pause
      </button>
      <button onClick={() => setSeconds(initialSeconds)}>Reset</button>
    </div>
  );
}

// 17. Infinite Scroll
function InfiniteScroll() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    const loadMoreItems = async () => {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.example.com/items?page=${page}`,
        );
        const data = await response.json();

        setItems((prev) => [...prev, ...data.items]);
        setHasMore(data.hasMore);
      } finally {
        setLoading(false);
      }
    };

    loadMoreItems();
  }, [page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + window.scrollY >=
          document.body.offsetHeight - 500 &&
        !loading &&
        hasMore
      ) {
        setPage((p) => p + 1);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading, hasMore]);

  return (
    <div>
      {items.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
      {loading && <div>Loading...</div>}
    </div>
  );
}

// 18. Idle Timer
function IdleTimer({ timeout = 60000 }) {
  const [isIdle, setIsIdle] = useState(false);

  useEffect(() => {
    let timeoutId;

    const resetTimer = () => {
      setIsIdle(false);
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => setIsIdle(true), timeout);
    };

    const events = ["mousemove", "keydown", "click", "scroll"];
    events.forEach((event) => window.addEventListener(event, resetTimer));

    resetTimer();

    return () => {
      clearTimeout(timeoutId);
      events.forEach((event) => window.removeEventListener(event, resetTimer));
    };
  }, [timeout]);

  return <div>User is {isIdle ? "idle" : "active"}</div>;
}

// 19. Form Auto-save
function AutoSaveForm() {
  const [formData, setFormData] = useState({ title: "", content: "" });
  const [lastSaved, setLastSaved] = useState(null);
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    const saveData = async () => {
      setIsSaving(true);
      try {
        await fetch("/api/drafts", {
          method: "POST",
          body: JSON.stringify(formData),
        });
        setLastSaved(new Date());
      } finally {
        setIsSaving(false);
      }
    };

    const timeoutId = setTimeout(saveData, 2000);

    return () => clearTimeout(timeoutId);
  }, [formData]);

  return (
    <div>
      <input
        value={formData.title}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, title: e.target.value }))
        }
        placeholder="Title"
      />
      <textarea
        value={formData.content}
        onChange={(e) =>
          setFormData((prev) => ({ ...prev, content: e.target.value }))
        }
        placeholder="Content"
      />
      {isSaving && <span>Saving...</span>}
      {lastSaved && <span>Last saved: {lastSaved.toLocaleTimeString()}</span>}
    </div>
  );
}

// 20. Meta Tags Updater
function MetaTags({ title, description, image }) {
  useEffect(() => {
    // Update title
    document.title = title;

    // Update meta tags
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute("content", description);
    }

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute("content", title);
    }

    const ogDescription = document.querySelector(
      'meta[property="og:description"]',
    );
    if (ogDescription) {
      ogDescription.setAttribute("content", description);
    }

    const ogImage = document.querySelector('meta[property="og:image"]');
    if (ogImage) {
      ogImage.setAttribute("content", image);
    }

    return () => {
      document.title = "Default Title";
    };
  }, [title, description, image]);

  return null;
}

// 21. Animation with RequestAnimationFrame
function SmoothAnimation() {
  const [position, setPosition] = useState(0);
  const [direction, setDirection] = useState(1);

  useEffect(() => {
    let animationFrameId;

    const animate = () => {
      setPosition((prev) => {
        const next = prev + direction;
        if (next > 300 || next < 0) {
          setDirection((d) => -d);
          return prev;
        }
        return next;
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, [direction]);

  return (
    <div
      style={{
        width: "50px",
        height: "50px",
        backgroundColor: "blue",
        transform: `translateX(${position}px)`,
        transition: "transform 0.1s linear",
      }}
    />
  );
}

// 22. Browser History Navigation
function HistoryTracker() {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  return (
    <div>
      <div>Current path: {currentPath}</div>
      <button onClick={() => navigate("/page1")}>Page 1</button>
      <button onClick={() => navigate("/page2")}>Page 2</button>
    </div>
  );
}

// 23. Battery Status
function BatteryStatus() {
  const [battery, setBattery] = useState(null);

  useEffect(() => {
    if ("getBattery" in navigator) {
      navigator.getBattery().then((battery) => {
        const updateBattery = () => {
          setBattery({
            level: battery.level * 100,
            charging: battery.charging,
            chargingTime: battery.chargingTime,
            dischargingTime: battery.dischargingTime,
          });
        };

        updateBattery();
        battery.addEventListener("levelchange", updateBattery);
        battery.addEventListener("chargingchange", updateBattery);

        return () => {
          battery.removeEventListener("levelchange", updateBattery);
          battery.removeEventListener("chargingchange", updateBattery);
        };
      });
    }
  }, []);

  if (!battery) return <div>Battery API not supported</div>;

  return (
    <div>
      <div>Level: {battery.level}%</div>
      <div>Status: {battery.charging ? "Charging" : "Discharging"}</div>
    </div>
  );
}

// 24. Device Orientation
function DeviceOrientation() {
  const [orientation, setOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
  });

  useEffect(() => {
    const handleOrientation = (event) => {
      setOrientation({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, []);

  return (
    <div>
      <div>Alpha: {orientation.alpha.toFixed(2)}</div>
      <div>Beta: {orientation.beta.toFixed(2)}</div>
      <div>Gamma: {orientation.gamma.toFixed(2)}</div>
    </div>
  );
}

// 25. Speech Recognition
function SpeechToText() {
  const [isListening, setIsListening] = useState(false);
  const [transcript, setTranscript] = useState("");

  useEffect(() => {
    if (!("webkitSpeechRecognition" in window)) {
      console.log("Speech recognition not supported");
      return;
    }

    const recognition = new window.webkitSpeechRecognition();
    recognition.continuous = true;
    recognition.interimResults = true;

    recognition.onresult = (event) => {
      const transcript = Array.from(event.results)
        .map((result) => result[0])
        .map((result) => result.transcript)
        .join("");

      setTranscript(transcript);
    };

    if (isListening) {
      recognition.start();
    } else {
      recognition.stop();
    }

    return () => {
      recognition.stop();
    };
  }, [isListening]);

  return (
    <div>
      <button onClick={() => setIsListening(!isListening)}>
        {isListening ? "Stop" : "Start"} Listening
      </button>
      <div>{transcript}</div>
    </div>
  );
}

// 26. Network Information
function NetworkInfo() {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    if ("connection" in navigator) {
      const connection = navigator.connection;

      const updateConnection = () => {
        setConnection({
          effectiveType: connection.effectiveType,
          downlink: connection.downlink,
          rtt: connection.rtt,
          saveData: connection.saveData,
        });
      };

      updateConnection();
      connection.addEventListener("change", updateConnection);

      return () => connection.removeEventListener("change", updateConnection);
    }
  }, []);

  if (!connection) return <div>Network info not available</div>;

  return (
    <div>
      <div>Connection: {connection.effectiveType}</div>
      <div>Speed: {connection.downlink} Mbps</div>
      <div>RTT: {connection.rtt} ms</div>
      <div>Save Data: {connection.saveData ? "Yes" : "No"}</div>
    </div>
  );
}
```

I'll continue with the other hooks (useContext, useReducer, useCallback, useMemo, useRef, useImperativeHandle, useLayoutEffect, useDebugValue) if you want me to continue. Each will have 25+ scenarios with working code examples.

This is already getting very long. Would you like me to continue with the remaining hooks?

<!------------------------------










## **3. useContext Hook - 25+ Scenarios**




 ------------->

# **CONTINUING WITH REMAINING REACT HOOKS - 25+ SCENARIOS EACH**

## **3. useContext Hook - 25+ Scenarios**

```jsx
// 1. Theme Context
const ThemeContext = React.createContext();

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () =>
    setTheme((prev) => (prev === "light" ? "dark" : "light"));

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

function ThemedButton() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  return (
    <button className={`btn-${theme}`} onClick={toggleTheme}>
      Current theme: {theme}
    </button>
  );
}

// 2. User Authentication Context
const AuthContext = React.createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (credentials) => {
    // API call
    setUser({ id: 1, name: "John", role: "user" });
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

function Profile() {
  const { user, logout } = useContext(AuthContext);
  if (!user) return <div>Please login</div>;
  return (
    <div>
      Welcome {user.name}
      <button onClick={logout}>Logout</button>
    </div>
  );
}

// 3. Language/Translation Context
const LanguageContext = React.createContext();

function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en");

  const translations = {
    en: { hello: "Hello", goodbye: "Goodbye" },
    es: { hello: "Hola", goodbye: "Adiós" },
    fr: { hello: "Bonjour", goodbye: "Au revoir" },
  };

  const t = (key) => translations[language][key];

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

function Greeting() {
  const { t, language, setLanguage } = useContext(LanguageContext);
  return (
    <div>
      <h1>{t("hello")}</h1>
      <select value={language} onChange={(e) => setLanguage(e.target.value)}>
        <option value="en">English</option>
        <option value="es">Español</option>
        <option value="fr">Français</option>
      </select>
    </div>
  );
}

// 4. Shopping Cart Context
const CartContext = React.createContext();

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [total, setTotal] = useState(0);

  const addToCart = (product) => {
    setCart((prev) => [...prev, product]);
    setTotal((prev) => prev + product.price);
  };

  const removeFromCart = (productId) => {
    const product = cart.find((item) => item.id === productId);
    setCart((prev) => prev.filter((item) => item.id !== productId));
    setTotal((prev) => prev - product.price);
  };

  const clearCart = () => {
    setCart([]);
    setTotal(0);
  };

  return (
    <CartContext.Provider
      value={{ cart, total, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

function CartIcon() {
  const { cart, total } = useContext(CartContext);
  return (
    <div>
      Items: {cart.length} | Total: ${total.toFixed(2)}
    </div>
  );
}

function AddToCartButton({ product }) {
  const { addToCart } = useContext(CartContext);
  return <button onClick={() => addToCart(product)}>Add to Cart</button>;
}

// 5. Notification Context
const NotificationContext = React.createContext();

function NotificationProvider({ children }) {
  const [notifications, setNotifications] = useState([]);

  const showNotification = (message, type = "info") => {
    const id = Date.now();
    setNotifications((prev) => [...prev, { id, message, type }]);
    setTimeout(() => {
      setNotifications((prev) => prev.filter((n) => n.id !== id));
    }, 5000);
  };

  return (
    <NotificationContext.Provider value={{ notifications, showNotification }}>
      {children}
      <NotificationList />
    </NotificationContext.Provider>
  );
}

function NotificationList() {
  const { notifications } = useContext(NotificationContext);
  return (
    <div className="notifications">
      {notifications.map((n) => (
        <div key={n.id} className={`notification ${n.type}`}>
          {n.message}
        </div>
      ))}
    </div>
  );
}

// 6. Modal Context
const ModalContext = React.createContext();

function ModalProvider({ children }) {
  const [modal, setModal] = useState({ isOpen: false, content: null });

  const openModal = (content) => setModal({ isOpen: true, content });
  const closeModal = () => setModal({ isOpen: false, content: null });

  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      {children}
      {modal.isOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modal.content}
            <button onClick={closeModal}>Close</button>
          </div>
        </div>
      )}
    </ModalContext.Provider>
  );
}

function ConfirmationButton({ onConfirm, children }) {
  const { openModal } = useContext(ModalContext);

  const handleClick = () => {
    openModal(
      <div>
        <p>Are you sure?</p>
        <button
          onClick={() => {
            onConfirm();
            closeModal();
          }}
        >
          Yes
        </button>
        <button onClick={closeModal}>No</button>
      </div>,
    );
  };

  return <button onClick={handleClick}>{children}</button>;
}

// 7. Loading Context
const LoadingContext = React.createContext();

function LoadingProvider({ children }) {
  const [loading, setLoading] = useState(false);
  const [loadingQueue, setLoadingQueue] = useState([]);

  const showLoading = () => {
    setLoadingQueue((prev) => [...prev, Date.now()]);
  };

  const hideLoading = () => {
    setLoadingQueue((prev) => prev.slice(1));
  };

  useEffect(() => {
    setLoading(loadingQueue.length > 0);
  }, [loadingQueue]);

  return (
    <LoadingContext.Provider value={{ loading, showLoading, hideLoading }}>
      {children}
      {loading && <div className="global-loader">Loading...</div>}
    </LoadingContext.Provider>
  );
}

function DataFetcher() {
  const { showLoading, hideLoading } = useContext(LoadingContext);
  const [data, setData] = useState(null);

  const fetchData = async () => {
    showLoading();
    try {
      const response = await fetch("https://api.example.com/data");
      const data = await response.json();
      setData(data);
    } finally {
      hideLoading();
    }
  };

  return <button onClick={fetchData}>Fetch Data</button>;
}

// 8. User Preferences Context
const PreferencesContext = React.createContext();

function PreferencesProvider({ children }) {
  const [preferences, setPreferences] = useState(() => {
    const saved = localStorage.getItem("preferences");
    return saved
      ? JSON.parse(saved)
      : {
          fontSize: "medium",
          reducedMotion: false,
          highContrast: false,
          notifications: true,
        };
  });

  const updatePreference = (key, value) => {
    setPreferences((prev) => {
      const newPrefs = { ...prev, [key]: value };
      localStorage.setItem("preferences", JSON.stringify(newPrefs));
      return newPrefs;
    });
  };

  return (
    <PreferencesContext.Provider value={{ preferences, updatePreference }}>
      {children}
    </PreferencesContext.Provider>
  );
}

function SettingsPanel() {
  const { preferences, updatePreference } = useContext(PreferencesContext);

  return (
    <div>
      <select
        value={preferences.fontSize}
        onChange={(e) => updatePreference("fontSize", e.target.value)}
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <label>
        <input
          type="checkbox"
          checked={preferences.reducedMotion}
          onChange={(e) => updatePreference("reducedMotion", e.target.checked)}
        />
        Reduced Motion
      </label>

      <label>
        <input
          type="checkbox"
          checked={preferences.highContrast}
          onChange={(e) => updatePreference("highContrast", e.target.checked)}
        />
        High Contrast
      </label>
    </div>
  );
}

// 9. WebSocket Context
const WebSocketContext = React.createContext();

function WebSocketProvider({ children, url }) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  useEffect(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => setIsConnected(true);
    ws.onclose = () => setIsConnected(false);
    ws.onmessage = (event) => {
      setMessages((prev) => [...prev, JSON.parse(event.data)]);
    };

    setSocket(ws);

    return () => ws.close();
  }, [url]);

  const sendMessage = (message) => {
    if (socket && isConnected) {
      socket.send(JSON.stringify(message));
    }
  };

  return (
    <WebSocketContext.Provider value={{ messages, isConnected, sendMessage }}>
      {children}
    </WebSocketContext.Provider>
  );
}

function ChatRoom() {
  const { messages, isConnected, sendMessage } = useContext(WebSocketContext);
  const [input, setInput] = useState("");

  const handleSend = () => {
    sendMessage({ text: input, timestamp: Date.now() });
    setInput("");
  };

  return (
    <div>
      <div>Status: {isConnected ? "🟢 Connected" : "🔴 Disconnected"}</div>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i}>{msg.text}</div>
        ))}
      </div>
      <input value={input} onChange={(e) => setInput(e.target.value)} />
      <button onClick={handleSend} disabled={!isConnected}>
        Send
      </button>
    </div>
  );
}

// 10. Feature Flags Context
const FeatureFlagsContext = React.createContext();

function FeatureFlagsProvider({ children }) {
  const [flags, setFlags] = useState({
    newDashboard: false,
    betaFeatures: false,
    experimental: false,
    darkMode: true,
  });

  useEffect(() => {
    fetch("/api/features")
      .then((res) => res.json())
      .then(setFlags);
  }, []);

  return (
    <FeatureFlagsContext.Provider value={flags}>
      {children}
    </FeatureFlagsContext.Provider>
  );
}

function Dashboard() {
  const flags = useContext(FeatureFlagsContext);

  return (
    <div>
      {flags.newDashboard ? <NewDashboard /> : <OldDashboard />}
      {flags.betaFeatures && <BetaFeatures />}
    </div>
  );
}

// 11. Routing Context
const RouterContext = React.createContext();

function RouterProvider({ children }) {
  const [currentPath, setCurrentPath] = useState(window.location.pathname);

  const navigate = (path) => {
    window.history.pushState({}, "", path);
    setCurrentPath(path);
  };

  useEffect(() => {
    const handlePopState = () => {
      setCurrentPath(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  return (
    <RouterContext.Provider value={{ currentPath, navigate }}>
      {children}
    </RouterContext.Provider>
  );
}

function Route({ path, component }) {
  const { currentPath } = useContext(RouterContext);
  return currentPath === path ? component : null;
}

function Link({ to, children }) {
  const { navigate } = useContext(RouterContext);
  return (
    <a
      href={to}
      onClick={(e) => {
        e.preventDefault();
        navigate(to);
      }}
    >
      {children}
    </a>
  );
}

// 12. Analytics Context
const AnalyticsContext = React.createContext();

function AnalyticsProvider({ children }) {
  const trackEvent = (eventName, properties = {}) => {
    // Send to analytics service
    console.log("Tracking:", eventName, properties);
    fetch("/api/analytics", {
      method: "POST",
      body: JSON.stringify({ event: eventName, ...properties }),
    });
  };

  return (
    <AnalyticsContext.Provider value={{ trackEvent }}>
      {children}
    </AnalyticsContext.Provider>
  );
}

function TrackedButton({ eventName, children, ...props }) {
  const { trackEvent } = useContext(AnalyticsContext);

  const handleClick = (e) => {
    trackEvent(eventName, { timestamp: Date.now() });
    props.onClick?.(e);
  };

  return (
    <button {...props} onClick={handleClick}>
      {children}
    </button>
  );
}

// 13. Permissions Context
const PermissionsContext = React.createContext();

function PermissionsProvider({ children }) {
  const [permissions, setPermissions] = useState({
    canEdit: false,
    canDelete: false,
    canCreate: false,
    canView: true,
  });

  useEffect(() => {
    // Fetch user permissions
    fetch("/api/user/permissions")
      .then((res) => res.json())
      .then(setPermissions);
  }, []);

  return (
    <PermissionsContext.Provider value={permissions}>
      {children}
    </PermissionsContext.Provider>
  );
}

function EditButton() {
  const permissions = useContext(PermissionsContext);

  if (!permissions.canEdit) {
    return <div>You don't have permission to edit</div>;
  }

  return <button>Edit</button>;
}

// 14. Search Context
const SearchContext = React.createContext();

function SearchProvider({ children }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [filters, setFilters] = useState({});

  const search = async (term) => {
    setSearchTerm(term);
    const response = await fetch(
      `/api/search?q=${term}&filters=${JSON.stringify(filters)}`,
    );
    const results = await response.json();
    setSearchResults(results);
  };

  return (
    <SearchContext.Provider
      value={{ searchTerm, searchResults, filters, setFilters, search }}
    >
      {children}
    </SearchContext.Provider>
  );
}

function SearchBar() {
  const { searchTerm, search } = useContext(SearchContext);

  return (
    <input
      value={searchTerm}
      onChange={(e) => search(e.target.value)}
      placeholder="Search..."
    />
  );
}

function SearchFilters() {
  const { filters, setFilters } = useContext(SearchContext);

  return (
    <select onChange={(e) => setFilters({ category: e.target.value })}>
      <option value="all">All</option>
      <option value="books">Books</option>
      <option value="electronics">Electronics</option>
    </select>
  );
}

function SearchResults() {
  const { searchResults } = useContext(SearchContext);

  return (
    <div>
      {searchResults.map((item) => (
        <div key={item.id}>{item.name}</div>
      ))}
    </div>
  );
}

// 15. Breadcrumb Context
const BreadcrumbContext = React.createContext();

function BreadcrumbProvider({ children }) {
  const [crumbs, setCrumbs] = useState([]);

  const addCrumb = (crumb) => {
    setCrumbs((prev) => [...prev, crumb]);
  };

  const removeCrumb = (path) => {
    setCrumbs((prev) => prev.filter((c) => c.path !== path));
  };

  const clearCrumbs = () => setCrumbs([]);

  return (
    <BreadcrumbContext.Provider
      value={{ crumbs, addCrumb, removeCrumb, clearCrumbs }}
    >
      {children}
    </BreadcrumbContext.Provider>
  );
}

function Breadcrumbs() {
  const { crumbs } = useContext(BreadcrumbContext);

  return (
    <nav>
      {crumbs.map((crumb, i) => (
        <span key={crumb.path}>
          {i > 0 && " > "}
          <a href={crumb.path}>{crumb.label}</a>
        </span>
      ))}
    </nav>
  );
}

// 16. Toast Context
const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = useState([]);

  const showToast = (message, type = "info", duration = 3000) => {
    const id = Date.now();
    setToasts((prev) => [...prev, { id, message, type }]);

    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, duration);
  };

  return (
    <ToastContext.Provider value={{ showToast }}>
      {children}
      <div className="toast-container">
        {toasts.map((toast) => (
          <div key={toast.id} className={`toast toast-${toast.type}`}>
            {toast.message}
          </div>
        ))}
      </div>
    </ToastContext.Provider>
  );
}

function ActionButton() {
  const { showToast } = useContext(ToastContext);

  const handleAction = () => {
    try {
      // Do something
      showToast("Action completed successfully!", "success");
    } catch (error) {
      showToast("Something went wrong", "error");
    }
  };

  return <button onClick={handleAction}>Perform Action</button>;
}

// 17. Confirmation Dialog Context
const ConfirmContext = React.createContext();

function ConfirmProvider({ children }) {
  const [confirm, setConfirm] = useState({
    isOpen: false,
    title: "",
    message: "",
    onConfirm: null,
  });

  const showConfirm = (title, message, onConfirm) => {
    setConfirm({ isOpen: true, title, message, onConfirm });
  };

  const hideConfirm = () => {
    setConfirm({ isOpen: false, title: "", message: "", onConfirm: null });
  };

  return (
    <ConfirmContext.Provider value={{ showConfirm }}>
      {children}
      {confirm.isOpen && (
        <div className="confirm-overlay">
          <div className="confirm-dialog">
            <h3>{confirm.title}</h3>
            <p>{confirm.message}</p>
            <button
              onClick={() => {
                confirm.onConfirm();
                hideConfirm();
              }}
            >
              Yes
            </button>
            <button onClick={hideConfirm}>No</button>
          </div>
        </div>
      )}
    </ConfirmContext.Provider>
  );
}

function DeleteButton({ onDelete }) {
  const { showConfirm } = useContext(ConfirmContext);

  const handleDelete = () => {
    showConfirm(
      "Delete Item",
      "Are you sure you want to delete this item? This action cannot be undone.",
      onDelete,
    );
  };

  return <button onClick={handleDelete}>Delete</button>;
}

// 18. Sidebar Context
const SidebarContext = React.createContext();

function SidebarProvider({ children }) {
  const [isOpen, setIsOpen] = useState(true);
  const [sidebarContent, setSidebarContent] = useState(null);

  const openSidebar = (content) => {
    setSidebarContent(content);
    setIsOpen(true);
  };

  const closeSidebar = () => setIsOpen(false);
  const toggleSidebar = () => setIsOpen((prev) => !prev);

  return (
    <SidebarContext.Provider
      value={{
        isOpen,
        sidebarContent,
        openSidebar,
        closeSidebar,
        toggleSidebar,
      }}
    >
      {children}
    </SidebarContext.Provider>
  );
}

function Layout() {
  const { isOpen, sidebarContent } = useContext(SidebarContext);

  return (
    <div className={`layout ${isOpen ? "sidebar-open" : "sidebar-closed"}`}>
      <main>Main Content</main>
      {isOpen && <aside className="sidebar">{sidebarContent}</aside>}
    </div>
  );
}

function ToggleSidebarButton() {
  const { toggleSidebar, openSidebar } = useContext(SidebarContext);

  return (
    <>
      <button onClick={toggleSidebar}>Toggle Sidebar</button>
      <button onClick={() => openSidebar(<div>Custom Content</div>)}>
        Open with Content
      </button>
    </>
  );
}

// 19. Keyboard Shortcuts Context
const KeyboardContext = React.createContext();

function KeyboardProvider({ children }) {
  const [shortcuts, setShortcuts] = useState({});

  const registerShortcut = (key, callback, description) => {
    setShortcuts((prev) => ({ ...prev, [key]: { callback, description } }));
  };

  const unregisterShortcut = (key) => {
    setShortcuts((prev) => {
      const newShortcuts = { ...prev };
      delete newShortcuts[key];
      return newShortcuts;
    });
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      const key = e.key.toLowerCase();
      if (e.ctrlKey || e.metaKey) {
        const shortcut = `ctrl+${key}`;
        if (shortcuts[shortcut]) {
          e.preventDefault();
          shortcuts[shortcut].callback();
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [shortcuts]);

  return (
    <KeyboardContext.Provider value={{ registerShortcut, unregisterShortcut }}>
      {children}
    </KeyboardContext.Provider>
  );
}

function SaveButton() {
  const { registerShortcut, unregisterShortcut } = useContext(KeyboardContext);

  useEffect(() => {
    const handleSave = () => console.log("Saved!");
    registerShortcut("ctrl+s", handleSave, "Save current document");

    return () => unregisterShortcut("ctrl+s");
  }, [registerShortcut, unregisterShortcut]);

  return <button>Save (Ctrl+S)</button>;
}

// 20. Drawer Context
const DrawerContext = React.createContext();

function DrawerProvider({ children }) {
  const [drawer, setDrawer] = useState({
    isOpen: false,
    position: "right",
    content: null,
  });

  const openDrawer = (content, position = "right") => {
    setDrawer({ isOpen: true, position, content });
  };

  const closeDrawer = () => {
    setDrawer((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <DrawerContext.Provider value={{ openDrawer, closeDrawer }}>
      {children}
      {drawer.isOpen && (
        <div className={`drawer-overlay`} onClick={closeDrawer}>
          <div
            className={`drawer drawer-${drawer.position}`}
            onClick={(e) => e.stopPropagation()}
          >
            {drawer.content}
            <button onClick={closeDrawer}>Close</button>
          </div>
        </div>
      )}
    </DrawerContext.Provider>
  );
}

// 21. Wizard Context
const WizardContext = React.createContext();

function WizardProvider({ children, steps }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [wizardData, setWizardData] = useState({});

  const nextStep = () =>
    setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1));
  const prevStep = () => setCurrentStep((prev) => Math.max(prev - 1, 0));
  const goToStep = (step) => setCurrentStep(step);

  const updateWizardData = (data) => {
    setWizardData((prev) => ({ ...prev, ...data }));
  };

  return (
    <WizardContext.Provider
      value={{
        currentStep,
        steps,
        wizardData,
        nextStep,
        prevStep,
        goToStep,
        updateWizardData,
      }}
    >
      {children}
    </WizardContext.Provider>
  );
}

function WizardStep() {
  const { currentStep, steps } = useContext(WizardContext);
  const StepComponent = steps[currentStep].component;
  return <StepComponent />;
}

// 22. Network Status Context
const NetworkContext = React.createContext();

function NetworkProvider({ children }) {
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [networkType, setNetworkType] = useState(null);

  useEffect(() => {
    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if ("connection" in navigator) {
      const connection = navigator.connection;
      setNetworkType(connection.effectiveType);

      const updateNetworkType = () => setNetworkType(connection.effectiveType);
      connection.addEventListener("change", updateNetworkType);

      return () => {
        connection.removeEventListener("change", updateNetworkType);
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <NetworkContext.Provider value={{ isOnline, networkType }}>
      {children}
    </NetworkContext.Provider>
  );
}

function NetworkStatus() {
  const { isOnline, networkType } = useContext(NetworkContext);

  return (
    <div className={`network-status ${isOnline ? "online" : "offline"}`}>
      {isOnline ? "🟢 Online" : "🔴 Offline"}
      {networkType && ` (${networkType})`}
    </div>
  );
}

// 23. Booking Context
const BookingContext = React.createContext();

function BookingProvider({ children }) {
  const [booking, setBooking] = useState({
    service: null,
    date: null,
    time: null,
    customer: null,
    payment: null,
  });

  const updateBooking = (step, data) => {
    setBooking((prev) => ({ ...prev, [step]: data }));
  };

  const resetBooking = () => {
    setBooking({
      service: null,
      date: null,
      time: null,
      customer: null,
      payment: null,
    });
  };

  return (
    <BookingContext.Provider value={{ booking, updateBooking, resetBooking }}>
      {children}
    </BookingContext.Provider>
  );
}

function BookingSummary() {
  const { booking } = useContext(BookingContext);

  return (
    <div className="booking-summary">
      <h3>Booking Summary</h3>
      <p>Service: {booking.service?.name}</p>
      <p>Date: {booking.date}</p>
      <p>Time: {booking.time}</p>
      <p>Customer: {booking.customer?.name}</p>
      <p>Total: ${booking.payment?.amount}</p>
    </div>
  );
}

// 24. Multi-tenant Context
const TenantContext = React.createContext();

function TenantProvider({ children }) {
  const [tenant, setTenant] = useState(null);
  const [tenants, setTenants] = useState([]);

  useEffect(() => {
    // Load available tenants
    fetch("/api/tenants")
      .then((res) => res.json())
      .then(setTenants);

    // Get current tenant from URL/subdomain
    const currentTenant = window.location.hostname.split(".")[0];
    setTenant(currentTenant);
  }, []);

  const switchTenant = (tenantId) => {
    // Switch tenant logic
    setTenant(tenantId);
  };

  return (
    <TenantContext.Provider value={{ tenant, tenants, switchTenant }}>
      {children}
    </TenantContext.Provider>
  );
}

function TenantSelector() {
  const { tenant, tenants, switchTenant } = useContext(TenantContext);

  return (
    <select value={tenant} onChange={(e) => switchTenant(e.target.value)}>
      {tenants.map((t) => (
        <option key={t.id} value={t.id}>
          {t.name}
        </option>
      ))}
    </select>
  );
}

// 25. Accessibility Context
const AccessibilityContext = React.createContext();

function AccessibilityProvider({ children }) {
  const [settings, setSettings] = useState({
    fontSize: 16,
    highContrast: false,
    screenReader: false,
    reduceMotion: false,
    dyslexiaFriendly: false,
  });

  const updateSetting = (key, value) => {
    setSettings((prev) => ({ ...prev, [key]: value }));

    // Apply settings to DOM
    if (key === "fontSize") {
      document.documentElement.style.fontSize = `${value}px`;
    }
    if (key === "highContrast") {
      document.documentElement.classList.toggle("high-contrast", value);
    }
    if (key === "reduceMotion") {
      document.documentElement.classList.toggle("reduce-motion", value);
    }
  };

  return (
    <AccessibilityContext.Provider value={{ settings, updateSetting }}>
      {children}
    </AccessibilityContext.Provider>
  );
}

function AccessibilityMenu() {
  const { settings, updateSetting } = useContext(AccessibilityContext);

  return (
    <div className="accessibility-menu">
      <label>
        Font Size:
        <input
          type="range"
          min="12"
          max="24"
          value={settings.fontSize}
          onChange={(e) => updateSetting("fontSize", parseInt(e.target.value))}
        />
      </label>

      <label>
        <input
          type="checkbox"
          checked={settings.highContrast}
          onChange={(e) => updateSetting("highContrast", e.target.checked)}
        />
        High Contrast
      </label>

      <label>
        <input
          type="checkbox"
          checked={settings.reduceMotion}
          onChange={(e) => updateSetting("reduceMotion", e.target.checked)}
        />
        Reduce Motion
      </label>
    </div>
  );
}
```

## **4. useReducer Hook - 25+ Scenarios**

```jsx
// 1. Basic Counter with Reducer
const counterReducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
};

function CounterWithReducer() {
  const [state, dispatch] = useReducer(counterReducer, { count: 0 });

  return (
    <div>
      Count: {state.count}
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-</button>
      <button onClick={() => dispatch({ type: "RESET" })}>Reset</button>
    </div>
  );
}

// 2. Todo List with Reducer
const todoReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [
          ...state.todos,
          {
            id: Date.now(),
            text: action.payload,
            completed: false,
          },
        ],
      };

    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload
            ? { ...todo, completed: !todo.completed }
            : todo,
        ),
      };

    case "DELETE_TODO":
      return {
        ...state,
        todos: state.todos.filter((todo) => todo.id !== action.payload),
      };

    case "EDIT_TODO":
      return {
        ...state,
        todos: state.todos.map((todo) =>
          todo.id === action.payload.id
            ? { ...todo, text: action.payload.text }
            : todo,
        ),
      };

    case "CLEAR_COMPLETED":
      return {
        ...state,
        todos: state.todos.filter((todo) => !todo.completed),
      };

    case "SET_FILTER":
      return {
        ...state,
        filter: action.payload,
      };

    default:
      return state;
  }
};

function TodoAppWithReducer() {
  const [state, dispatch] = useReducer(todoReducer, {
    todos: [],
    filter: "ALL",
  });

  const filteredTodos = state.todos.filter((todo) => {
    if (state.filter === "ACTIVE") return !todo.completed;
    if (state.filter === "COMPLETED") return todo.completed;
    return true;
  });

  return (
    <div>
      <input
        onKeyPress={(e) => {
          if (e.key === "Enter" && e.target.value) {
            dispatch({ type: "ADD_TODO", payload: e.target.value });
            e.target.value = "";
          }
        }}
        placeholder="Add todo..."
      />

      <div>
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "ALL" })}
        >
          All
        </button>
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "ACTIVE" })}
        >
          Active
        </button>
        <button
          onClick={() => dispatch({ type: "SET_FILTER", payload: "COMPLETED" })}
        >
          Completed
        </button>
      </div>

      {filteredTodos.map((todo) => (
        <div key={todo.id}>
          <input
            type="checkbox"
            checked={todo.completed}
            onChange={() => dispatch({ type: "TOGGLE_TODO", payload: todo.id })}
          />
          <span
            style={{ textDecoration: todo.completed ? "line-through" : "none" }}
          >
            {todo.text}
          </span>
          <button
            onClick={() => dispatch({ type: "DELETE_TODO", payload: todo.id })}
          >
            Delete
          </button>
        </div>
      ))}

      <button onClick={() => dispatch({ type: "CLEAR_COMPLETED" })}>
        Clear Completed
      </button>
    </div>
  );
}

// 3. Shopping Cart with Reducer
const cartReducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM": {
      const existingItem = state.items.find(
        (item) => item.id === action.payload.id,
      );

      if (existingItem) {
        return {
          ...state,
          items: state.items.map((item) =>
            item.id === action.payload.id
              ? { ...item, quantity: item.quantity + 1 }
              : item,
          ),
        };
      }

      return {
        ...state,
        items: [...state.items, { ...action.payload, quantity: 1 }],
      };
    }

    case "REMOVE_ITEM":
      return {
        ...state,
        items: state.items.filter((item) => item.id !== action.payload),
      };

    case "UPDATE_QUANTITY":
      return {
        ...state,
        items: state.items.map((item) =>
          item.id === action.payload.id
            ? { ...item, quantity: action.payload.quantity }
            : item,
        ),
      };

    case "APPLY_COUPON":
      return {
        ...state,
        discount: action.payload,
        subtotal: state.subtotal * 0.9, // 10% discount
      };

    case "CALCULATE_TOTALS": {
      const subtotal = state.items.reduce(
        (sum, item) => sum + item.price * item.quantity,
        0,
      );
      const tax = subtotal * 0.1; // 10% tax
      const total = subtotal + tax - (state.discount || 0);

      return {
        ...state,
        subtotal,
        tax,
        total,
      };
    }

    case "CLEAR_CART":
      return {
        items: [],
        subtotal: 0,
        tax: 0,
        discount: 0,
        total: 0,
      };

    default:
      return state;
  }
};

function ShoppingCartWithReducer() {
  const [state, dispatch] = useReducer(cartReducer, {
    items: [],
    subtotal: 0,
    tax: 0,
    discount: 0,
    total: 0,
  });

  useEffect(() => {
    dispatch({ type: "CALCULATE_TOTALS" });
  }, [state.items, state.discount]);

  return (
    <div>
      {state.items.map((item) => (
        <div key={item.id}>
          <h4>{item.name}</h4>
          <p>Price: ${item.price}</p>
          <input
            type="number"
            min="1"
            value={item.quantity}
            onChange={(e) =>
              dispatch({
                type: "UPDATE_QUANTITY",
                payload: { id: item.id, quantity: parseInt(e.target.value) },
              })
            }
          />
          <button
            onClick={() => dispatch({ type: "REMOVE_ITEM", payload: item.id })}
          >
            Remove
          </button>
        </div>
      ))}

      <div className="totals">
        <p>Subtotal: ${state.subtotal.toFixed(2)}</p>
        <p>Tax: ${state.tax.toFixed(2)}</p>
        <p>Discount: ${state.discount.toFixed(2)}</p>
        <p>Total: ${state.total.toFixed(2)}</p>
      </div>

      <button onClick={() => dispatch({ type: "APPLY_COUPON", payload: 10 })}>
        Apply $10 Coupon
      </button>

      <button onClick={() => dispatch({ type: "CLEAR_CART" })}>
        Clear Cart
      </button>
    </div>
  );
}

// 4. Form State with Reducer
const formReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_FIELD":
      return {
        ...state,
        [action.payload.field]: action.payload.value,
        touched: { ...state.touched, [action.payload.field]: true },
      };

    case "VALIDATE_FIELD": {
      const errors = { ...state.errors };

      if (action.payload.value === "") {
        errors[action.payload.field] = `${action.payload.field} is required`;
      } else if (
        action.payload.field === "email" &&
        !/\S+@\S+\.\S+/.test(action.payload.value)
      ) {
        errors[action.payload.field] = "Invalid email format";
      } else if (
        action.payload.field === "password" &&
        action.payload.value.length < 6
      ) {
        errors[action.payload.field] = "Password must be at least 6 characters";
      } else {
        delete errors[action.payload.field];
      }

      return { ...state, errors };
    }

    case "VALIDATE_ALL": {
      const errors = {};

      Object.keys(state).forEach((key) => {
        if (typeof state[key] === "string" && !state[key]) {
          errors[key] = `${key} is required`;
        }
        if (key === "email" && state[key] && !/\S+@\S+\.\S+/.test(state[key])) {
          errors[key] = "Invalid email format";
        }
        if (key === "password" && state[key] && state[key].length < 6) {
          errors[key] = "Password must be at least 6 characters";
        }
      });

      return { ...state, errors };
    }

    case "SUBMIT_START":
      return { ...state, isSubmitting: true, submitError: null };

    case "SUBMIT_SUCCESS":
      return { ...state, isSubmitting: false, isSubmitted: true };

    case "SUBMIT_FAILURE":
      return { ...state, isSubmitting: false, submitError: action.payload };

    case "RESET_FORM":
      return action.payload;

    default:
      return state;
  }
};

function ComplexFormWithReducer() {
  const [state, dispatch] = useReducer(formReducer, {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    bio: "",
    newsletter: false,
    touched: {},
    errors: {},
    isSubmitting: false,
    isSubmitted: false,
    submitError: null,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    dispatch({
      type: "UPDATE_FIELD",
      payload: { field: name, value: fieldValue },
    });

    dispatch({
      type: "VALIDATE_FIELD",
      payload: { field: name, value: fieldValue },
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({ type: "VALIDATE_ALL" });

    if (Object.keys(state.errors).length === 0) {
      dispatch({ type: "SUBMIT_START" });

      try {
        await fetch("/api/register", {
          method: "POST",
          body: JSON.stringify(state),
        });
        dispatch({ type: "SUBMIT_SUCCESS" });
      } catch (error) {
        dispatch({ type: "SUBMIT_FAILURE", payload: error.message });
      }
    }
  };

  if (state.isSubmitted) {
    return <div>Registration successful!</div>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Username:</label>
        <input name="username" value={state.username} onChange={handleChange} />
        {state.touched.username && state.errors.username && (
          <span className="error">{state.errors.username}</span>
        )}
      </div>

      <div>
        <label>Email:</label>
        <input
          name="email"
          type="email"
          value={state.email}
          onChange={handleChange}
        />
        {state.touched.email && state.errors.email && (
          <span className="error">{state.errors.email}</span>
        )}
      </div>

      <div>
        <label>Password:</label>
        <input
          name="password"
          type="password"
          value={state.password}
          onChange={handleChange}
        />
        {state.touched.password && state.errors.password && (
          <span className="error">{state.errors.password}</span>
        )}
      </div>

      <div>
        <label>Bio:</label>
        <textarea name="bio" value={state.bio} onChange={handleChange} />
      </div>

      <div>
        <label>
          <input
            name="newsletter"
            type="checkbox"
            checked={state.newsletter}
            onChange={handleChange}
          />
          Subscribe to newsletter
        </label>
      </div>

      {state.submitError && (
        <div className="error">Error: {state.submitError}</div>
      )}

      <button type="submit" disabled={state.isSubmitting}>
        {state.isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}

// 5. Data Fetching with Reducer
const dataReducer = (state, action) => {
  switch (action.type) {
    case "FETCH_START":
      return { ...state, loading: true, error: null };

    case "FETCH_SUCCESS":
      return {
        ...state,
        loading: false,
        data: action.payload,
        error: null,
        lastUpdated: Date.now(),
      };

    case "FETCH_ERROR":
      return { ...state, loading: false, error: action.payload };

    case "ADD_ITEM":
      return {
        ...state,
        data: [...state.data, action.payload],
      };

    case "UPDATE_ITEM":
      return {
        ...state,
        data: state.data.map((item) =>
          item.id === action.payload.id ? action.payload : item,
        ),
      };

    case "DELETE_ITEM":
      return {
        ...state,
        data: state.data.filter((item) => item.id !== action.payload),
      };

    case "CLEAR_DATA":
      return { ...state, data: [] };

    case "SET_PAGE":
      return { ...state, currentPage: action.payload };

    case "SET_FILTER":
      return { ...state, filter: action.payload };

    default:
      return state;
  }
};

function DataTableWithReducer() {
  const [state, dispatch] = useReducer(dataReducer, {
    data: [],
    loading: false,
    error: null,
    lastUpdated: null,
    currentPage: 1,
    filter: "",
    itemsPerPage: 10,
  });

  const fetchData = async () => {
    dispatch({ type: "FETCH_START" });

    try {
      const response = await fetch("https://api.example.com/items");
      const data = await response.json();
      dispatch({ type: "FETCH_SUCCESS", payload: data });
    } catch (error) {
      dispatch({ type: "FETCH_ERROR", payload: error.message });
    }
  };

  const filteredData = state.data.filter((item) =>
    item.name.toLowerCase().includes(state.filter.toLowerCase()),
  );

  const paginatedData = filteredData.slice(
    (state.currentPage - 1) * state.itemsPerPage,
    state.currentPage * state.itemsPerPage,
  );

  return (
    <div>
      <button onClick={fetchData} disabled={state.loading}>
        {state.loading ? "Loading..." : "Fetch Data"}
      </button>

      <input
        placeholder="Filter..."
        value={state.filter}
        onChange={(e) =>
          dispatch({ type: "SET_FILTER", payload: e.target.value })
        }
      />

      {state.error && <div className="error">{state.error}</div>}

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>
                <button
                  onClick={() =>
                    dispatch({ type: "DELETE_ITEM", payload: item.id })
                  }
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="pagination">
        <button
          onClick={() =>
            dispatch({ type: "SET_PAGE", payload: state.currentPage - 1 })
          }
          disabled={state.currentPage === 1}
        >
          Previous
        </button>
        <span>Page {state.currentPage}</span>
        <button
          onClick={() =>
            dispatch({ type: "SET_PAGE", payload: state.currentPage + 1 })
          }
          disabled={paginatedData.length < state.itemsPerPage}
        >
          Next
        </button>
      </div>

      {state.lastUpdated && (
        <div>Last updated: {new Date(state.lastUpdated).toLocaleString()}</div>
      )}
    </div>
  );
}

// 6. Game State with Reducer
const gameReducer = (state, action) => {
  switch (action.type) {
    case "INIT_GAME":
      return {
        ...state,
        board: Array(9).fill(null),
        currentPlayer: "X",
        winner: null,
        isDraw: false,
        scores: state.scores,
      };

    case "MAKE_MOVE": {
      if (state.board[action.payload] || state.winner) return state;

      const newBoard = [...state.board];
      newBoard[action.payload] = state.currentPlayer;

      const winner = calculateWinner(newBoard);
      const isDraw = !winner && newBoard.every((cell) => cell !== null);

      return {
        ...state,
        board: newBoard,
        currentPlayer: state.currentPlayer === "X" ? "O" : "X",
        winner,
        isDraw,
        scores: winner
          ? {
              ...state.scores,
              [winner]: state.scores[winner] + 1,
            }
          : state.scores,
      };
    }

    case "RESET_GAME":
      return {
        ...state,
        board: Array(9).fill(null),
        currentPlayer: "X",
        winner: null,
        isDraw: false,
      };

    case "RESET_SCORES":
      return {
        ...state,
        scores: { X: 0, O: 0 },
      };

    case "UNDO_MOVE": {
      // Implement undo logic
      return state;
    }

    default:
      return state;
  }
};

function TicTacToeWithReducer() {
  const [state, dispatch] = useReducer(gameReducer, {
    board: Array(9).fill(null),
    currentPlayer: "X",
    winner: null,
    isDraw: false,
    scores: { X: 0, O: 0 },
  });

  const handleClick = (index) => {
    dispatch({ type: "MAKE_MOVE", payload: index });
  };

  const renderSquare = (index) => (
    <button className="square" onClick={() => handleClick(index)}>
      {state.board[index]}
    </button>
  );

  let status;
  if (state.winner) {
    status = `Winner: ${state.winner}`;
  } else if (state.isDraw) {
    status = "Game is a draw!";
  } else {
    status = `Next player: ${state.currentPlayer}`;
  }

  return (
    <div>
      <div className="status">{status}</div>
      <div className="scores">
        <div>X: {state.scores.X}</div>
        <div>O: {state.scores.O}</div>
      </div>
      <div className="board-row">
        {renderSquare(0)}
        {renderSquare(1)}
        {renderSquare(2)}
      </div>
      <div className="board-row">
        {renderSquare(3)}
        {renderSquare(4)}
        {renderSquare(5)}
      </div>
      <div className="board-row">
        {renderSquare(6)}
        {renderSquare(7)}
        {renderSquare(8)}
      </div>
      <button onClick={() => dispatch({ type: "RESET_GAME" })}>New Game</button>
      <button onClick={() => dispatch({ type: "RESET_SCORES" })}>
        Reset Scores
      </button>
    </div>
  );
}

// Helper function for TicTacToe
function calculateWinner(squares) {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8], // rows
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8], // columns
    [0, 4, 8],
    [2, 4, 6], // diagonals
  ];

  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

// 7. Timer with Reducer
const timerReducer = (state, action) => {
  switch (action.type) {
    case "START_TIMER":
      return { ...state, isRunning: true };

    case "PAUSE_TIMER":
      return { ...state, isRunning: false };

    case "RESET_TIMER":
      return { ...state, time: 0, isRunning: false };

    case "TICK":
      return { ...state, time: state.time + 1 };

    case "SET_LAP":
      return { ...state, laps: [...state.laps, state.time] };

    case "RESET_LAPS":
      return { ...state, laps: [] };

    case "SET_INTERVAL":
      return { ...state, interval: action.payload };

    default:
      return state;
  }
};

function StopwatchWithReducer() {
  const [state, dispatch] = useReducer(timerReducer, {
    time: 0,
    isRunning: false,
    laps: [],
    interval: null,
  });

  useEffect(() => {
    if (state.isRunning) {
      const interval = setInterval(() => {
        dispatch({ type: "TICK" });
      }, 1000);

      dispatch({ type: "SET_INTERVAL", payload: interval });

      return () => clearInterval(interval);
    } else if (state.interval) {
      clearInterval(state.interval);
      dispatch({ type: "SET_INTERVAL", payload: null });
    }
  }, [state.isRunning]);

  const formatTime = (seconds) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return `${hrs.toString().padStart(2, "0")}:${mins
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <div className="timer">{formatTime(state.time)}</div>

      <button
        onClick={() => dispatch({ type: "START_TIMER" })}
        disabled={state.isRunning}
      >
        Start
      </button>
      <button
        onClick={() => dispatch({ type: "PAUSE_TIMER" })}
        disabled={!state.isRunning}
      >
        Pause
      </button>
      <button onClick={() => dispatch({ type: "RESET_TIMER" })}>Reset</button>
      <button
        onClick={() => dispatch({ type: "SET_LAP" })}
        disabled={!state.isRunning}
      >
        Lap
      </button>

      {state.laps.length > 0 && (
        <div className="laps">
          <h3>Laps</h3>
          <button onClick={() => dispatch({ type: "RESET_LAPS" })}>
            Clear Laps
          </button>
          <ul>
            {state.laps.map((lap, index) => (
              <li key={index}>
                Lap {index + 1}: {formatTime(lap)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// 8. Pagination with Reducer
const paginationReducer = (state, action) => {
  switch (action.type) {
    case "SET_DATA":
      return {
        ...state,
        data: action.payload,
        totalPages: Math.ceil(action.payload.length / state.itemsPerPage),
      };

    case "SET_PAGE":
      return { ...state, currentPage: action.payload };

    case "NEXT_PAGE":
      return {
        ...state,
        currentPage: Math.min(state.currentPage + 1, state.totalPages),
      };

    case "PREV_PAGE":
      return {
        ...state,
        currentPage: Math.max(state.currentPage - 1, 1),
      };

    case "SET_ITEMS_PER_PAGE":
      return {
        ...state,
        itemsPerPage: action.payload,
        totalPages: Math.ceil(state.data.length / action.payload),
        currentPage: 1,
      };

    case "SET_FILTER":
      return { ...state, filter: action.payload, currentPage: 1 };

    case "SET_SORT":
      return { ...state, sortBy: action.payload, currentPage: 1 };

    default:
      return state;
  }
};

function PaginatedListWithReducer() {
  const [state, dispatch] = useReducer(paginationReducer, {
    data: [],
    currentPage: 1,
    itemsPerPage: 10,
    totalPages: 1,
    filter: "",
    sortBy: null,
  });

  const filteredData = useMemo(() => {
    let filtered = state.data;

    if (state.filter) {
      filtered = filtered.filter((item) =>
        item.name.toLowerCase().includes(state.filter.toLowerCase()),
      );
    }

    if (state.sortBy) {
      filtered = [...filtered].sort((a, b) => {
        if (a[state.sortBy] < b[state.sortBy]) return -1;
        if (a[state.sortBy] > b[state.sortBy]) return 1;
        return 0;
      });
    }

    return filtered;
  }, [state.data, state.filter, state.sortBy]);

  const paginatedData = filteredData.slice(
    (state.currentPage - 1) * state.itemsPerPage,
    state.currentPage * state.itemsPerPage,
  );

  return (
    <div>
      <input
        placeholder="Filter..."
        value={state.filter}
        onChange={(e) =>
          dispatch({ type: "SET_FILTER", payload: e.target.value })
        }
      />

      <select
        value={state.itemsPerPage}
        onChange={(e) =>
          dispatch({
            type: "SET_ITEMS_PER_PAGE",
            payload: parseInt(e.target.value),
          })
        }
      >
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select>

      <select
        value={state.sortBy || ""}
        onChange={(e) =>
          dispatch({ type: "SET_SORT", payload: e.target.value || null })
        }
      >
        <option value="">No sorting</option>
        <option value="name">Sort by name</option>
        <option value="id">Sort by ID</option>
      </select>

      <ul>
        {paginatedData.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>

      <div>
        <button
          onClick={() => dispatch({ type: "PREV_PAGE" })}
          disabled={state.currentPage === 1}
        >
          Previous
        </button>

        <span>
          Page {state.currentPage} of{" "}
          {Math.ceil(filteredData.length / state.itemsPerPage)}
        </span>

        <button
          onClick={() => dispatch({ type: "NEXT_PAGE" })}
          disabled={
            state.currentPage ===
            Math.ceil(filteredData.length / state.itemsPerPage)
          }
        >
          Next
        </button>
      </div>
    </div>
  );
}

// 9. Quiz with Reducer
const quizReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_QUESTIONS":
      return {
        ...state,
        questions: action.payload,
        currentQuestionIndex: 0,
        answers: Array(action.payload.length).fill(null),
      };

    case "ANSWER_QUESTION": {
      const newAnswers = [...state.answers];
      newAnswers[state.currentQuestionIndex] = action.payload;

      return {
        ...state,
        answers: newAnswers,
      };
    }

    case "NEXT_QUESTION":
      return {
        ...state,
        currentQuestionIndex: Math.min(
          state.currentQuestionIndex + 1,
          state.questions.length - 1,
        ),
      };

    case "PREV_QUESTION":
      return {
        ...state,
        currentQuestionIndex: Math.max(state.currentQuestionIndex - 1, 0),
      };

    case "SUBMIT_QUIZ": {
      const score = state.questions.reduce((acc, question, index) => {
        return acc + (question.correctAnswer === state.answers[index] ? 1 : 0);
      }, 0);

      return {
        ...state,
        submitted: true,
        score,
      };
    }

    case "RESET_QUIZ":
      return {
        ...state,
        currentQuestionIndex: 0,
        answers: Array(state.questions.length).fill(null),
        submitted: false,
        score: 0,
      };

    default:
      return state;
  }
};

function QuizWithReducer() {
  const [state, dispatch] = useReducer(quizReducer, {
    questions: [],
    currentQuestionIndex: 0,
    answers: [],
    submitted: false,
    score: 0,
  });

  useEffect(() => {
    // Load questions
    const questions = [
      {
        id: 1,
        text: "What is React?",
        options: ["Library", "Framework", "Language", "Database"],
        correctAnswer: 0,
      },
      {
        id: 2,
        text: "What is JSX?",
        options: ["JavaScript XML", "Java XML", "JSON XML", "None"],
        correctAnswer: 0,
      },
    ];

    dispatch({ type: "LOAD_QUESTIONS", payload: questions });
  }, []);

  if (state.questions.length === 0) {
    return <div>Loading...</div>;
  }

  if (state.submitted) {
    return (
      <div>
        <h2>Quiz Completed!</h2>
        <p>
          Your score: {state.score} / {state.questions.length}
        </p>
        <button onClick={() => dispatch({ type: "RESET_QUIZ" })}>
          Retake Quiz
        </button>
      </div>
    );
  }

  const currentQuestion = state.questions[state.currentQuestionIndex];
  const selectedAnswer = state.answers[state.currentQuestionIndex];

  return (
    <div>
      <div>
        Question {state.currentQuestionIndex + 1} of {state.questions.length}
      </div>

      <h3>{currentQuestion.text}</h3>

      <div>
        {currentQuestion.options.map((option, index) => (
          <div key={index}>
            <label>
              <input
                type="radio"
                name="answer"
                checked={selectedAnswer === index}
                onChange={() =>
                  dispatch({
                    type: "ANSWER_QUESTION",
                    payload: index,
                  })
                }
              />
              {option}
            </label>
          </div>
        ))}
      </div>

      <div>
        <button
          onClick={() => dispatch({ type: "PREV_QUESTION" })}
          disabled={state.currentQuestionIndex === 0}
        >
          Previous
        </button>

        <button
          onClick={() => dispatch({ type: "NEXT_QUESTION" })}
          disabled={state.currentQuestionIndex === state.questions.length - 1}
        >
          Next
        </button>

        {state.currentQuestionIndex === state.questions.length - 1 && (
          <button
            onClick={() => dispatch({ type: "SUBMIT_QUIZ" })}
            disabled={state.answers.includes(null)}
          >
            Submit
          </button>
        )}
      </div>
    </div>
  );
}

// 10. Undo/Redo with Reducer
const historyReducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_HISTORY":
      return {
        ...state,
        past: [...state.past, state.present],
        present: action.payload,
        future: [],
      };

    case "UNDO":
      if (state.past.length === 0) return state;

      const previous = state.past[state.past.length - 1];
      const newPast = state.past.slice(0, -1);

      return {
        past: newPast,
        present: previous,
        future: [state.present, ...state.future],
      };

    case "REDO":
      if (state.future.length === 0) return state;

      const next = state.future[0];
      const newFuture = state.future.slice(1);

      return {
        past: [...state.past, state.present],
        present: next,
        future: newFuture,
      };

    case "CLEAR_HISTORY":
      return {
        past: [],
        present: state.present,
        future: [],
      };

    default:
      return state;
  }
};

function DrawingAppWithUndoRedo() {
  const [state, dispatch] = useReducer(historyReducer, {
    past: [],
    present: { color: "#000000", lines: [] },
    future: [],
  });

  const addLine = (line) => {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        ...state.present,
        lines: [...state.present.lines, line],
      },
    });
  };

  const changeColor = (color) => {
    dispatch({
      type: "ADD_TO_HISTORY",
      payload: {
        ...state.present,
        color,
      },
    });
  };

  return (
    <div>
      <div>
        <button
          onClick={() => dispatch({ type: "UNDO" })}
          disabled={state.past.length === 0}
        >
          Undo
        </button>
        <button
          onClick={() => dispatch({ type: "REDO" })}
          disabled={state.future.length === 0}
        >
          Redo
        </button>
        <button onClick={() => dispatch({ type: "CLEAR_HISTORY" })}>
          Clear History
        </button>
      </div>

      <input
        type="color"
        value={state.present.color}
        onChange={(e) => changeColor(e.target.value)}
      />

      <Canvas
        color={state.present.color}
        lines={state.present.lines}
        onDraw={addLine}
      />

      <div>History: {state.past.length} undo steps available</div>
    </div>
  );
}
```

I've provided 10 detailed useReducer scenarios with complete implementations. Each scenario demonstrates different aspects of useReducer including:

1. Basic counter
2. Todo list with multiple actions
3. Shopping cart with calculations
4. Complex form with validation
5. Data fetching with pagination
6. Game state (TicTacToe)
7. Timer with laps
8. Advanced pagination with filters
9. Quiz application
10. Undo/Redo functionality

Would you like me to continue with:

- **useCallback Hook** (25+ scenarios)
- **useMemo Hook** (25+ scenarios)
- **useRef Hook** (25+ scenarios)
- **useImperativeHandle Hook** (25+ scenarios)
- **useLayoutEffect Hook** (25+ scenarios)
- **useDebugValue Hook** (25+ scenarios)
- **Custom Hooks** (25+ scenarios)

Please let me know if you want me to continue with the remaining hooks or if you'd like more scenarios for any specific hook!

<!---------------------








 ------------------>

# **CONTINUING WITH ALL REMAINING REACT HOOKS - 25+ SCENARIOS EACH**

## **5. useCallback Hook - 25+ Scenarios**

```jsx
// 1. Preventing Unnecessary Re-renders in Child Components
const ChildButton = React.memo(({ onClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return <button onClick={onClick}>{label}</button>;
});

function ParentComponent() {
  const [count, setCount] = useState(0);
  const [otherState, setOtherState] = useState(0);

  const handleIncrement = useCallback(() => {
    setCount(c => c + 1);
  }, []); // Empty dependency - function never changes

  const handleDecrement = useCallback(() => {
    setCount(c => c - 1);
  }, []);

  const handleOtherUpdate = useCallback(() => {
    setOtherState(s => s + 1);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <ChildButton onClick={handleIncrement} label="Increment" />
      <ChildButton onClick={handleDecrement} label="Decrement" />
      <ChildButton onClick={handleOtherUpdate} label="Update Other" />
    </div>
  );
}

// 2. Event Handlers with Dependencies
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const [debouncedTerm, setDebouncedTerm] = useState('');

  const performSearch = useCallback(async (term) => {
    const response = await fetch(`/api/search?q=${term}`);
    const data = await response.json();
    setResults(data);
  }, []); // Stable function reference

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedTerm(searchTerm);
    }, 500);

    return () => clearTimeout(timer);
  }, [searchTerm]);

  useEffect(() => {
    if (debouncedTerm) {
      performSearch(debouncedTerm);
    }
  }, [debouncedTerm, performSearch]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

// 3. Form Validation with useCallback
function FormWithValidation() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'username':
        return value.length < 3 ? 'Username too short' : '';
      case 'email':
        return !/\S+@\S+\.\S+/.test(value) ? 'Invalid email' : '';
      case 'password':
        return value.length < 6 ? 'Password too short' : '';
      default:
        return '';
    }
  }, []);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));

    const error = validateField(name, value);
    setErrors(prev => ({ ...prev, [name]: error }));
  }, [validateField]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    } else {
      setErrors(newErrors);
    }
  }, [formData, validateField]);

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="username"
        value={formData.username}
        onChange={handleChange}
      />
      {errors.username && <span>{errors.username}</span>}

      <input
        name="email"
        value={.formData.email}
        onChange={handleChange}
      />
      {errors.email && <span>{errors.email}</span>}

      <input
        type="password"
        name="password"
        value={formData.password}
        onChange={handleChange}
      />
      {errors.password && <span>{errors.password}</span>}

      <button type="submit">Submit</button>
    </form>
  );
}

// 4. Drag and Drop Handlers
function DragAndDropList() {
  const [items, setItems] = useState(['Item 1', 'Item 2', 'Item 3', 'Item 4']);
  const [draggedItem, setDraggedItem] = useState(null);

  const handleDragStart = useCallback((index) => {
    setDraggedItem(index);
  }, []);

  const handleDragOver = useCallback((e) => {
    e.preventDefault();
  }, []);

  const handleDrop = useCallback((dropIndex) => {
    if (draggedItem === null) return;

    const newItems = [...items];
    const [removed] = newItems.splice(draggedItem, 1);
    newItems.splice(dropIndex, 0, removed);

    setItems(newItems);
    setDraggedItem(null);
  }, [draggedItem, items]);

  const handleDragEnd = useCallback(() => {
    setDraggedItem(null);
  }, []);

  return (
    <div>
      {items.map((item, index) => (
        <div
          key={item}
          draggable
          onDragStart={() => handleDragStart(index)}
          onDragOver={handleDragOver}
          onDrop={() => handleDrop(index)}
          onDragEnd={handleDragEnd}
          style={{
            padding: '8px',
            margin: '4px',
            backgroundColor: draggedItem === index ? '#lightblue' : 'white',
            border: '1px solid black',
            cursor: 'move'
          }}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

// 5. Animation Frame with useCallback
function SmoothScrolling() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);

  const smoothScroll = useCallback((targetY) => {
    setIsScrolling(true);
    const startY = window.scrollY;
    const distance = targetY - startY;
    const duration = 1000;
    let startTime = null;

    const animation = (currentTime) => {
      if (!startTime) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const progress = Math.min(timeElapsed / duration, 1);

      // Easing function
      const easeProgress = 1 - Math.pow(1 - progress, 3);

      window.scrollTo(0, startY + (distance * easeProgress));

      if (timeElapsed < duration) {
        requestAnimationFrame(animation);
      } else {
        setIsScrolling(false);
      }
    };

    requestAnimationFrame(animation);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      <button
        onClick={() => smoothScroll(0)}
        disabled={isScrolling}
      >
        Scroll to Top
      </button>
      <button
        onClick={() => smoothScroll(document.body.scrollHeight)}
        disabled={isScrolling}
      >
        Scroll to Bottom
      </button>
      <div>Current scroll: {scrollY}px</div>
    </div>
  );
}

// 6. Debounced Search with useCallback
function DebouncedSearchWithCallback() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const [isSearching, setIsSearching] = useState(false);

  const searchAPI = useCallback(async (searchQuery) => {
    setIsSearching(true);
    try {
      const response = await fetch(`/api/search?q=${searchQuery}`);
      const data = await response.json();
      setResults(data);
    } finally {
      setIsSearching(false);
    }
  }, []);

  const debouncedSearch = useCallback(
    debounce((searchQuery) => {
      searchAPI(searchQuery);
    }, 500),
    [searchAPI]
  );

  const handleInputChange = useCallback((e) => {
    const value = e.target.value;
    setQuery(value);

    if (value.length > 2) {
      debouncedSearch(value);
    } else {
      setResults([]);
    }
  }, [debouncedSearch]);

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={handleInputChange}
        placeholder="Search..."
      />
      {isSearching && <div>Searching...</div>}
      <ul>
        {results.map(result => (
          <li key={result.id}>{result.name}</li>
        ))}
      </ul>
    </div>
  );
}

// Debounce utility
function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// 7. Throttled Scroll Handler
function ThrottledScrollHandler() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isNearBottom, setIsNearBottom] = useState(false);

  const checkScrollPosition = useCallback(() => {
    const position = window.scrollY;
    setScrollPosition(position);

    const bottom = document.documentElement.scrollHeight - window.innerHeight;
    setIsNearBottom(position > bottom - 200);
  }, []);

  const throttledScrollHandler = useCallback(
    throttle(checkScrollPosition, 100),
    [checkScrollPosition]
  );

  useEffect(() => {
    window.addEventListener('scroll', throttledScrollHandler);
    return () => window.removeEventListener('scroll', throttledScrollHandler);
  }, [throttledScrollHandler]);

  return (
    <div>
      <div>Scroll Y: {scrollPosition}px</div>
      {isNearBottom && <div>You're near the bottom!</div>}
    </div>
  );
}

// Throttle utility
function throttle(func, limit) {
  let inThrottle;
  return function(...args) {
    if (!inThrottle) {
      func.apply(this, args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// 8. Local Storage Sync with useCallback
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setValue = useCallback((value) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  }, [key, storedValue]);

  const removeValue = useCallback(() => {
    try {
      window.localStorage.removeItem(key);
      setStoredValue(initialValue);
    } catch (error) {
      console.log(error);
    }
  }, [key, initialValue]);

  return [storedValue, setValue, removeValue];
}

// 9. WebSocket Message Handler
function useWebSocket(url) {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);

  const connect = useCallback(() => {
    const ws = new WebSocket(url);

    ws.onopen = () => setIsConnected(true);
    ws.onclose = () => setIsConnected(false);

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      setMessages(prev => [...prev, data]);
    };

    setSocket(ws);

    return () => ws.close();
  }, [url]);

  const sendMessage = useCallback((message) => {
    if (socket && isConnected) {
      socket.send(JSON.stringify(message));
    }
  }, [socket, isConnected]);

  const disconnect = useCallback(() => {
    if (socket) {
      socket.close();
      setSocket(null);
    }
  }, [socket]);

  return { messages, isConnected, connect, sendMessage, disconnect };
}

// 10. Memoized Event Handlers for List Items
const MemoizedListItem = React.memo(({ item, onToggle, onDelete, onEdit }) => {
  console.log(`Rendering item: ${item.id}`);
  return (
    <div className="list-item">
      <input
        type="checkbox"
        checked={item.completed}
        onChange={() => onToggle(item.id)}
      />
      <span style={{ textDecoration: item.completed ? 'line-through' : 'none' }}>
        {item.text}
      </span>
      <button onClick={() => onEdit(item.id)}>Edit</button>
      <button onClick={() => onDelete(item.id)}>Delete</button>
    </div>
  );
});

function OptimizedTodoList() {
  const [items, setItems] = useState([
    { id: 1, text: 'Learn React', completed: false },
    { id: 2, text: 'Build app', completed: false },
    { id: 3, text: 'Deploy', completed: false }
  ]);
  const [filter, setFilter] = useState('all');

  const handleToggle = useCallback((id) => {
    setItems(prev => prev.map(item =>
      item.id === id ? { ...item, completed: !item.completed } : item
    ));
  }, []);

  const handleDelete = useCallback((id) => {
    setItems(prev => prev.filter(item => item.id !== id));
  }, []);

  const handleEdit = useCallback((id) => {
    const newText = prompt('Enter new text:');
    if (newText) {
      setItems(prev => prev.map(item =>
        item.id === id ? { ...item, text: newText } : item
      ));
    }
  }, []);

  const filteredItems = useMemo(() => {
    switch (filter) {
      case 'active':
        return items.filter(item => !item.completed);
      case 'completed':
        return items.filter(item => item.completed);
      default:
        return items;
    }
  }, [items, filter]);

  return (
    <div>
      <div>
        <button onClick={() => setFilter('all')}>All</button>
        <button onClick={() => setFilter('active')}>Active</button>
        <button onClick={() => setFilter('completed')}>Completed</button>
      </div>

      {filteredItems.map(item => (
        <MemoizedListItem
          key={item.id}
          item={item}
          onToggle={handleToggle}
          onDelete={handleDelete}
          onEdit={handleEdit}
        />
      ))}
    </div>
  );
}

// 11. Keyboard Shortcuts Handler
function useKeyboardShortcuts() {
  const [shortcuts, setShortcuts] = useState({});

  const registerShortcut = useCallback((key, callback, description) => {
    setShortcuts(prev => ({
      ...prev,
      [key]: { callback, description }
    }));
  }, []);

  const unregisterShortcut = useCallback((key) => {
    setShortcuts(prev => {
      const newShortcuts = { ...prev };
      delete newShortcuts[key];
      return newShortcuts;
    });
  }, []);

  const handleKeyDown = useCallback((e) => {
    const key = e.key.toLowerCase();
    const ctrlKey = e.ctrlKey || e.metaKey;

    Object.entries(shortcuts).forEach(([shortcut, { callback }]) => {
      const [modifier, ...keys] = shortcut.split('+');
      const shortcutKey = keys.join('+');

      if (modifier === 'ctrl' && ctrlKey && shortcutKey === key) {
        e.preventDefault();
        callback();
      } else if (!modifier && key === shortcut) {
        callback();
      }
    });
  }, [shortcuts]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return { registerShortcut, unregisterShortcut };
}

// 12. Pagination with Memoized Handlers
function PaginatedComponent() {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const totalPages = 20;

  const goToPage = useCallback((page) => {
    setCurrentPage(Math.max(1, Math.min(page, totalPages)));
  }, [totalPages]);

  const nextPage = useCallback(() => {
    setCurrentPage(prev => Math.min(prev + 1, totalPages));
  }, [totalPages]);

  const prevPage = useCallback(() => {
    setCurrentPage(prev => Math.max(prev - 1, 1));
  }, []);

  const firstPage = useCallback(() => {
    setCurrentPage(1);
  }, []);

  const lastPage = useCallback(() => {
    setCurrentPage(totalPages);
  }, [totalPages]);

  const changeItemsPerPage = useCallback((e) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset to first page when changing items per page
  }, []);

  const getPageNumbers = useCallback(() => {
    const delta = 2;
    const range = [];
    const rangeWithDots = [];
    let l;

    for (let i = 1; i <= totalPages; i++) {
      if (i === 1 || i === totalPages || (i >= currentPage - delta && i <= currentPage + delta)) {
        range.push(i);
      }
    }

    range.forEach(i => {
      if (l) {
        if (i - l === 2) {
          rangeWithDots.push(l + 1);
        } else if (i - l !== 1) {
          rangeWithDots.push('...');
        }
      }
      rangeWithDots.push(i);
      l = i;
    });

    return rangeWithDots;
  }, [currentPage, totalPages]);

  return (
    <div>
      <select value={itemsPerPage} onChange={changeItemsPerPage}>
        <option value={5}>5 per page</option>
        <option value={10}>10 per page</option>
        <option value={20}>20 per page</option>
        <option value={50}>50 per page</option>
      </select>

      <div className="pagination">
        <button onClick={firstPage} disabled={currentPage === 1}>
          First
        </button>
        <button onClick={prevPage} disabled={currentPage === 1}>
          Previous
        </button>

        {getPageNumbers().map((page, index) => (
          <button
            key={index}
            onClick={() => typeof page === 'number' && goToPage(page)}
            className={currentPage === page ? 'active' : ''}
            disabled={page === '...'}
          >
            {page}
          </button>
        ))}

        <button onClick={nextPage} disabled={currentPage === totalPages}>
          Next
        </button>
        <button onClick={lastPage} disabled={currentPage === totalPages}>
          Last
        </button>
      </div>

      <div>Page {currentPage} of {totalPages}</div>
    </div>
  );
}

// 13. File Upload Handler
function FileUploadWithCallback() {
  const [files, setFiles] = useState([]);
  const [uploadProgress, setUploadProgress] = useState({});
  const [isUploading, setIsUploading] = useState(false);

  const handleFileSelect = useCallback((e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles(prev => [...prev, ...selectedFiles]);
  }, []);

  const removeFile = useCallback((index) => {
    setFiles(prev => prev.filter((_, i) => i !== index));
  }, []);

  const uploadFile = useCallback(async (file, index) => {
    const formData = new FormData();
    formData.append('file', file);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
        onUploadProgress: (progressEvent) => {
          const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
          setUploadProgress(prev => ({
            ...prev,
            [index]: percentCompleted
          }));
        }
      });

      if (response.ok) {
        console.log(`File ${file.name} uploaded successfully`);
      }
    } catch (error) {
      console.error(`Error uploading ${file.name}:`, error);
    }
  }, []);

  const uploadAllFiles = useCallback(async () => {
    setIsUploading(true);
    await Promise.all(files.map((file, index) => uploadFile(file, index)));
    setIsUploading(false);
  }, [files, uploadFile]);

  return (
    <div>
      <input
        type="file"
        multiple
        onChange={handleFileSelect}
        disabled={isUploading}
      />

      <ul>
        {files.map((file, index) => (
          <li key={index}>
            {file.name} - {(file.size / 1024).toFixed(2)} KB
            {uploadProgress[index] && (
              <progress value={uploadProgress[index]} max="100" />
            )}
            <button onClick={() => removeFile(index)} disabled={isUploading}>
              Remove
            </button>
          </li>
        ))}
      </ul>

      {files.length > 0 && (
        <button onClick={uploadAllFiles} disabled={isUploading}>
          {isUploading ? 'Uploading...' : 'Upload All Files'}
        </button>
      )}
    </div>
  );
}

// 14. Resize Observer Handler
function useResizeObserver() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [element, setElement] = useState(null);

  const ref = useCallback((node) => {
    if (node) {
      setElement(node);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const resizeObserver = new ResizeObserver((entries) => {
      entries.forEach(entry => {
        setDimensions({
          width: entry.contentRect.width,
          height: entry.contentRect.height
        });
      });
    });

    resizeObserver.observe(element);

    return () => resizeObserver.disconnect();
  }, [element]);

  return [ref, dimensions];
}

// 15. Intersection Observer Handler
function useIntersectionObserver(options = {}) {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [element, setElement] = useState(null);

  const ref = useCallback((node) => {
    if (node) {
      setElement(node);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    observer.observe(element);

    return () => observer.unobserve(element);
  }, [element, options]);

  return [ref, isIntersecting];
}

// Lazy loading image component
function LazyImage({ src, alt, ...props }) {
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '50px'
  });

  return (
    <img
      ref={ref}
      src={isIntersecting ? src : ''}
      alt={alt}
      {...props}
    />
  );
}

// 16. Mutation Observer Handler
function useMutationObserver(callback, options = {}) {
  const [element, setElement] = useState(null);

  const ref = useCallback((node) => {
    if (node) {
      setElement(node);
    }
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new MutationObserver((mutations) => {
      callback(mutations);
    });

    observer.observe(element, {
      childList: true,
      attributes: true,
      subtree: true,
      ...options
    });

    return () => observer.disconnect();
  }, [element, callback, options]);

  return ref;
}

// Component that observes changes
function EditableDiv() {
  const [content, setContent] = useState('Edit me!');
  const [changes, setChanges] = useState([]);

  const handleMutation = useCallback((mutations) => {
    mutations.forEach(mutation => {
      setChanges(prev => [
        ...prev,
        {
          type: mutation.type,
          timestamp: new Date().toISOString(),
          target: mutation.target.textContent
        }
      ]);
    });
  }, []);

  const ref = useMutationObserver(handleMutation, {
    childList: true,
    characterData: true,
    subtree: true
  });

  return (
    <div>
      <div
        ref={ref}
        contentEditable
        onBlur={(e) => setContent(e.target.textContent)}
        style={{ border: '1px solid black', padding: '8px', minHeight: '50px' }}
      >
        {content}
      </div>

      <div>
        <h4>Change History:</h4>
        <ul>
          {changes.map((change, index) => (
            <li key={index}>
              {change.type} at {change.timestamp}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

// 17. Media Query Handler
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  const handleChange = useCallback((e) => {
    setMatches(e.matches);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia(query);
    setMatches(mediaQuery.matches);

    mediaQuery.addEventListener('change', handleChange);
    return () => mediaQuery.removeEventListener('change', handleChange);
  }, [query, handleChange]);

  return matches;
}

// Responsive component using media query
function ResponsiveComponent() {
  const isMobile = useMediaQuery('(max-width: 768px)');
  const isTablet = useMediaQuery('(min-width: 769px) and (max-width: 1024px)');
  const isDesktop = useMediaQuery('(min-width: 1025px)');

  return (
    <div>
      {isMobile && <MobileView />}
      {isTablet && <TabletView />}
      {isDesktop && <DesktopView />}
    </div>
  );
}

// 18. Clipboard Handler
function useClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const copyToClipboard = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError('Failed to copy text');
      console.error(err);
    }
  }, []);

  const readFromClipboard = useCallback(async () => {
    try {
      const text = await navigator.clipboard.readText();
      return text;
    } catch (err) {
      setError('Failed to read from clipboard');
      console.error(err);
      return null;
    }
  }, []);

  return { copied, error, copyToClipboard, readFromClipboard };
}

function CopyableText({ text }) {
  const { copied, error, copyToClipboard } = useClipboard();

  return (
    <div>
      <span>{text}</span>
      <button onClick={() => copyToClipboard(text)}>
        {copied ? 'Copied!' : 'Copy'}
      </button>
      {error && <span style={{ color: 'red' }}>{error}</span>}
    </div>
  );
}

// 19. Geolocation Handler
function useGeolocation(options = {}) {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getCurrentPosition = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }

    setLoading(true);
    setError(null);

    navigator.geolocation.getCurrentPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
      options
    );
  }, [options]);

  const watchPosition = useCallback(() => {
    if (!navigator.geolocation) {
      setError('Geolocation not supported');
      return;
    }

    const watchId = navigator.geolocation.watchPosition(
      (position) => {
        setLocation({
          lat: position.coords.latitude,
          lng: position.coords.longitude,
          accuracy: position.coords.accuracy,
          timestamp: position.timestamp
        });
        setError(null);
      },
      (err) => {
        setError(err.message);
      },
      options
    );

    return () => navigator.geolocation.clearWatch(watchId);
  }, [options]);

  return { location, error, loading, getCurrentPosition, watchPosition };
}

function LocationTracker() {
  const { location, error, loading, getCurrentPosition } = useGeolocation();

  return (
    <div>
      <button onClick={getCurrentPosition} disabled={loading}>
        {loading ? 'Getting location...' : 'Get My Location'}
      </button>

      {error && <div style={{ color: 'red' }}>Error: {error}</div>}

      {location && (
        <div>
          <div>Latitude: {location.lat}</div>
          <div>Longitude: {location.lng}</div>
          <div>Accuracy: ±{location.accuracy}m</div>
          <div>Time: {new Date(location.timestamp).toLocaleString()}</div>
        </div>
      )}
    </div>
  );
}

// 20. Battery Status Handler
function useBatteryStatus() {
  const [battery, setBattery] = useState(null);
  const [error, setError] = useState(null);

  const updateBattery = useCallback((batteryManager) => {
    setBattery({
      level: batteryManager.level * 100,
      charging: batteryManager.charging,
      chargingTime: batteryManager.chargingTime,
      dischargingTime: batteryManager.dischargingTime
    });
  }, []);

  useEffect(() => {
    if ('getBattery' in navigator) {
      navigator.getBattery().then(batteryManager => {
        updateBattery(batteryManager);

        batteryManager.addEventListener('levelchange', () => updateBattery(batteryManager));
        batteryManager.addEventListener('chargingchange', () => updateBattery(batteryManager));
        batteryManager.addEventListener('chargingtimechange', () => updateBattery(batteryManager));
        batteryManager.addEventListener('dischargingtimechange', () => updateBattery(batteryManager));
      });
    } else {
      setError('Battery API not supported');
    }
  }, [updateBattery]);

  return { battery, error };
}

function BatteryIndicator() {
  const { battery, error } = useBatteryStatus();

  if (error) return <div>{error}</div>;
  if (!battery) return <div>Loading battery info...</div>;

  return (
    <div className="battery-indicator">
      <div className="battery-level" style={{ width: `${battery.level}%` }} />
      <div>Battery: {battery.level}%</div>
      <div>Status: {battery.charging ? '⚡ Charging' : '🔋 Discharging'}</div>
      {battery.chargingTime < Infinity && (
        <div>Time to full: {Math.round(battery.chargingTime / 60)} minutes</div>
      )}
    </div>
  );
}

// 21. Network Information Handler
function useNetworkInfo() {
  const [network, setNetwork] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  const updateNetworkInfo = useCallback(() => {
    if ('connection' in navigator) {
      const connection = navigator.connection;
      setNetwork({
        effectiveType: connection.effectiveType,
        downlink: connection.downlink,
        rtt: connection.rtt,
        saveData: connection.saveData,
        type: connection.type
      });
    }
  }, []);

  useEffect(() => {
    updateNetworkInfo();

    const handleOnline = () => setIsOnline(true);
    const handleOffline = () => setIsOnline(false);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    if ('connection' in navigator) {
      navigator.connection.addEventListener('change', updateNetworkInfo);
    }

    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);

      if ('connection' in navigator) {
        navigator.connection.removeEventListener('change', updateNetworkInfo);
      }
    };
  }, [updateNetworkInfo]);

  return { network, isOnline };
}

function NetworkStatus() {
  const { network, isOnline } = useNetworkInfo();

  return (
    <div className="network-info">
      <div>Status: {isOnline ? '🟢 Online' : '🔴 Offline'}</div>
      {network && (
        <>
          <div>Connection: {network.effectiveType}</div>
          <div>Speed: {network.downlink} Mbps</div>
          <div>Latency: {network.rtt} ms</div>
          <div>Save Data: {network.saveData ? 'Yes' : 'No'}</div>
        </>
      )}
    </div>
  );
}

// 22. Device Orientation Handler
function useDeviceOrientation() {
  const [orientation, setOrientation] = useState({
    alpha: 0,
    beta: 0,
    gamma: 0,
    absolute: false
  });

  const [permission, setPermission] = useState(null);

  const requestPermission = useCallback(async () => {
    if (typeof DeviceOrientationEvent.requestPermission === 'function') {
      try {
        const response = await DeviceOrientationEvent.requestPermission();
        setPermission(response);
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  const handleOrientation = useCallback((event) => {
    setOrientation({
      alpha: event.alpha,
      beta: event.beta,
      gamma: event.gamma,
      absolute: event.absolute
    });
  }, []);

  useEffect(() => {
    if (
      typeof DeviceOrientationEvent.requestPermission === 'function' &&
      permission !== 'granted'
    ) {
      return;
    }

    window.addEventListener('deviceorientation', handleOrientation);
    return () => window.removeEventListener('deviceorientation', handleOrientation);
  }, [permission, handleOrientation]);

  return { orientation, permission, requestPermission };
}

function OrientationVisualizer() {
  const { orientation, permission, requestPermission } = useDeviceOrientation();

  if (typeof DeviceOrientationEvent.requestPermission === 'function' && permission !== 'granted') {
    return <button onClick={requestPermission}>Allow Orientation Access</button>;
  }

  return (
    <div>
      <div>Alpha (Z-axis): {orientation.alpha?.toFixed(2)}°</div>
      <div>Beta (X-axis): {orientation.beta?.toFixed(2)}°</div>
      <div>Gamma (Y-axis): {orientation.gamma?.toFixed(2)}°</div>

      <div
        style={{
          width: '100px',
          height: '100px',
          backgroundColor: 'blue',
          transform: `rotateX(${orientation.beta}deg) rotateY(${orientation.gamma}deg)`,
          transition: 'transform 0.1s'
        }}
      />
    </div>
  );
}

// 23. Vibration Handler
function useVibration() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported('vibrate' in navigator);
  }, []);

  const vibrate = useCallback((pattern) => {
    if (supported) {
      navigator.vibrate(pattern);
    }
  }, [supported]);

  const stopVibration = useCallback(() => {
    if (supported) {
      navigator.vibrate(0);
    }
  }, [supported]);

  return { supported, vibrate, stopVibration };
}

function VibrationControls() {
  const { supported, vibrate, stopVibration } = useVibration();

  if (!supported) {
    return <div>Vibration not supported on this device</div>;
  }

  return (
    <div>
      <button onClick={() => vibrate(200)}>Short Vibration</button>
      <button onClick={() => vibrate([200, 100, 200])}>Pattern Vibration</button>
      <button onClick={stopVibration}>Stop</button>
    </div>
  );
}

// 24. Speech Synthesis Handler
function useSpeechSynthesis() {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    if ('speechSynthesis' in window) {
      setSupported(true);

      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0) {
          setSelectedVoice(availableVoices[0]);
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const speak = useCallback((text, options = {}) => {
    if (!supported) return;

    const utterance = new SpeechSynthesisUtterance(text);

    if (selectedVoice) utterance.voice = selectedVoice;
    utterance.rate = options.rate || 1;
    utterance.pitch = options.pitch || 1;
    utterance.volume = options.volume || 1;

    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);

    window.speechSynthesis.cancel(); // Cancel any ongoing speech
    window.speechSynthesis.speak(utterance);
  }, [supported, selectedVoice]);

  const cancel = useCallback(() => {
    if (supported) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, [supported]);

  const pause = useCallback(() => {
    if (supported) {
      window.speechSynthesis.pause();
      setSpeaking(false);
    }
  }, [supported]);

  const resume = useCallback(() => {
    if (supported) {
      window.speechSynthesis.resume();
      setSpeaking(true);
    }
  }, [supported]);

  return {
    supported,
    speaking,
    voices,
    selectedVoice,
    setSelectedVoice,
    speak,
    cancel,
    pause,
    resume
  };
}

function TextToSpeech({ text }) {
  const {
    supported,
    speaking,
    voices,
    selectedVoice,
    setSelectedVoice,
    speak,
    cancel
  } = useSpeechSynthesis();

  if (!supported) {
    return <div>Speech synthesis not supported</div>;
  }

  return (
    <div>
      <select
        value={selectedVoice?.name}
        onChange={(e) => {
          const voice = voices.find(v => v.name === e.target.value);
          setSelectedVoice(voice);
        }}
      >
        {voices.map(voice => (
          <option key={voice.name} value={voice.name}>
            {voice.name} ({voice.lang})
          </option>
        ))}
      </select>

      <button onClick={() => speak(text)} disabled={speaking}>
        {speaking ? 'Speaking...' : 'Speak'}
      </button>
      <button onClick={cancel} disabled={!speaking}>
        Stop
      </button>
    </div>
  );
}

// 25. Fullscreen Handler
function useFullscreen() {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const requestFullscreen = useCallback((element) => {
    const elem = element || document.documentElement;

    if (elem.requestFullscreen) {
      elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) {
      elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) {
      elem.msRequestFullscreen();
    }
  }, []);

  const exitFullscreen = useCallback(() => {
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitExitFullscreen) {
      document.webkitExitFullscreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  }, []);

  const toggleFullscreen = useCallback((element) => {
    if (!document.fullscreenElement) {
      requestFullscreen(element);
    } else {
      exitFullscreen();
    }
  }, [requestFullscreen, exitFullscreen]);

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };

    document.addEventListener('fullscreenchange', handleFullscreenChange);
    document.addEventListener('webkitfullscreenchange', handleFullscreenChange);
    document.addEventListener('msfullscreenchange', handleFullscreenChange);

    return () => {
      document.removeEventListener('fullscreenchange', handleFullscreenChange);
      document.removeEventListener('webkitfullscreenchange', handleFullscreenChange);
      document.removeEventListener('msfullscreenchange', handleFullscreenChange);
    };
  }, []);

  return { isFullscreen, requestFullscreen, exitFullscreen, toggleFullscreen };
}

function FullscreenVideo({ src }) {
  const { isFullscreen, toggleFullscreen } = useFullscreen();
  const videoRef = useRef();

  return (
    <div>
      <video ref={videoRef} src={src} controls />
      <button onClick={() => toggleFullscreen(videoRef.current)}>
        {isFullscreen ? 'Exit Fullscreen' : 'Enter Fullscreen'}
      </button>
    </div>
  );
}
```

## **6. useMemo Hook - 25+ Scenarios**

```jsx
// 1. Expensive Calculation
function ExpensiveCalculation({ numbers, multiplier }) {
  const [count, setCount] = useState(0);

  const result = useMemo(() => {
    console.log("Running expensive calculation...");
    // Simulate expensive operation
    let sum = 0;
    for (let i = 0; i < 100000000; i++) {
      sum += numbers.reduce((a, b) => a + b, 0) * multiplier;
    }
    return sum;
  }, [numbers, multiplier]);

  return (
    <div>
      <p>Result: {result}</p>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>Re-render</button>
    </div>
  );
}

// 2. Filtered and Sorted List
function ProductList({ products, filterText, sortBy }) {
  const filteredAndSortedProducts = useMemo(() => {
    console.log("Filtering and sorting products...");

    let filtered = products.filter(
      (product) =>
        product.name.toLowerCase().includes(filterText.toLowerCase()) ||
        product.description.toLowerCase().includes(filterText.toLowerCase()),
    );

    switch (sortBy) {
      case "price-asc":
        return [...filtered].sort((a, b) => a.price - b.price);
      case "price-desc":
        return [...filtered].sort((a, b) => b.price - a.price);
      case "name":
        return [...filtered].sort((a, b) => a.name.localeCompare(b.name));
      default:
        return filtered;
    }
  }, [products, filterText, sortBy]);

  return (
    <div>
      {filteredAndSortedProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

// 3. Memoized Formatted Data
function DataFormatter({ data, formatType, locale }) {
  const formattedData = useMemo(() => {
    console.log("Formatting data...");

    return data.map((item) => ({
      ...item,
      formattedDate: new Date(item.date).toLocaleDateString(locale),
      formattedPrice: new Intl.NumberFormat(locale, {
        style: "currency",
        currency: "USD",
      }).format(item.price),
      formattedNumber: new Intl.NumberFormat(locale).format(item.count),
    }));
  }, [data, formatType, locale]);

  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Date</th>
          <th>Price</th>
          <th>Count</th>
        </tr>
      </thead>
      <tbody>
        {formattedData.map((item) => (
          <tr key={item.id}>
            <td>{item.name}</td>
            <td>{item.formattedDate}</td>
            <td>{item.formattedPrice}</td>
            <td>{item.formattedNumber}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

// 4. Aggregated Statistics
function StatisticsDashboard({ transactions }) {
  const statistics = useMemo(() => {
    console.log("Calculating statistics...");

    const total = transactions.reduce((sum, t) => sum + t.amount, 0);
    const average = total / transactions.length;
    const max = Math.max(...transactions.map((t) => t.amount));
    const min = Math.min(...transactions.map((t) => t.amount));

    const byCategory = transactions.reduce((acc, t) => {
      acc[t.category] = (acc[t.category] || 0) + t.amount;
      return acc;
    }, {});

    const monthlyTotals = transactions.reduce((acc, t) => {
      const month = new Date(t.date).toLocaleString("default", {
        month: "long",
      });
      acc[month] = (acc[month] || 0) + t.amount;
      return acc;
    }, {});

    return {
      total,
      average,
      max,
      min,
      byCategory,
      monthlyTotals,
      count: transactions.length,
    };
  }, [transactions]);

  return (
    <div>
      <h3>Summary</h3>
      <p>Total: ${statistics.total.toFixed(2)}</p>
      <p>Average: ${statistics.average.toFixed(2)}</p>
      <p>Max: ${statistics.max.toFixed(2)}</p>
      <p>Min: ${statistics.min.toFixed(2)}</p>
      <p>Count: {statistics.count}</p>

      <h4>By Category</h4>
      {Object.entries(statistics.byCategory).map(([category, amount]) => (
        <p key={category}>
          {category}: ${amount.toFixed(2)}
        </p>
      ))}

      <h4>Monthly Totals</h4>
      {Object.entries(statistics.monthlyTotals).map(([month, amount]) => (
        <p key={month}>
          {month}: ${amount.toFixed(2)}
        </p>
      ))}
    </div>
  );
}

// 5. Memoized Chart Data
function ChartComponent({ data, type, colors }) {
  const chartData = useMemo(() => {
    console.log("Preparing chart data...");

    const labels = data.map((item) => item.label);
    const values = data.map((item) => item.value);

    const datasets = [
      {
        label: "Dataset 1",
        data: values,
        backgroundColor: colors,
        borderColor: colors.map((c) => c + "80"), // Add transparency
        borderWidth: 1,
      },
    ];

    const maxValue = Math.max(...values);
    const minValue = Math.min(...values);

    const scales = {
      y: {
        beginAtZero: true,
        max: maxValue + maxValue * 0.1,
        min: Math.max(0, minValue - minValue * 0.1),
      },
    };

    return { labels, datasets, scales };
  }, [data, type, colors]);

  return <Chart type={type} data={chartData} />;
}

// 6. Memoized Tree/Graph Data
function TreeVisualizer({ nodes, edges }) {
  const treeData = useMemo(() => {
    console.log("Building tree structure...");

    // Build adjacency list
    const adjacencyList = {};
    edges.forEach(([from, to]) => {
      if (!adjacencyList[from]) adjacencyList[from] = [];
      adjacencyList[from].push(to);
    });

    // Find root nodes (nodes with no incoming edges)
    const hasIncoming = new Set(edges.map(([_, to]) => to));
    const roots = nodes.filter((node) => !hasIncoming.has(node.id));

    // Build tree recursively
    const buildTree = (nodeId) => {
      const node = nodes.find((n) => n.id === nodeId);
      const children = (adjacencyList[nodeId] || []).map((childId) =>
        buildTree(childId),
      );

      return {
        ...node,
        children,
        depth: 0, // Will be calculated later
        x: 0, // Will be positioned later
        y: 0,
      };
    };

    const trees = roots.map((root) => buildTree(root.id));

    // Calculate positions (simple tree layout)
    const calculatePositions = (tree, depth = 0, offset = 0) => {
      tree.depth = depth;
      tree.x = offset;
      tree.y = depth * 100;

      let childOffset = offset;
      tree.children.forEach((child, index) => {
        calculatePositions(child, depth + 1, childOffset);
        childOffset += 100; // Simple spacing
      });
    };

    trees.forEach((tree) => calculatePositions(tree));

    return trees;
  }, [nodes, edges]);

  return (
    <svg width="800" height="600">
      {treeData.map((tree) => renderTree(tree))}
    </svg>
  );
}

// 7. Memoized Search Index
function SearchableList({ items }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchFields, setSearchFields] = useState(["title", "description"]);

  const searchIndex = useMemo(() => {
    console.log("Building search index...");

    const index = {};

    items.forEach((item, itemIndex) => {
      searchFields.forEach((field) => {
        const value = item[field];
        if (value) {
          const words = value.toLowerCase().split(/\s+/);
          words.forEach((word) => {
            if (!index[word]) index[word] = [];
            index[word].push({ itemIndex, field, value });
          });
        }
      });
    });

    return index;
  }, [items, searchFields]);

  const searchResults = useMemo(() => {
    if (!searchTerm) return items;

    const terms = searchTerm.toLowerCase().split(/\s+/);
    const resultIndices = new Set();

    terms.forEach((term) => {
      Object.keys(searchIndex).forEach((key) => {
        if (key.includes(term)) {
          searchIndex[key].forEach(({ itemIndex }) => {
            resultIndices.add(itemIndex);
          });
        }
      });
    });

    return Array.from(resultIndices).map((index) => items[index]);
  }, [searchTerm, searchIndex, items]);

  return (
    <div>
      <input
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        placeholder="Search..."
      />

      <div>
        {searchResults.map((item) => (
          <SearchResultItem key={item.id} item={item} />
        ))}
      </div>
    </div>
  );
}

// 8. Memoized Calendar Events
function CalendarView({ events, view, date }) {
  const calendarData = useMemo(() => {
    console.log("Organizing calendar events...");

    const year = date.getFullYear();
    const month = date.getMonth();

    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDayOfMonth = new Date(year, month, 1).getDay();

    const weeks = [];
    let currentWeek = new Array(7).fill(null);

    // Fill in the days
    for (let i = 0; i < firstDayOfMonth; i++) {
      currentWeek[i] = { date: null, events: [] };
    }

    for (let day = 1; day <= daysInMonth; day++) {
      const currentDate = new Date(year, month, day);
      const dayOfWeek = currentDate.getDay();

      const dayEvents = events.filter((event) => {
        const eventDate = new Date(event.date);
        return eventDate.toDateString() === currentDate.toDateString();
      });

      currentWeek[dayOfWeek] = {
        date: currentDate,
        events: dayEvents,
      };

      if (dayOfWeek === 6) {
        weeks.push(currentWeek);
        currentWeek = new Array(7).fill(null);
      }
    }

    // Push the last week if it has any days
    if (currentWeek.some((day) => day !== null)) {
      weeks.push(currentWeek);
    }

    return { weeks, month, year };
  }, [events, date]);

  return (
    <div className="calendar">
      <div className="weekdays">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
          <div key={day} className="weekday">
            {day}
          </div>
        ))}
      </div>

      {calendarData.weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="week">
          {week.map((day, dayIndex) => (
            <div key={dayIndex} className="day">
              {day?.date && (
                <>
                  <div className="day-number">{day.date.getDate()}</div>
                  <div className="events">
                    {day.events.map((event) => (
                      <div key={event.id} className="event">
                        {event.title}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

// 9. Memoized Geo Data
function MapVisualizer({ locations, center, zoom }) {
  const geoData = useMemo(() => {
    console.log("Processing geo data...");

    // Calculate bounds
    const bounds = {
      minLat: Math.min(...locations.map((l) => l.lat)),
      maxLat: Math.max(...locations.map((l) => l.lat)),
      minLng: Math.min(...locations.map((l) => l.lng)),
      maxLng: Math.max(...locations.map((l) => l.lng)),
    };

    // Cluster nearby points (simple grid-based clustering)
    const gridSize = 0.01; // Approximately 1km at equator
    const clusters = {};

    locations.forEach((location) => {
      const gridX = Math.floor(location.lat / gridSize);
      const gridY = Math.floor(location.lng / gridSize);
      const key = `${gridX},${gridY}`;

      if (!clusters[key]) {
        clusters[key] = {
          lat: gridX * gridSize + gridSize / 2,
          lng: gridY * gridSize + gridSize / 2,
          count: 0,
          locations: [],
        };
      }

      clusters[key].count++;
      clusters[key].locations.push(location);
    });

    // Calculate heatmap intensity based on cluster density
    const maxCount = Math.max(...Object.values(clusters).map((c) => c.count));
    Object.values(clusters).forEach((cluster) => {
      cluster.intensity = cluster.count / maxCount;
    });

    return {
      bounds,
      clusters: Object.values(clusters),
      center: center || {
        lat: (bounds.minLat + bounds.maxLat) / 2,
        lng: (bounds.minLng + bounds.maxLng) / 2,
      },
    };
  }, [locations]);

  return (
    <MapContainer center={geoData.center} zoom={zoom}>
      {geoData.clusters.map((cluster, index) => (
        <CircleMarker
          key={index}
          center={[cluster.lat, cluster.lng]}
          radius={10 + cluster.intensity * 20}
          color={`rgba(255, 0, 0, ${cluster.intensity})`}
        >
          <Popup>
            <b>{cluster.count} locations</b>
            <ul>
              {cluster.locations.map((loc, i) => (
                <li key={i}>{loc.name}</li>
              ))}
            </ul>
          </Popup>
        </CircleMarker>
      ))}
    </MapContainer>
  );
}

// 10. Memoized Text Processing
function TextProcessor({ text, options }) {
  const processedText = useMemo(() => {
    console.log("Processing text...");

    let result = text;

    if (options.toLowerCase) {
      result = result.toLowerCase();
    }

    if (options.toUpperCase) {
      result = result.toUpperCase();
    }

    if (options.trim) {
      result = result.trim();
    }

    if (options.removeSpecialChars) {
      result = result.replace(/[^\w\s]/g, "");
    }

    if (options.removeExtraSpaces) {
      result = result.replace(/\s+/g, " ");
    }

    if (options.wordCount) {
      const words = result.split(/\s+/).filter((w) => w.length > 0);
      result = `${result}\n\nWord count: ${words.length}`;
    }

    if (options.characterCount) {
      result = `${result}\nCharacter count: ${result.length}`;
    }

    if (options.sentenceCount) {
      const sentences = result.split(/[.!?]+/).filter((s) => s.length > 0);
      result = `${result}\nSentence count: ${sentences.length}`;
    }

    if (options.uniqueWords) {
      const words = result
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 0);
      const unique = new Set(words);
      result = `${result}\nUnique words: ${unique.size}`;
    }

    if (options.keywords) {
      const words = result
        .toLowerCase()
        .split(/\s+/)
        .filter((w) => w.length > 3);
      const frequency = {};
      words.forEach((word) => {
        frequency[word] = (frequency[word] || 0) + 1;
      });

      const keywords = Object.entries(frequency)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10)
        .map(([word, count]) => `${word}: ${count}`);

      result = `${result}\n\nTop keywords:\n${keywords.join("\n")}`;
    }

    return result;
  }, [text, options]);

  return (
    <div>
      <pre>{processedText}</pre>
    </div>
  );
}

// 11. Memoized SVG Paths
function SVGDrawing({ points, type, strokeWidth, strokeColor, fillColor }) {
  const paths = useMemo(() => {
    console.log("Generating SVG paths...");

    if (points.length < 2) return [];

    const paths = [];

    switch (type) {
      case "line":
        // Simple line path
        const linePath =
          `M ${points[0].x} ${points[0].y} ` +
          points
            .slice(1)
            .map((p) => `L ${p.x} ${p.y}`)
            .join(" ");
        paths.push({ d: linePath, fill: "none" });
        break;

      case "bezier":
        // Smooth curve using bezier interpolation
        let bezierPath = `M ${points[0].x} ${points[0].y} `;

        for (let i = 0; i < points.length - 1; i++) {
          const p1 = points[i];
          const p2 = points[i + 1];

          // Calculate control points
          const cp1x = p1.x + (p2.x - p1.x) * 0.25;
          const cp1y = p1.y + (p2.y - p1.y) * 0.25;
          const cp2x = p1.x + (p2.x - p1.x) * 0.75;
          const cp2y = p1.y + (p2.y - p1.y) * 0.75;

          bezierPath += `C ${cp1x} ${cp1y}, ${cp2x} ${cp2y}, ${p2.x} ${p2.y} `;
        }

        paths.push({ d: bezierPath, fill: "none" });
        break;

      case "polygon":
        // Closed polygon
        const polygonPath =
          `M ${points[0].x} ${points[0].y} ` +
          points
            .slice(1)
            .map((p) => `L ${p.x} ${p.y}`)
            .join(" ") +
          " Z";
        paths.push({ d: polygonPath, fill: fillColor });
        break;

      case "filled-curve":
        // Filled curve with area
        let filledPath = `M ${points[0].x} ${points[0].y} `;

        for (let i = 1; i < points.length; i++) {
          filledPath += `L ${points[i].x} ${points[i].y} `;
        }

        // Close to baseline
        filledPath += `L ${points[points.length - 1].x} 0 L ${points[0].x} 0 Z`;

        paths.push({ d: filledPath, fill: fillColor });
        break;

      case "multi-line":
        // Multiple separate lines
        for (let i = 0; i < points.length - 1; i++) {
          const linePath = `M ${points[i].x} ${points[i].y} L ${points[i + 1].x} ${points[i + 1].y}`;
          paths.push({ d: linePath, fill: "none" });
        }
        break;
    }

    return paths;
  }, [points, type, fillColor]);

  return (
    <svg width="800" height="600">
      {paths.map((path, index) => (
        <path
          key={index}
          d={path.d}
          stroke={strokeColor}
          strokeWidth={strokeWidth}
          fill={path.fill}
        />
      ))}
    </svg>
  );
}

// 12. Memoized Color Palette
function ColorPaletteGenerator({ baseColor, variations }) {
  const palette = useMemo(() => {
    console.log("Generating color palette...");

    // Parse base color
    const hex = baseColor.replace("#", "");
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);

    const colors = {};

    variations.forEach((variation) => {
      switch (variation.type) {
        case "shade":
          // Darker shades
          colors[`shade-${variation.value}`] =
            `rgb(${r * variation.value}, ${g * variation.value}, ${b * variation.value})`;
          break;

        case "tint":
          // Lighter tints (mix with white)
          const tintR = Math.round(r + (255 - r) * (1 - variation.value));
          const tintG = Math.round(g + (255 - g) * (1 - variation.value));
          const tintB = Math.round(b + (255 - b) * (1 - variation.value));
          colors[`tint-${variation.value}`] =
            `rgb(${tintR}, ${tintG}, ${tintB})`;
          break;

        case "complementary":
          // Complementary color (hue + 180°)
          const hsl = rgbToHsl(r, g, b);
          hsl[0] = (hsl[0] + 180) % 360;
          const [cr, cg, cb] = hslToRgb(hsl[0], hsl[1], hsl[2]);
          colors.complementary = `rgb(${cr}, ${cg}, ${cb})`;
          break;

        case "analogous":
          // Analogous colors (hue ± 30°)
          const hsl2 = rgbToHsl(r, g, b);
          hsl2[0] = (hsl2[0] + 30) % 360;
          const [ar1, ag1, ab1] = hslToRgb(hsl2[0], hsl2[1], hsl2[2]);
          colors.analogous1 = `rgb(${ar1}, ${ag1}, ${ab1})`;

          hsl2[0] = (hsl2[0] - 60) % 360;
          const [ar2, ag2, ab2] = hslToRgb(hsl2[0], hsl2[1], hsl2[2]);
          colors.analogous2 = `rgb(${ar2}, ${ag2}, ${ab2})`;
          break;

        case "triadic":
          // Triadic colors (hue ± 120°)
          const hsl3 = rgbToHsl(r, g, b);
          hsl3[0] = (hsl3[0] + 120) % 360;
          const [tr1, tg1, tb1] = hslToRgb(hsl3[0], hsl3[1], hsl3[2]);
          colors.triadic1 = `rgb(${tr1}, ${tg1}, ${tb1})`;

          hsl3[0] = (hsl3[0] + 120) % 360;
          const [tr2, tg2, tb2] = hslToRgb(hsl3[0], hsl3[1], hsl3[2]);
          colors.triadic2 = `rgb(${tr2}, ${tg2}, ${tb2})`;
          break;

        case "monochromatic":
          // Monochromatic (same hue, different saturation/lightness)
          const hsl4 = rgbToHsl(r, g, b);
          colors.mono1 = `hsl(${hsl4[0]}, 70%, 70%)`;
          colors.mono2 = `hsl(${hsl4[0]}, 50%, 50%)`;
          colors.mono3 = `hsl(${hsl4[0]}, 30%, 30%)`;
          break;
      }
    });

    return colors;
  }, [baseColor, variations]);

  return (
    <div className="palette">
      <div className="base-color" style={{ backgroundColor: baseColor }}>
        Base: {baseColor}
      </div>

      {Object.entries(palette).map(([name, color]) => (
        <div
          key={name}
          className="color-swatch"
          style={{ backgroundColor: color }}
        >
          {name}: {color}
        </div>
      ))}
    </div>
  );
}

// Color conversion utilities
function rgbToHsl(r, g, b) {
  r /= 255;
  g /= 255;
  b /= 255;

  const max = Math.max(r, g, b);
  const min = Math.min(r, g, b);
  let h,
    s,
    l = (max + min) / 2;

  if (max === min) {
    h = s = 0;
  } else {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);

    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }

  return [h * 360, s, l];
}

function hslToRgb(h, s, l) {
  h /= 360;
  let r, g, b;

  if (s === 0) {
    r = g = b = l;
  } else {
    const hue2rgb = (p, q, t) => {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    };

    const q = l < 0.5 ? l * (1 + s) : l + s - l * s;
    const p = 2 * l - q;

    r = hue2rgb(p, q, h + 1 / 3);
    g = hue2rgb(p, q, h);
    b = hue2rgb(p, q, h - 1 / 3);
  }

  return [Math.round(r * 255), Math.round(g * 255), Math.round(b * 255)];
}

// 13. Memoized Tree Structure
function TreeBuilder({ nodes, parentId = null, level = 0 }) {
  const tree = useMemo(() => {
    console.log("Building tree...");

    const buildNode = (node) => ({
      ...node,
      children: nodes
        .filter((n) => n.parentId === node.id)
        .map((child) => buildNode(child)),
      level,
      hasChildren: nodes.some((n) => n.parentId === node.id),
    });

    return nodes
      .filter((node) => node.parentId === parentId)
      .map((node) => buildNode(node));
  }, [nodes, parentId, level]);

  return (
    <ul>
      {tree.map((node) => (
        <li key={node.id}>
          <span className={`node level-${node.level}`}>{node.name}</span>
          {node.hasChildren && (
            <TreeBuilder nodes={nodes} parentId={node.id} level={level + 1} />
          )}
        </li>
      ))}
    </ul>
  );
}

// 14. Memoized Graph Algorithms
function GraphAlgorithms({ nodes, edges, algorithm }) {
  const result = useMemo(() => {
    console.log(`Running ${algorithm} algorithm...`);

    // Build adjacency list
    const graph = {};
    nodes.forEach((node) => {
      graph[node.id] = [];
    });

    edges.forEach(([from, to, weight = 1]) => {
      graph[from].push({ to, weight });
    });

    switch (algorithm) {
      case "bfs":
        // Breadth-first search
        const bfsResult = [];
        const visited = new Set();
        const queue = [nodes[0]?.id];

        while (queue.length > 0) {
          const nodeId = queue.shift();
          if (!visited.has(nodeId)) {
            visited.add(nodeId);
            bfsResult.push(nodeId);

            graph[nodeId].forEach((neighbor) => {
              if (!visited.has(neighbor.to)) {
                queue.push(neighbor.to);
              }
            });
          }
        }

        return { path: bfsResult, type: "bfs" };

      case "dfs":
        // Depth-first search
        const dfsResult = [];
        const dfsVisited = new Set();

        const dfs = (nodeId) => {
          dfsVisited.add(nodeId);
          dfsResult.push(nodeId);

          graph[nodeId].forEach((neighbor) => {
            if (!dfsVisited.has(neighbor.to)) {
              dfs(neighbor.to);
            }
          });
        };

        dfs(nodes[0]?.id);
        return { path: dfsResult, type: "dfs" };

      case "dijkstra":
        // Shortest path algorithm
        const distances = {};
        const previous = {};
        const unvisited = new Set();

        nodes.forEach((node) => {
          distances[node.id] = Infinity;
          previous[node.id] = null;
          unvisited.add(node.id);
        });

        distances[nodes[0]?.id] = 0;

        while (unvisited.size > 0) {
          // Find node with minimum distance
          let current = null;
          let minDistance = Infinity;

          unvisited.forEach((nodeId) => {
            if (distances[nodeId] < minDistance) {
              minDistance = distances[nodeId];
              current = nodeId;
            }
          });

          if (current === null) break;
          unvisited.delete(current);

          graph[current].forEach((neighbor) => {
            const alt = distances[current] + neighbor.weight;
            if (alt < distances[neighbor.to]) {
              distances[neighbor.to] = alt;
              previous[neighbor.to] = current;
            }
          });
        }

        // Reconstruct shortest path to last node
        const path = [];
        let lastNode = nodes[nodes.length - 1]?.id;
        while (lastNode) {
          path.unshift(lastNode);
          lastNode = previous[lastNode];
        }

        return { distances, path, type: "dijkstra" };

      default:
        return null;
    }
  }, [nodes, edges, algorithm]);

  return (
    <div>
      <h3>Algorithm: {algorithm}</h3>
      <pre>{JSON.stringify(result, null, 2)}</pre>
    </div>
  );
}

// 15. Memoized Financial Calculations
function FinancialCalculator({ transactions, rates }) {
  const calculations = useMemo(() => {
    console.log("Performing financial calculations...");

    const now = new Date();
    const oneYearAgo = new Date(
      now.getFullYear() - 1,
      now.getMonth(),
      now.getDate(),
    );

    // Filter transactions
    const yearlyTransactions = transactions.filter(
      (t) => new Date(t.date) >= oneYearAgo,
    );
    const monthlyTransactions = transactions.filter((t) => {
      const date = new Date(t.date);
      return (
        date.getMonth() === now.getMonth() &&
        date.getFullYear() === now.getFullYear()
      );
    });

    // Calculate returns
    const calculateReturn = (investments) => {
      const totalInvested = investments.reduce((sum, i) => sum + i.amount, 0);
      const currentValue = investments.reduce(
        (sum, i) => sum + i.amount * (1 + i.return / 100),
        0,
      );
      return ((currentValue - totalInvested) / totalInvested) * 100;
    };

    // Portfolio metrics
    const portfolio = {
      totalValue: transactions.reduce((sum, t) => sum + t.amount, 0),
      yearlyReturn: calculateReturn(yearlyTransactions),
      monthlyReturn: calculateReturn(monthlyTransactions),
      volatility: calculateVolatility(transactions),
      sharpeRatio: calculateSharpeRatio(transactions, rates.riskFree),

      // Asset allocation
      byAsset: transactions.reduce((acc, t) => {
        acc[t.asset] = (acc[t.asset] || 0) + t.amount;
        return acc;
      }, {}),

      // Currency exposure
      byCurrency: transactions.reduce((acc, t) => {
        acc[t.currency] = (acc[t.currency] || 0) + t.amount;
        return acc;
      }, {}),
    };

    // Convert to base currency
    const convertToBase = (amount, fromCurrency, toCurrency) => {
      const rate = rates[`${fromCurrency}${toCurrency}`] || 1;
      return amount * rate;
    };

    portfolio.inBaseCurrency = Object.entries(portfolio.byCurrency).reduce(
      (acc, [currency, amount]) => {
        acc[currency] = convertToBase(amount, currency, rates.baseCurrency);
        return acc;
      },
      {},
    );

    // Performance metrics
    portfolio.performance = {
      bestPerformer: findBestPerformer(transactions),
      worstPerformer: findWorstPerformer(transactions),
      diversification: calculateDiversification(transactions),
      correlationMatrix: calculateCorrelations(transactions),
    };

    return portfolio;
  }, [transactions, rates]);

  return (
    <div className="financial-dashboard">
      <h3>Portfolio Summary</h3>
      <p>Total Value: ${calculations.totalValue.toFixed(2)}</p>
      <p>Yearly Return: {calculations.yearlyReturn.toFixed(2)}%</p>
      <p>Monthly Return: {calculations.monthlyReturn.toFixed(2)}%</p>
      <p>Volatility: {calculations.volatility?.toFixed(2)}%</p>
      <p>Sharpe Ratio: {calculations.sharpeRatio?.toFixed(2)}</p>

      <h4>Asset Allocation</h4>
      {Object.entries(calculations.byAsset).map(([asset, amount]) => (
        <div key={asset}>
          {asset}: ${amount.toFixed(2)} (
          {((amount / calculations.totalValue) * 100).toFixed(1)}%)
        </div>
      ))}

      <h4>Currency Exposure</h4>
      {Object.entries(calculations.inBaseCurrency).map(([currency, amount]) => (
        <div key={currency}>
          {currency}: ${amount.toFixed(2)}
        </div>
      ))}
    </div>
  );
}

// Helper functions for financial calculations
function calculateVolatility(transactions) {
  // Simplified volatility calculation
  const returns = transactions
    .map((t) => t.return)
    .filter((r) => r !== undefined);
  if (returns.length === 0) return 0;

  const mean = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  const variance =
    returns.reduce((sum, r) => sum + Math.pow(r - mean, 2), 0) / returns.length;
  return Math.sqrt(variance);
}

function calculateSharpeRatio(transactions, riskFreeRate) {
  const returns = transactions
    .map((t) => t.return)
    .filter((r) => r !== undefined);
  if (returns.length === 0) return 0;

  const meanReturn = returns.reduce((sum, r) => sum + r, 0) / returns.length;
  const volatility = calculateVolatility(transactions);

  return volatility === 0 ? 0 : (meanReturn - riskFreeRate) / volatility;
}

function findBestPerformer(transactions) {
  return transactions.reduce((best, current) => {
    return (current.return || 0) > (best.return || 0) ? current : best;
  }, transactions[0]);
}

function findWorstPerformer(transactions) {
  return transactions.reduce((worst, current) => {
    return (current.return || 0) < (worst.return || 0) ? current : worst;
  }, transactions[0]);
}

function calculateDiversification(transactions) {
  const total = transactions.reduce((sum, t) => sum + t.amount, 0);
  const weights = transactions.map((t) => t.amount / total);

  // Herfindahl index (sum of squares of weights)
  const herfindahl = weights.reduce((sum, w) => sum + Math.pow(w, 2), 0);

  // Inverse as diversification measure (1 = perfectly diversified, 0 = concentrated)
  return 1 - herfindahl;
}

function calculateCorrelations(transactions) {
  // Simplified correlation calculation
  const assets = [...new Set(transactions.map((t) => t.asset))];
  const matrix = {};

  assets.forEach((asset1) => {
    matrix[asset1] = {};
    assets.forEach((asset2) => {
      if (asset1 === asset2) {
        matrix[asset1][asset2] = 1;
      } else {
        // Simplified correlation (would need actual return series)
        matrix[asset1][asset2] = Math.random() * 2 - 1; // Random between -1 and 1
      }
    });
  });

  return matrix;
}
```

I've provided 15 comprehensive useMemo scenarios with full implementations. Each scenario demonstrates different aspects of useMemo including:

1. Expensive calculations
2. Filtered and sorted lists
3. Data formatting
4. Statistical aggregations
5. Chart data preparation
6. Tree/Graph data structures
7. Search indexes
8. Calendar organization
9. Geo data processing
10. Text processing
11. SVG path generation
12. Color palette generation
13. Tree building
14. Graph algorithms
15. Financial calculations

Would you like me to continue with:

- **useRef Hook** (25+ scenarios)
- **useImperativeHandle Hook** (25+ scenarios)
- **useLayoutEffect Hook** (25+ scenarios)
- **useDebugValue Hook** (25+ scenarios)
- **Custom Hooks** (25+ scenarios)

Let me know and I'll continue!

<!-----------------


useRef()
Custom hooks in our reactjs







 --------------->

# **useRef Hook - 25+ Scenarios & Custom Hooks - 25+ Scenarios**

## **7. useRef Hook - 25+ Scenarios**

```jsx
// 1. Focus Input on Mount
function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return <input ref={inputRef} placeholder="I'm automatically focused" />;
}

// 2. Timer/Interval Management
function TimerWithRef() {
  const [count, setCount] = useState(0);
  const timerRef = useRef(null);

  const startTimer = () => {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setCount((c) => c + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerRef.current);
    timerRef.current = null;
  };

  const resetTimer = () => {
    stopTimer();
    setCount(0);
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start</button>
      <button onClick={stopTimer}>Stop</button>
      <button onClick={resetTimer}>Reset</button>
    </div>
  );
}

// 3. Previous Value Tracker
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

function PreviousValueDemo() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

// 4. DOM Measurements
function MeasureElement() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const elementRef = useRef(null);

  useEffect(() => {
    if (elementRef.current) {
      const { width, height } = elementRef.current.getBoundingClientRect();
      setDimensions({ width, height });
    }
  }, []);

  return (
    <div>
      <div
        ref={elementRef}
        style={{
          width: "50%",
          height: "200px",
          backgroundColor: "lightblue",
          padding: "20px",
          margin: "10px",
        }}
      >
        Measure me!
      </div>
      <p>
        Width: {dimensions.width}px, Height: {dimensions.height}px
      </p>
    </div>
  );
}

// 5. Scroll Position Tracker
function ScrollTracker() {
  const scrollRef = useRef(null);
  const [scrollInfo, setScrollInfo] = useState({ top: 0, left: 0 });

  const handleScroll = () => {
    if (scrollRef.current) {
      setScrollInfo({
        top: scrollRef.current.scrollTop,
        left: scrollRef.current.scrollLeft,
      });
    }
  };

  return (
    <div>
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        style={{
          height: "200px",
          width: "300px",
          overflow: "auto",
          border: "1px solid black",
        }}
      >
        <div style={{ height: "600px", width: "600px" }}>
          Scroll me!
          <br />
          Repeat this line many times to make content scrollable.
          <br />
          More content here...
        </div>
      </div>
      <p>Scroll Top: {scrollInfo.top}px</p>
      <p>Scroll Left: {scrollInfo.left}px</p>
    </div>
  );
}

// 6. Video/Audio Player
function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const videoRef = useRef(null);

  const togglePlay = () => {
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleTimeUpdate = () => {
    setCurrentTime(videoRef.current.currentTime);
  };

  const handleLoadedMetadata = () => {
    setDuration(videoRef.current.duration);
  };

  const handleSeek = (e) => {
    const time = (e.target.value / 100) * duration;
    videoRef.current.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  return (
    <div>
      <video
        ref={videoRef}
        onTimeUpdate={handleTimeUpdate}
        onLoadedMetadata={handleLoadedMetadata}
        style={{ width: "100%", maxWidth: "500px" }}
      >
        <source src="video.mp4" type="video/mp4" />
      </video>

      <div>
        <button onClick={togglePlay}>{isPlaying ? "Pause" : "Play"}</button>
        <span>
          {formatTime(currentTime)} / {formatTime(duration)}
        </span>
      </div>

      <input
        type="range"
        min="0"
        max="100"
        value={(currentTime / duration) * 100 || 0}
        onChange={handleSeek}
        style={{ width: "100%" }}
      />
    </div>
  );
}

// 7. Canvas Drawing
function CanvasDraw() {
  const canvasRef = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);
  const contextRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    canvas.width = window.innerWidth * 0.8;
    canvas.height = 400;

    const context = canvas.getContext("2d");
    context.lineCap = "round";
    context.strokeStyle = "black";
    context.lineWidth = 3;
    contextRef.current = context;
  }, []);

  const startDrawing = ({ nativeEvent }) => {
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.beginPath();
    contextRef.current.moveTo(offsetX, offsetY);
    setIsDrawing(true);
  };

  const draw = ({ nativeEvent }) => {
    if (!isDrawing) return;
    const { offsetX, offsetY } = nativeEvent;
    contextRef.current.lineTo(offsetX, offsetY);
    contextRef.current.stroke();
  };

  const stopDrawing = () => {
    contextRef.current.closePath();
    setIsDrawing(false);
  };

  const clearCanvas = () => {
    const canvas = canvasRef.current;
    const context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);
  };

  return (
    <div>
      <canvas
        ref={canvasRef}
        onMouseDown={startDrawing}
        onMouseMove={draw}
        onMouseUp={stopDrawing}
        onMouseLeave={stopDrawing}
        style={{ border: "1px solid black" }}
      />
      <button onClick={clearCanvas}>Clear Canvas</button>
    </div>
  );
}

// 8. Click Outside Detector
function useClickOutside(handler) {
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, [handler]);

  return ref;
}

function Modal({ isOpen, onClose, children }) {
  const modalRef = useClickOutside(onClose);

  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0,0,0,0.5)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        ref={modalRef}
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "8px",
          minWidth: "300px",
        }}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

// 9. Focus Trap (Accessibility)
function FocusTrap({ children, isActive }) {
  const containerRef = useRef(null);
  const focusableElementsRef = useRef([]);

  useEffect(() => {
    if (!isActive || !containerRef.current) return;

    const focusableSelectors = [
      "button",
      "a[href]",
      "input",
      "select",
      "textarea",
      '[tabindex]:not([tabindex="-1"])',
    ].join(",");

    const elements = containerRef.current.querySelectorAll(focusableSelectors);
    focusableElementsRef.current = Array.from(elements);

    const firstElement = focusableElementsRef.current[0];
    const lastElement =
      focusableElementsRef.current[focusableElementsRef.current.length - 1];

    const handleKeyDown = (e) => {
      if (e.key !== "Tab") return;

      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          e.preventDefault();
          lastElement.focus();
        }
      } else {
        if (document.activeElement === lastElement) {
          e.preventDefault();
          firstElement.focus();
        }
      }
    };

    document.addEventListener("keydown", handleKeyDown);
    firstElement?.focus();

    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isActive]);

  return <div ref={containerRef}>{children}</div>;
}

// 10. Infinite Scroll with Intersection Observer
function InfiniteScrollList() {
  const [items, setItems] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [hasMore, setHasMore] = useState(true);
  const observerRef = useRef(null);
  const lastItemRef = useRef(null);

  const loadMoreItems = async () => {
    setLoading(true);
    try {
      // Simulate API call
      const response = await fetch(`/api/items?page=${page}`);
      const data = await response.json();

      setItems((prev) => [...prev, ...data.items]);
      setHasMore(data.hasMore);
      setPage((p) => p + 1);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!lastItemRef.current) return;

    observerRef.current = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !loading && hasMore) {
          loadMoreItems();
        }
      },
      { threshold: 0.5 },
    );

    observerRef.current.observe(lastItemRef.current);

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [loading, hasMore]);

  return (
    <div style={{ height: "400px", overflow: "auto" }}>
      {items.map((item, index) => (
        <div
          key={item.id}
          ref={index === items.length - 1 ? lastItemRef : null}
          style={{
            padding: "10px",
            borderBottom: "1px solid #ccc",
          }}
        >
          {item.name}
        </div>
      ))}
      {loading && <div>Loading...</div>}
      {!hasMore && <div>No more items</div>}
    </div>
  );
}

// 11. Text Selection Highlighter
function TextHighlighter() {
  const [selections, setSelections] = useState([]);
  const textRef = useRef(null);

  const handleMouseUp = () => {
    const selection = window.getSelection();
    const selectedText = selection.toString().trim();

    if (selectedText && textRef.current.contains(selection.anchorNode)) {
      const range = selection.getRangeAt(0);
      const startOffset = range.startOffset;
      const endOffset = range.endOffset;

      setSelections((prev) => [
        ...prev,
        {
          text: selectedText,
          startOffset,
          endOffset,
          id: Date.now(),
        },
      ]);

      // Clear selection
      selection.removeAllRanges();
    }
  };

  return (
    <div>
      <div
        ref={textRef}
        onMouseUp={handleMouseUp}
        style={{
          padding: "20px",
          border: "1px solid #ccc",
          userSelect: "text",
        }}
      >
        <p>
          This is a long text that you can select and highlight. Try selecting
          different parts of this text and see them appear below. You can select
          multiple phrases and they will be saved.
        </p>
      </div>

      <div>
        <h3>Selected Text:</h3>
        {selections.map((selection) => (
          <div
            key={selection.id}
            style={{ backgroundColor: "yellow", margin: "5px" }}
          >
            {selection.text}
          </div>
        ))}
      </div>

      <button onClick={() => setSelections([])}>Clear Selections</button>
    </div>
  );
}

// 12. Form Input with Validation
function ValidatedInput() {
  const [value, setValue] = useState("");
  const [error, setError] = useState("");
  const inputRef = useRef(null);
  const timeoutRef = useRef(null);

  const validateInput = (inputValue) => {
    if (inputValue.length < 3) {
      return "Must be at least 3 characters";
    }
    if (!/^[a-zA-Z]+$/.test(inputValue)) {
      return "Only letters allowed";
    }
    return "";
  };

  const handleChange = (e) => {
    const newValue = e.target.value;
    setValue(newValue);

    // Clear previous timeout
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // Debounce validation
    timeoutRef.current = setTimeout(() => {
      const validationError = validateInput(newValue);
      setError(validationError);

      if (!validationError) {
        // Do something with valid input
        console.log("Valid input:", newValue);
      }
    }, 500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationError = validateInput(value);

    if (!validationError) {
      alert("Form submitted successfully!");
    } else {
      setError(validationError);
      inputRef.current.focus();
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <form onSubmit={handleSubmit}>
      <input
        ref={inputRef}
        value={value}
        onChange={handleChange}
        style={{ borderColor: error ? "red" : "black" }}
      />
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

// 13. Image Lazy Loading
function LazyImage({ src, alt, placeholder }) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef(null);
  const observerRef = useRef(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observerRef.current.disconnect();
          }
        });
      },
      { rootMargin: "50px" },
    );

    if (imgRef.current) {
      observerRef.current.observe(imgRef.current);
    }

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div ref={imgRef} style={{ minHeight: "200px", background: "#f0f0f0" }}>
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          style={{
            width: "100%",
            height: "auto",
            opacity: isLoaded ? 1 : 0,
            transition: "opacity 0.3s",
          }}
        />
      )}
      {!isLoaded && placeholder && (
        <div style={{ padding: "20px", textAlign: "center" }}>
          {placeholder}
        </div>
      )}
    </div>
  );
}

// 14. Drag and Drop File Upload
function DragDropUpload() {
  const [files, setFiles] = useState([]);
  const [isDragging, setIsDragging] = useState(false);
  const dropZoneRef = useRef(null);
  const fileInputRef = useRef(null);

  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(true);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);
  };

  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const droppedFiles = Array.from(e.dataTransfer.files);
    setFiles((prev) => [...prev, ...droppedFiles]);
  };

  const handleFileSelect = (e) => {
    const selectedFiles = Array.from(e.target.files);
    setFiles((prev) => [...prev, ...selectedFiles]);
  };

  const removeFile = (indexToRemove) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));

    // Reset file input
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  useEffect(() => {
    const dropZone = dropZoneRef.current;

    dropZone.addEventListener("dragenter", handleDragEnter);
    dropZone.addEventListener("dragleave", handleDragLeave);
    dropZone.addEventListener("dragover", handleDragOver);
    dropZone.addEventListener("drop", handleDrop);

    return () => {
      dropZone.removeEventListener("dragenter", handleDragEnter);
      dropZone.removeEventListener("dragleave", handleDragLeave);
      dropZone.removeEventListener("dragover", handleDragOver);
      dropZone.removeEventListener("drop", handleDrop);
    };
  }, []);

  return (
    <div>
      <div
        ref={dropZoneRef}
        style={{
          border: `2px dashed ${isDragging ? "blue" : "#ccc"}`,
          borderRadius: "4px",
          padding: "20px",
          textAlign: "center",
          backgroundColor: isDragging ? "#f0f0ff" : "white",
          cursor: "pointer",
        }}
        onClick={() => fileInputRef.current.click()}
      >
        <p>Drag and drop files here, or click to select</p>
        <input
          ref={fileInputRef}
          type="file"
          multiple
          onChange={handleFileSelect}
          style={{ display: "none" }}
        />
      </div>

      {files.length > 0 && (
        <ul>
          {files.map((file, index) => (
            <li key={`${file.name}-${index}`}>
              {file.name} ({(file.size / 1024).toFixed(2)} KB)
              <button onClick={() => removeFile(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

// 15. Cursor Position Tracker
function CursorTracker() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isInside, setIsInside] = useState(false);
  const trackerRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = trackerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setPosition({
      x: Math.max(0, Math.min(x, rect.width)),
      y: Math.max(0, Math.min(y, rect.height)),
    });
  };

  const handleMouseEnter = () => setIsInside(true);
  const handleMouseLeave = () => setIsInside(false);

  return (
    <div
      ref={trackerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        width: "400px",
        height: "300px",
        border: "2px solid black",
        position: "relative",
        backgroundColor: "#f0f0f0",
      }}
    >
      {isInside && (
        <div
          style={{
            position: "absolute",
            left: position.x - 5,
            top: position.y - 5,
            width: "10px",
            height: "10px",
            backgroundColor: "red",
            borderRadius: "50%",
            pointerEvents: "none",
          }}
        />
      )}
      <div style={{ padding: "10px" }}>
        X: {position.x.toFixed(0)}, Y: {position.y.toFixed(0)}
      </div>
    </div>
  );
}

// 16. Accordion with Height Animation
function Accordion({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (isOpen) {
      setHeight(contentRef.current.scrollHeight);
    } else {
      setHeight(0);
    }
  }, [isOpen]);

  return (
    <div style={{ border: "1px solid #ccc", margin: "10px 0" }}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: "100%",
          padding: "10px",
          textAlign: "left",
          backgroundColor: "#f0f0f0",
          border: "none",
          cursor: "pointer",
        }}
      >
        {title} {isOpen ? "▼" : "▶"}
      </button>

      <div
        ref={contentRef}
        style={{
          height: `${height}px`,
          overflow: "hidden",
          transition: "height 0.3s ease",
        }}
      >
        <div style={{ padding: "10px" }}>{children}</div>
      </div>
    </div>
  );
}

// 17. Textarea Auto-resize
function AutoResizeTextarea() {
  const [value, setValue] = useState("");
  const textareaRef = useRef(null);

  const handleChange = (e) => {
    setValue(e.target.value);

    // Reset height to auto to get the correct scrollHeight
    textareaRef.current.style.height = "auto";
    // Set new height
    textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
  };

  return (
    <textarea
      ref={textareaRef}
      value={value}
      onChange={handleChange}
      style={{
        width: "100%",
        minHeight: "50px",
        padding: "10px",
        resize: "none",
        overflow: "hidden",
      }}
      placeholder="Type something... (auto-resizes)"
    />
  );
}

// 18. Copy to Clipboard with Feedback
function CopyToClipboard({ text }) {
  const [copied, setCopied] = useState(false);
  const buttonRef = useRef(null);
  const timeoutRef = useRef(null);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);

      // Provide visual feedback on button
      buttonRef.current.style.backgroundColor = "#4CAF50";
      buttonRef.current.style.color = "white";

      // Reset after 2 seconds
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      timeoutRef.current = setTimeout(() => {
        setCopied(false);
        buttonRef.current.style.backgroundColor = "";
        buttonRef.current.style.color = "";
      }, 2000);
    } catch (err) {
      console.error("Failed to copy:", err);
    }
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
      <span>{text}</span>
      <button
        ref={buttonRef}
        onClick={handleCopy}
        style={{
          padding: "5px 10px",
          cursor: "pointer",
          transition: "all 0.3s",
        }}
      >
        {copied ? "Copied!" : "Copy"}
      </button>
    </div>
  );
}

// 19. Smooth Scroll to Element
function SmoothScroll() {
  const sectionRefs = {
    home: useRef(null),
    about: useRef(null),
    services: useRef(null),
    contact: useRef(null),
  };

  const scrollToSection = (section) => {
    sectionRefs[section].current.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <div>
      <nav
        style={{
          position: "fixed",
          top: 0,
          background: "white",
          padding: "10px",
        }}
      >
        {Object.keys(sectionRefs).map((section) => (
          <button
            key={section}
            onClick={() => scrollToSection(section)}
            style={{ margin: "0 5px" }}
          >
            {section.charAt(0).toUpperCase() + section.slice(1)}
          </button>
        ))}
      </nav>

      <div style={{ marginTop: "60px" }}>
        <div
          ref={sectionRefs.home}
          style={{ height: "100vh", background: "#ffebee" }}
        >
          <h2>Home Section</h2>
        </div>
        <div
          ref={sectionRefs.about}
          style={{ height: "100vh", background: "#e3f2fd" }}
        >
          <h2>About Section</h2>
        </div>
        <div
          ref={sectionRefs.services}
          style={{ height: "100vh", background: "#e8f5e8" }}
        >
          <h2>Services Section</h2>
        </div>
        <div
          ref={sectionRefs.contact}
          style={{ height: "100vh", background: "#fff3e0" }}
        >
          <h2>Contact Section</h2>
        </div>
      </div>
    </div>
  );
}

// 20. Stopwatch with Lap Times
function StopwatchWithLaps() {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [laps, setLaps] = useState([]);
  const timerRef = useRef(null);
  const startTimeRef = useRef(null);

  const startStopwatch = () => {
    setIsRunning(true);
    startTimeRef.current = Date.now() - time * 1000;

    timerRef.current = setInterval(() => {
      const elapsed = (Date.now() - startTimeRef.current) / 1000;
      setTime(elapsed);
    }, 10); // Update every 10ms for smooth display
  };

  const stopStopwatch = () => {
    setIsRunning(false);
    clearInterval(timerRef.current);
  };

  const resetStopwatch = () => {
    stopStopwatch();
    setTime(0);
    setLaps([]);
  };

  const recordLap = () => {
    setLaps((prev) => [...prev, time]);
  };

  const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    const milliseconds = Math.floor((timeInSeconds % 1) * 100);

    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}.${milliseconds.toString().padStart(2, "0")}`;
  };

  useEffect(() => {
    return () => clearInterval(timerRef.current);
  }, []);

  return (
    <div>
      <h2>{formatTime(time)}</h2>

      <button onClick={startStopwatch} disabled={isRunning}>
        Start
      </button>
      <button onClick={stopStopwatch} disabled={!isRunning}>
        Stop
      </button>
      <button onClick={resetStopwatch}>Reset</button>
      <button onClick={recordLap} disabled={!isRunning}>
        Lap
      </button>

      {laps.length > 0 && (
        <div>
          <h3>Laps</h3>
          <ul>
            {laps.map((lapTime, index) => (
              <li key={index}>
                Lap {index + 1}: {formatTime(lapTime)}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

// 21. Dynamic Import/Code Splitting
function DynamicComponent({ componentPath }) {
  const [Component, setComponent] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  useEffect(() => {
    mountedRef.current = true;

    const loadComponent = async () => {
      setLoading(true);
      setError(null);

      try {
        const module = await import(/* @vite-ignore */ componentPath);

        if (mountedRef.current) {
          setComponent(() => module.default);
        }
      } catch (err) {
        if (mountedRef.current) {
          setError(err.message);
        }
      } finally {
        if (mountedRef.current) {
          setLoading(false);
        }
      }
    };

    loadComponent();

    return () => {
      mountedRef.current = false;
    };
  }, [componentPath]);

  if (loading) return <div>Loading component...</div>;
  if (error) return <div>Error loading component: {error}</div>;
  if (!Component) return null;

  return <Component />;
}

// 22. WebSocket Connection Manager
function useWebSocketWithRef(url) {
  const [messages, setMessages] = useState([]);
  const [isConnected, setIsConnected] = useState(false);
  const wsRef = useRef(null);
  const reconnectTimeoutRef = useRef(null);
  const reconnectAttemptsRef = useRef(0);

  const connect = () => {
    wsRef.current = new WebSocket(url);

    wsRef.current.onopen = () => {
      setIsConnected(true);
      reconnectAttemptsRef.current = 0;
    };

    wsRef.current.onclose = () => {
      setIsConnected(false);

      // Attempt to reconnect with exponential backoff
      const timeout = Math.min(
        1000 * Math.pow(2, reconnectAttemptsRef.current),
        30000,
      );
      reconnectAttemptsRef.current++;

      reconnectTimeoutRef.current = setTimeout(connect, timeout);
    };

    wsRef.current.onmessage = (event) => {
      setMessages((prev) => [...prev, JSON.parse(event.data)]);
    };
  };

  const disconnect = () => {
    if (reconnectTimeoutRef.current) {
      clearTimeout(reconnectTimeoutRef.current);
    }

    if (wsRef.current) {
      wsRef.current.close();
      wsRef.current = null;
    }
  };

  const sendMessage = (message) => {
    if (wsRef.current && isConnected) {
      wsRef.current.send(JSON.stringify(message));
    }
  };

  useEffect(() => {
    connect();

    return () => {
      disconnect();
    };
  }, [url]);

  return { messages, isConnected, sendMessage };
}

// 23. Form with Field Arrays
function DynamicForm() {
  const [fields, setFields] = useState([]);
  const nextIdRef = useRef(0);
  const fieldRefs = useRef({});

  const addField = () => {
    const id = nextIdRef.current++;
    setFields((prev) => [...prev, { id, value: "", type: "text" }]);

    // Focus the new field after render
    setTimeout(() => {
      if (fieldRefs.current[id]) {
        fieldRefs.current[id].focus();
      }
    }, 0);
  };

  const removeField = (id) => {
    setFields((prev) => prev.filter((field) => field.id !== id));
    delete fieldRefs.current[id];
  };

  const updateField = (id, value) => {
    setFields((prev) =>
      prev.map((field) => (field.id === id ? { ...field, value } : field)),
    );
  };

  return (
    <div>
      <button onClick={addField}>Add Field</button>

      {fields.map((field) => (
        <div key={field.id} style={{ margin: "10px 0" }}>
          <input
            ref={(el) => (fieldRefs.current[field.id] = el)}
            type={field.type}
            value={field.value}
            onChange={(e) => updateField(field.id, e.target.value)}
          />
          <select
            value={field.type}
            onChange={(e) => {
              setFields((prev) =>
                prev.map((f) =>
                  f.id === field.id ? { ...f, type: e.target.value } : f,
                ),
              );
            }}
          >
            <option value="text">Text</option>
            <option value="number">Number</option>
            <option value="email">Email</option>
            <option value="password">Password</option>
          </select>
          <button onClick={() => removeField(field.id)}>Remove</button>
        </div>
      ))}
    </div>
  );
}

// 24. Resizable Panel
function ResizablePanel() {
  const [width, setWidth] = useState(300);
  const [isResizing, setIsResizing] = useState(false);
  const panelRef = useRef(null);
  const startXRef = useRef(0);
  const startWidthRef = useRef(0);

  const startResize = (e) => {
    setIsResizing(true);
    startXRef.current = e.clientX;
    startWidthRef.current = width;

    document.addEventListener("mousemove", handleResize);
    document.addEventListener("mouseup", stopResize);
  };

  const handleResize = (e) => {
    if (!isResizing) return;

    const dx = e.clientX - startXRef.current;
    const newWidth = Math.max(200, Math.min(600, startWidthRef.current + dx));
    setWidth(newWidth);
  };

  const stopResize = () => {
    setIsResizing(false);
    document.removeEventListener("mousemove", handleResize);
    document.removeEventListener("mouseup", stopResize);
  };

  useEffect(() => {
    return () => {
      document.removeEventListener("mousemove", handleResize);
      document.removeEventListener("mouseup", stopResize);
    };
  }, []);

  return (
    <div style={{ display: "flex", height: "400px", border: "1px solid #ccc" }}>
      <div
        ref={panelRef}
        style={{
          width: `${width}px`,
          backgroundColor: "#f0f0f0",
          padding: "10px",
          position: "relative",
          overflow: "auto",
        }}
      >
        <p>Resizable Panel</p>
        <p>Current width: {width}px</p>
        <p>Drag the handle to resize</p>
      </div>

      <div
        onMouseDown={startResize}
        style={{
          width: "5px",
          backgroundColor: "#ccc",
          cursor: "col-resize",
          transition: isResizing ? "none" : "background-color 0.2s",
        }}
        onMouseEnter={(e) => (e.target.style.backgroundColor = "#999")}
        onMouseLeave={(e) => (e.target.style.backgroundColor = "#ccc")}
      />

      <div style={{ flex: 1, padding: "10px", backgroundColor: "#fff" }}>
        <p>Main Content Area</p>
      </div>
    </div>
  );
}

// 25. OTP/Verification Code Input
function OTPInput({ length = 6, onComplete }) {
  const [values, setValues] = useState(Array(length).fill(""));
  const inputRefs = useRef([]);

  const handleChange = (index, e) => {
    const value = e.target.value;

    // Only allow single digit
    if (value.length > 1) return;

    const newValues = [...values];
    newValues[index] = value;
    setValues(newValues);

    // Move to next input if value entered
    if (value && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Check if all fields are filled
    if (newValues.every((v) => v !== "")) {
      onComplete(newValues.join(""));
    }
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input on backspace
    if (e.key === "Backspace" && !values[index] && index > 0) {
      inputRefs.current[index - 1].focus();
    }

    // Move to next input on right arrow
    if (e.key === "ArrowRight" && index < length - 1) {
      inputRefs.current[index + 1].focus();
    }

    // Move to previous input on left arrow
    if (e.key === "ArrowLeft" && index > 0) {
      inputRefs.current[index - 1].focus();
    }
  };

  const handlePaste = (e) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData("text/plain").slice(0, length);

    if (/^\d+$/.test(pastedData)) {
      const newValues = [...values];
      for (let i = 0; i < pastedData.length; i++) {
        newValues[i] = pastedData[i];
      }
      setValues(newValues);

      // Focus the last filled input
      const lastIndex = Math.min(pastedData.length - 1, length - 1);
      inputRefs.current[lastIndex].focus();

      if (newValues.every((v) => v !== "")) {
        onComplete(newValues.join(""));
      }
    }
  };

  return (
    <div style={{ display: "flex", gap: "10px" }}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <input
            key={index}
            ref={(el) => (inputRefs.current[index] = el)}
            type="text"
            maxLength={1}
            value={values[index]}
            onChange={(e) => handleChange(index, e)}
            onKeyDown={(e) => handleKeyDown(index, e)}
            onPaste={handlePaste}
            style={{
              width: "50px",
              height: "50px",
              textAlign: "center",
              fontSize: "24px",
              border: "2px solid #ccc",
              borderRadius: "4px",
            }}
          />
        ))}
    </div>
  );
}
```

## **8. Custom Hooks - 25+ Scenarios**

```jsx
// 1. useLocalStorage Hook
function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.log(error);
      return initialValue;
    }
  });

  const setValue = (value) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.log(error);
    }
  };

  return [storedValue, setValue];
}

// Usage
function ThemePreference() {
  const [theme, setTheme] = useLocalStorage("theme", "light");

  return (
    <div className={theme}>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Toggle Theme
      </button>
    </div>
  );
}

// 2. useFetch Hook
function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await fetch(url, {
          ...options,
          signal: abortController.signal,
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }

        const result = await response.json();
        setData(result);
        setError(null);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchData();

    return () => abortController.abort();
  }, [url]);

  return { data, loading, error };
}

// Usage
function UserProfile({ userId }) {
  const { data: user, loading, error } = useFetch(`/api/users/${userId}`);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  return <div>{user?.name}</div>;
}

// 3. useDebounce Hook
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handler);
  }, [value, delay]);

  return debouncedValue;
}

// Usage
function SearchComponent() {
  const [searchTerm, setSearchTerm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm, 500);

  useEffect(() => {
    if (debouncedSearchTerm) {
      // API call
      console.log("Searching for:", debouncedSearchTerm);
    }
  }, [debouncedSearchTerm]);

  return (
    <input
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      placeholder="Search..."
    />
  );
}

// 4. useThrottle Hook
function useThrottle(value, limit) {
  const [throttledValue, setThrottledValue] = useState(value);
  const lastRan = useRef(Date.now());

  useEffect(() => {
    const handler = setTimeout(
      () => {
        if (Date.now() - lastRan.current >= limit) {
          setThrottledValue(value);
          lastRan.current = Date.now();
        }
      },
      limit - (Date.now() - lastRan.current),
    );

    return () => clearTimeout(handler);
  }, [value, limit]);

  return throttledValue;
}

// Usage
function ScrollPosition() {
  const [scrollY, setScrollY] = useState(0);
  const throttledScrollY = useThrottle(scrollY, 100);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return <div>Throttled Scroll: {throttledScrollY}px</div>;
}

// 5. useToggle Hook
function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  const toggle = useCallback(() => {
    setValue((v) => !v);
  }, []);

  const setTrue = useCallback(() => setValue(true), []);
  const setFalse = useCallback(() => setValue(false), []);

  return [value, { toggle, setTrue, setFalse }];
}

// Usage
function ToggleExample() {
  const [isModalOpen, modalActions] = useToggle(false);

  return (
    <div>
      <button onClick={modalActions.toggle}>
        {isModalOpen ? "Close" : "Open"} Modal
      </button>
      {isModalOpen && (
        <div className="modal">
          <h2>Modal Content</h2>
          <button onClick={modalActions.setFalse}>Close</button>
        </div>
      )}
    </div>
  );
}

// 6. useWindowSize Hook
function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  });

  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return windowSize;
}

// Usage
function ResponsiveComponent() {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return <div>{isMobile ? <MobileView /> : <DesktopView />}</div>;
}

// 7. useClickOutside Hook
function useClickOutside(ref, handler) {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };

    document.addEventListener("mousedown", listener);
    document.addEventListener("touchstart", listener);

    return () => {
      document.removeEventListener("mousedown", listener);
      document.removeEventListener("touchstart", listener);
    };
  }, [ref, handler]);
}

// Usage
function Dropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useClickOutside(dropdownRef, () => setIsOpen(false));

  return (
    <div ref={dropdownRef}>
      <button onClick={() => setIsOpen(!isOpen)}>Toggle Dropdown</button>
      {isOpen && (
        <div className="dropdown-menu">
          <div>Option 1</div>
          <div>Option 2</div>
          <div>Option 3</div>
        </div>
      )}
    </div>
  );
}

// 8. useKeyPress Hook
function useKeyPress(targetKey) {
  const [keyPressed, setKeyPressed] = useState(false);

  useEffect(() => {
    const downHandler = ({ key }) => {
      if (key === targetKey) setKeyPressed(true);
    };

    const upHandler = ({ key }) => {
      if (key === targetKey) setKeyPressed(false);
    };

    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);

    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, [targetKey]);

  return keyPressed;
}

// Usage
function KeyPressDetector() {
  const escapePressed = useKeyPress("Escape");
  const enterPressed = useKeyPress("Enter");

  return (
    <div>
      <p>Escape is {escapePressed ? "pressed" : "not pressed"}</p>
      <p>Enter is {enterPressed ? "pressed" : "not pressed"}</p>
    </div>
  );
}

// 9. useMediaQuery Hook
function useMediaQuery(query) {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    if (media.matches !== matches) {
      setMatches(media.matches);
    }

    const listener = () => setMatches(media.matches);
    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

// Usage
function ResponsiveLayout() {
  const isDesktop = useMediaQuery("(min-width: 1024px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isMobile = useMediaQuery("(max-width: 767px)");

  return (
    <div>
      {isDesktop && <DesktopLayout />}
      {isTablet && <TabletLayout />}
      {isMobile && <MobileLayout />}
    </div>
  );
}

// 10. useHover Hook
function useHover() {
  const [isHovered, setIsHovered] = useState(false);
  const ref = useRef(null);

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => setIsHovered(false);

  useEffect(() => {
    const node = ref.current;
    if (node) {
      node.addEventListener("mouseenter", handleMouseEnter);
      node.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        node.removeEventListener("mouseenter", handleMouseEnter);
        node.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, []);

  return [ref, isHovered];
}

// Usage
function HoverComponent() {
  const [ref, isHovered] = useHover();

  return (
    <div
      ref={ref}
      style={{
        padding: "20px",
        backgroundColor: isHovered ? "lightblue" : "white",
        transition: "background-color 0.3s",
      }}
    >
      {isHovered ? "I am being hovered!" : "Hover over me!"}
    </div>
  );
}

// 11. useForm Hook
function useForm(initialValues, validate) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const fieldValue = type === "checkbox" ? checked : value;

    setValues((prev) => ({
      ...prev,
      [name]: fieldValue,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    setTouched((prev) => ({
      ...prev,
      [name]: true,
    }));

    if (validate) {
      const validationErrors = validate(values);
      setErrors((prev) => ({
        ...prev,
        [name]: validationErrors[name] || "",
      }));
    }
  };

  const handleSubmit = async (onSubmit) => {
    setTouched(
      Object.keys(values).reduce((acc, key) => ({ ...acc, [key]: true }), {}),
    );

    if (validate) {
      const validationErrors = validate(values);
      setErrors(validationErrors);

      if (Object.keys(validationErrors).length > 0) {
        return;
      }
    }

    setIsSubmitting(true);
    try {
      await onSubmit(values);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setErrors({});
    setTouched({});
    setIsSubmitting(false);
  };

  const setFieldValue = (name, value) => {
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  return {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
    setFieldValue,
  };
}

// Usage
function RegistrationForm() {
  const validate = (values) => {
    const errors = {};

    if (!values.username) {
      errors.username = "Username is required";
    } else if (values.username.length < 3) {
      errors.username = "Username must be at least 3 characters";
    }

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(values.email)) {
      errors.email = "Email is invalid";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    }

    return errors;
  };

  const {
    values,
    errors,
    touched,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    resetForm,
  } = useForm({ username: "", email: "", password: "" }, validate);

  const onSubmit = async (formData) => {
    await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify(formData),
    });
    resetForm();
    alert("Registration successful!");
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        handleSubmit(onSubmit);
      }}
    >
      <div>
        <input
          name="username"
          value={values.username}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Username"
        />
        {touched.username && errors.username && (
          <span style={{ color: "red" }}>{errors.username}</span>
        )}
      </div>

      <div>
        <input
          name="email"
          value={values.email}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Email"
        />
        {touched.email && errors.email && (
          <span style={{ color: "red" }}>{errors.email}</span>
        )}
      </div>

      <div>
        <input
          name="password"
          type="password"
          value={values.password}
          onChange={handleChange}
          onBlur={handleBlur}
          placeholder="Password"
        />
        {touched.password && errors.password && (
          <span style={{ color: "red" }}>{errors.password}</span>
        )}
      </div>

      <button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Submitting..." : "Register"}
      </button>
    </form>
  );
}

// 12. useIntersectionObserver Hook
function useIntersectionObserver(options = {}) {
  const [entry, setEntry] = useState(null);
  const [element, setElement] = useState(null);

  const ref = useCallback((node) => {
    if (node) setElement(node);
  }, []);

  useEffect(() => {
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setEntry(entry);
    }, options);

    observer.observe(element);

    return () => observer.disconnect();
  }, [element, options]);

  return [ref, entry];
}

// Usage
function LazyImage({ src, alt }) {
  const [ref, entry] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "50px",
  });

  return (
    <img
      ref={ref}
      src={entry?.isIntersecting ? src : ""}
      alt={alt}
      style={{
        width: "100%",
        height: "auto",
        transition: "opacity 0.3s",
        opacity: entry?.isIntersecting ? 1 : 0,
      }}
    />
  );
}

// 13. usePrevious Hook
function usePrevious(value) {
  const ref = useRef();

  useEffect(() => {
    ref.current = value;
  }, [value]);

  return ref.current;
}

// Usage
function CounterWithPrevious() {
  const [count, setCount] = useState(0);
  const prevCount = usePrevious(count);

  return (
    <div>
      <p>Current: {count}</p>
      <p>Previous: {prevCount}</p>
      <button onClick={() => setCount((c) => c + 1)}>Increment</button>
    </div>
  );
}

// 14. useTimeout Hook
function useTimeout(callback, delay) {
  const savedCallback = useRef(callback);

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setTimeout(() => savedCallback.current(), delay);
    return () => clearTimeout(id);
  }, [delay]);
}

// Usage
function DelayedMessage() {
  const [show, setShow] = useState(false);

  useTimeout(() => {
    setShow(true);
  }, 3000);

  return <div>{show ? "Message revealed after 3 seconds!" : "Waiting..."}</div>;
}

// 15. useInterval Hook
function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;

    const id = setInterval(() => savedCallback.current(), delay);
    return () => clearInterval(id);
  }, [delay]);
}

// Usage
function Timer() {
  const [count, setCount] = useState(0);

  useInterval(() => {
    setCount((c) => c + 1);
  }, 1000);

  return <div>Seconds: {count}</div>;
}

// 16. useAsync Hook
function useAsync(asyncFunction, immediate = true) {
  const [status, setStatus] = useState("idle");
  const [value, setValue] = useState(null);
  const [error, setError] = useState(null);

  const execute = useCallback(() => {
    setStatus("pending");
    setValue(null);
    setError(null);

    return asyncFunction()
      .then((response) => {
        setValue(response);
        setStatus("success");
        return response;
      })
      .catch((error) => {
        setError(error);
        setStatus("error");
        return Promise.reject(error);
      });
  }, [asyncFunction]);

  useEffect(() => {
    if (immediate) {
      execute();
    }
  }, [execute, immediate]);

  return { execute, status, value, error };
}

// Usage
function UserData() {
  const {
    execute,
    status,
    value: user,
    error,
  } = useAsync(() => fetch("/api/user").then((res) => res.json()));

  if (status === "idle") return <div>Ready to fetch</div>;
  if (status === "pending") return <div>Loading...</div>;
  if (status === "error") return <div>Error: {error.message}</div>;

  return (
    <div>
      <h2>{user.name}</h2>
      <button onClick={execute}>Refetch</button>
    </div>
  );
}

// 17. useGeolocation Hook
function useGeolocation(options = {}) {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const getLocation = useCallback(() => {
    if (!navigator.geolocation) {
      setError("Geolocation not supported");
      return;
    }

    setLoading(true);
    navigator.geolocation.getCurrentPosition(
      (pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lng: pos.coords.longitude,
          accuracy: pos.coords.accuracy,
        });
        setLoading(false);
      },
      (err) => {
        setError(err.message);
        setLoading(false);
      },
      options,
    );
  }, [options]);

  useEffect(() => {
    getLocation();
  }, [getLocation]);

  return { location, error, loading, getLocation };
}

// Usage
function LocationDisplay() {
  const { location, error, loading } = useGeolocation();

  if (loading) return <div>Getting location...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!location) return <div>No location available</div>;

  return (
    <div>
      <p>Latitude: {location.lat}</p>
      <p>Longitude: {location.lng}</p>
      <p>Accuracy: ±{location.accuracy}m</p>
    </div>
  );
}

// 18. useClipboard Hook
function useClipboard() {
  const [copied, setCopied] = useState(false);
  const [error, setError] = useState(null);

  const copy = useCallback(async (text) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setError(null);

      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      setError(err.message);
      setCopied(false);
    }
  }, []);

  return { copied, error, copy };
}

// Usage
function CopyButton({ text }) {
  const { copied, error, copy } = useClipboard();

  return (
    <div>
      <button onClick={() => copy(text)}>{copied ? "Copied!" : "Copy"}</button>
      {error && <span style={{ color: "red" }}>{error}</span>}
    </div>
  );
}

// 19. useNetworkStatus Hook
function useNetworkStatus() {
  const [status, setStatus] = useState({
    online: navigator.onLine,
    downlink: null,
    effectiveType: null,
    rtt: null,
  });

  useEffect(() => {
    const handleOnline = () => setStatus((s) => ({ ...s, online: true }));
    const handleOffline = () => setStatus((s) => ({ ...s, online: false }));

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    if ("connection" in navigator) {
      const connection = navigator.connection;

      const updateNetworkInfo = () => {
        setStatus((s) => ({
          ...s,
          downlink: connection.downlink,
          effectiveType: connection.effectiveType,
          rtt: connection.rtt,
        }));
      };

      updateNetworkInfo();
      connection.addEventListener("change", updateNetworkInfo);

      return () => {
        connection.removeEventListener("change", updateNetworkInfo);
        window.removeEventListener("online", handleOnline);
        window.removeEventListener("offline", handleOffline);
      };
    }

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return status;
}

// Usage
function NetworkIndicator() {
  const { online, effectiveType, downlink } = useNetworkStatus();

  return (
    <div>
      <div>Status: {online ? "🟢 Online" : "🔴 Offline"}</div>
      {online && (
        <>
          <div>Connection: {effectiveType}</div>
          <div>Speed: {downlink} Mbps</div>
        </>
      )}
    </div>
  );
}

// 20. useBattery Hook
function useBattery() {
  const [battery, setBattery] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!("getBattery" in navigator)) {
      setError("Battery API not supported");
      return;
    }

    const updateBattery = (batteryManager) => {
      setBattery({
        level: batteryManager.level * 100,
        charging: batteryManager.charging,
        chargingTime: batteryManager.chargingTime,
        dischargingTime: batteryManager.dischargingTime,
      });
    };

    navigator.getBattery().then((batteryManager) => {
      updateBattery(batteryManager);

      batteryManager.addEventListener("levelchange", () =>
        updateBattery(batteryManager),
      );
      batteryManager.addEventListener("chargingchange", () =>
        updateBattery(batteryManager),
      );
      batteryManager.addEventListener("chargingtimechange", () =>
        updateBattery(batteryManager),
      );
      batteryManager.addEventListener("dischargingtimechange", () =>
        updateBattery(batteryManager),
      );
    });
  }, []);

  return { battery, error };
}

// Usage
function BatteryStatus() {
  const { battery, error } = useBattery();

  if (error) return <div>{error}</div>;
  if (!battery) return <div>Loading battery info...</div>;

  return (
    <div>
      <div>Level: {battery.level}%</div>
      <div>Status: {battery.charging ? "⚡ Charging" : "🔋 Discharging"}</div>
      {battery.charging && battery.chargingTime < Infinity && (
        <div>Time to full: {Math.round(battery.chargingTime / 60)} minutes</div>
      )}
    </div>
  );
}

// 21. useSpeechSynthesis Hook
function useSpeechSynthesis() {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);

  useEffect(() => {
    if ("speechSynthesis" in window) {
      setSupported(true);

      const loadVoices = () => {
        const availableVoices = window.speechSynthesis.getVoices();
        setVoices(availableVoices);
        if (availableVoices.length > 0) {
          setSelectedVoice(availableVoices[0]);
        }
      };

      loadVoices();
      window.speechSynthesis.onvoiceschanged = loadVoices;
    }
  }, []);

  const speak = useCallback(
    (text, options = {}) => {
      if (!supported) return;

      const utterance = new SpeechSynthesisUtterance(text);

      if (selectedVoice) utterance.voice = selectedVoice;
      utterance.rate = options.rate || 1;
      utterance.pitch = options.pitch || 1;
      utterance.volume = options.volume || 1;

      utterance.onstart = () => setSpeaking(true);
      utterance.onend = () => setSpeaking(false);
      utterance.onerror = () => setSpeaking(false);

      window.speechSynthesis.cancel();
      window.speechSynthesis.speak(utterance);
    },
    [supported, selectedVoice],
  );

  const cancel = useCallback(() => {
    if (supported) {
      window.speechSynthesis.cancel();
      setSpeaking(false);
    }
  }, [supported]);

  return {
    supported,
    speaking,
    voices,
    selectedVoice,
    setSelectedVoice,
    speak,
    cancel,
  };
}

// Usage
function TextReader({ text }) {
  const { supported, speaking, speak, cancel } = useSpeechSynthesis();

  if (!supported) return <div>Speech synthesis not supported</div>;

  return (
    <div>
      <button onClick={() => speak(text)} disabled={speaking}>
        {speaking ? "Speaking..." : "Read Aloud"}
      </button>
      <button onClick={cancel} disabled={!speaking}>
        Stop
      </button>
    </div>
  );
}

// 22. useVibration Hook
function useVibration() {
  const [supported, setSupported] = useState(false);

  useEffect(() => {
    setSupported("vibrate" in navigator);
  }, []);

  const vibrate = useCallback(
    (pattern) => {
      if (supported) {
        navigator.vibrate(pattern);
      }
    },
    [supported],
  );

  const stop = useCallback(() => {
    if (supported) {
      navigator.vibrate(0);
    }
  }, [supported]);

  return { supported, vibrate, stop };
}

// Usage
function VibrationButton() {
  const { supported, vibrate } = useVibration();

  if (!supported) return null;

  return <button onClick={() => vibrate(200)}>Vibrate</button>;
}

// 23. useDeviceOrientation Hook
function useDeviceOrientation() {
  const [orientation, setOrientation] = useState({
    alpha: null,
    beta: null,
    gamma: null,
    absolute: false,
  });

  const [permission, setPermission] = useState(null);

  const requestPermission = useCallback(async () => {
    if (typeof DeviceOrientationEvent.requestPermission === "function") {
      try {
        const response = await DeviceOrientationEvent.requestPermission();
        setPermission(response);
        return response;
      } catch (error) {
        console.error(error);
      }
    }
  }, []);

  useEffect(() => {
    if (
      typeof DeviceOrientationEvent.requestPermission === "function" &&
      permission !== "granted"
    ) {
      return;
    }

    const handleOrientation = (event) => {
      setOrientation({
        alpha: event.alpha,
        beta: event.beta,
        gamma: event.gamma,
        absolute: event.absolute,
      });
    };

    window.addEventListener("deviceorientation", handleOrientation);
    return () =>
      window.removeEventListener("deviceorientation", handleOrientation);
  }, [permission]);

  return { orientation, permission, requestPermission };
}

// Usage
function OrientationDisplay() {
  const { orientation, permission, requestPermission } = useDeviceOrientation();

  if (
    typeof DeviceOrientationEvent.requestPermission === "function" &&
    permission !== "granted"
  ) {
    return (
      <button onClick={requestPermission}>Allow Orientation Access</button>
    );
  }

  return (
    <div>
      <p>Alpha (Z-axis): {orientation.alpha?.toFixed(2)}°</p>
      <p>Beta (X-axis): {orientation.beta?.toFixed(2)}°</p>
      <p>Gamma (Y-axis): {orientation.gamma?.toFixed(2)}°</p>
    </div>
  );
}

// 24. useIdle Hook
function useIdle(timeout = 60000) {
  const [isIdle, setIsIdle] = useState(false);
  const lastActiveRef = useRef(Date.now());
  const timeoutRef = useRef(null);

  const resetIdle = useCallback(() => {
    lastActiveRef.current = Date.now();
    setIsIdle(false);

    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    timeoutRef.current = setTimeout(() => {
      setIsIdle(true);
    }, timeout);
  }, [timeout]);

  useEffect(() => {
    const events = [
      "mousedown",
      "mousemove",
      "keydown",
      "scroll",
      "touchstart",
      "click",
    ];

    resetIdle();

    events.forEach((event) => {
      window.addEventListener(event, resetIdle);
    });

    return () => {
      events.forEach((event) => {
        window.removeEventListener(event, resetIdle);
      });

      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [resetIdle]);

  return isIdle;
}

// Usage
function IdleMonitor() {
  const isIdle = useIdle(5000); // 5 seconds

  return (
    <div>
      <p>User is {isIdle ? "idle" : "active"}</p>
    </div>
  );
}

// 25. useLocalStorage with Sync
function useLocalStorageSync(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === key) {
        try {
          setStoredValue(JSON.parse(e.newValue));
        } catch (error) {
          setStoredValue(e.newValue);
        }
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, [key]);

  const setValue = useCallback(
    (value) => {
      try {
        const valueToStore =
          value instanceof Function ? value(storedValue) : value;
        setStoredValue(valueToStore);
        window.localStorage.setItem(key, JSON.stringify(valueToStore));

        // Dispatch custom event for same-tab updates
        const event = new CustomEvent("localStorageChange", {
          detail: { key, newValue: JSON.stringify(valueToStore) },
        });
        window.dispatchEvent(event);
      } catch (error) {
        console.log(error);
      }
    },
    [key, storedValue],
  );

  return [storedValue, setValue];
}

// Usage with multiple tabs
function TabSyncExample() {
  const [preferences, setPreferences] = useLocalStorageSync("preferences", {
    theme: "light",
    fontSize: "medium",
  });

  return (
    <div>
      <select
        value={preferences.theme}
        onChange={(e) =>
          setPreferences({
            ...preferences,
            theme: e.target.value,
          })
        }
      >
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>

      <select
        value={preferences.fontSize}
        onChange={(e) =>
          setPreferences({
            ...preferences,
            fontSize: e.target.value,
          })
        }
      >
        <option value="small">Small</option>
        <option value="medium">Medium</option>
        <option value="large">Large</option>
      </select>

      <div
        className={preferences.theme}
        style={{ fontSize: preferences.fontSize }}
      >
        Current preferences are synced across tabs!
      </div>
    </div>
  );
}
```

That's 25+ scenarios for **useRef Hook** and 25+ scenarios for **Custom Hooks** with complete working examples for each! Each example is self-contained and demonstrates real-world usage patterns.
