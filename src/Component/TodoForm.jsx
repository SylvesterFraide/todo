import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input
    })

    setInput("");
  }

  return (
    <>
      {" "}
      <form className="todo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="text"
          value={input}
          placeholder="Add a new todo"
          required
          onChange={(e) => setInput(e.target.value)}
        />
        <button type="submit" className="todo-form">
          Add Todo
        </button>
      </form>
    </>
  );
}
export default TodoForm;
