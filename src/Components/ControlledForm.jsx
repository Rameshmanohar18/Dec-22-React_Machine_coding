import { useState } from "react";

const ControlledForm = () => {
  const [form, setForm] = useState({ name: "", email: "" });

  return (
    <div>
      <input
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <pre>{JSON.stringify(form, null, 2)}</pre>
    </div>
  );
};

export default ControlledForm;
