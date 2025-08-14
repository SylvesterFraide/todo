import React, { useState } from "react";
import TodoForm from "./TodoForm";
import CancelIcon from "@mui/icons-material/Cancel";
import EditSquareIcon from "@mui/icons-material/EditSquare";

function Todo({ todos, completeTodo, removeTodo }) {
  const [edit, setEdit] = useState({
    id: null,
    value: "",
  });

  return todos.map((todo, index) => (
    <div
      className={todo.isComplete ? "todo-row complete" : "todo-row"}
      key={index}
    >
      <div key={todo.id} onClick={() => completeTodo(todo.id)}>
        {todo.text}
      </div>
      <div className="icons">
        <CancelIcon className="delete-icon" onClick={() => removeTodo(id)} />
        <EditSquareIcon
          className="edit-icon"
          onClick={() => setEdit({ id: todo.id, value: todo.text })}
        />
      </div>
    </div>
  ));
}

export default Todo;
