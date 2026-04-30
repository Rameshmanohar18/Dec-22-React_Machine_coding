import { useState } from "react";

const Todo = () => {
  const [list, setList] = useState(["Task 1", "Task 2"]);

  const remove = (i) => setList(list.filter((_, index) => index !== i));

  return list.map((item, i) => (
    <p key={i}>
      {item} <button onClick={() => remove(i)}>X</button>
    </p>
  ));
};

export default Todo;
