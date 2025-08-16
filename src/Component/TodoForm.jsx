import React, { useState } from "react";

function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const handleSubmit = (e) => {
    e.preventDefault();

    props.onSubmit({
      id: Date.now(),
      text: input,
    });

    setInput("");
  };

  return (
    <form className="todo-form" onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <input
            type="text"
            name="text"
            className="todo-input-edit"
            value={input}
            placeholder="Update your item"
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="todo-form-updateTodo">Update</button>{" "}
        </>
      ) : (
        <>
          {" "}
          <input
            type="text"
            name="text"
            className="todo-input"
            value={input}
            placeholder="Add a new todo"
            required
            onChange={(e) => setInput(e.target.value)}
          />
          <button className="todo-form-addTodo">Add Todo</button>
        </>
      )}
    </form>
  );
}
export default TodoForm;