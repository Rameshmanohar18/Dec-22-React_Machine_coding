import { useState } from "react";

const DisableSubmit = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const isValid = name && email;

  return (
    <div>
      <h2>Disable Submit</h2>
      <input placeholder="Name" onChange={(e) => setName(e.target.value)} />
      <input placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
      <button disabled={!isValid}>Submit</button>
    </div>
  );
};

export default DisableSubmit;
