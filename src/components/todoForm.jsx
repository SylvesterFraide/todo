import React, { useState } from "react";

const TodoForm = ({addTodo}) => {
  const [value, setValue] = useState("");
   
  const handleSubmit = (e) => {
    e.preventDefault();
    addTodo(value);

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

      <input type="button" value="Add Task" />
    </form>
  );
};

export default TodoForm;
