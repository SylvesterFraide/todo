import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Todo = ({ task, toggleComplete, deleteTodo, editTodo }) => {
  return (
    <div className="todo">
      <p
        onClick={() => toggleComplete(task.id)}
        className={`${task.completed ? "completed" : ""}`}
      >
        {task.task}
      </p>

      <div>
        <DeleteIcon onClick={() => deleteTodo(task.id)} />
        <EditIcon onClick={() => editTodo(task.id)} />
      </div>
    </div>
  );
};
export default Todo;