import React, { useState } from "react";

const TodoForm = () => {
  const [value, setValue] = useState("");
   
  const handleSubmit = e => {
    e.preventDefault();

    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input
        type=" text"
        value={value}
        placeholder="what is the task about?"
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit">Add Task</button>
    </form>
  );
};

export default TodoForm;
