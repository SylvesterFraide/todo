import React, { useState } from 'react'
import TodoForm from './todoForm';


const TodoWrapper = () => {
   const [todos, setTodos] = useState([]);

   const addTodo = (todos) => {
    setTodos([...todos, {id: uuidv4(), }])
   }

  return (
    <>
      <TodoForm addTodo = {addTodo} />
    </>
  )
}

export default TodoWrapper;