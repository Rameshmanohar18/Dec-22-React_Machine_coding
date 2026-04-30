import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState([
    { text: "Task 1", completed: false },
    { text: "Task 2", completed: false },
  ]);
  const [task, setTask] = useState("");
  const [editIndex, setEditIndex] = useState(null);

  const addOrUpdateTask = () => {
    if (task.trim() === "") return;

    if (editIndex !== null) {
      const updated = [...list];
      updated[editIndex].text = task;
      setList(updated);
      setEditIndex(null);
    } else {
      setList([...list, { text: task, completed: false }]);
    }

    setTask("");
  };

  const removeTask = (index) => {
    setList(list.filter((_, i) => i !== index));
  };

  const toggleComplete = (index) => {
    const updated = [...list];
    updated[index].completed = !updated[index].completed;
    setList(updated);
  };
  // Edit task here!
  const editTask = (index) => {
    setTask(list[index].text);
    setEditIndex(index);
  };

  const clearAll = () => {
    setList([]);
  };

  return (
    <div style={{ padding: "20px", maxWidth: "400px" }}>
      <h2> Todo Application</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter your task"
      />

      <button onClick={addOrUpdateTask}>
        {editIndex !== null ? "Update" : "Add"}
      </button>

      <button onClick={clearAll} style={{ marginLeft: "10px" }}>
        Clear All
      </button>

      {list.length === 0 && <p>No tasks found </p>}

      {list.map((item, i) => (
        <div key={i} style={{ marginTop: "10px" }}>
          <span
            onClick={() => toggleComplete(i)}
            style={{
              textDecoration: item.completed ? "line-through" : "none",
              cursor: "pointer",
            }}
          >
            {item.text}
          </span>
  
          <button onClick={() => editTask(i)} style={{ marginLeft: "10px" }}>
            Edit
          </button>

          <button onClick={() => removeTask(i)} style={{ marginLeft: "10px" }}>
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default Todo;
