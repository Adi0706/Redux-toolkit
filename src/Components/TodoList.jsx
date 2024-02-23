import React from 'react'
import { useSelector } from 'react-redux'
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeTodo } from '../Features/Todo/todoSlice';

function TodoList() {
  const todos = useSelector(state => state.todos)//useSelector gives access to the State of the object in store.
  const removeDispatch=useDispatch();

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-white mt-12">Todo List</h2>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="rounded-md bg-blue-200 text-blue-900 px-4 py-2 mb-2 shadow-md flex justify-between">
            {todo.text}
            <button className='text-white bg-red-400 border-0 py-1 px-2 focus:outline-none rounded-md ml-12'
            onClick={()=>removeDispatch(removeTodo(todo.id))}
            
            ><MdDelete /></button>
          </li>
        ))}
      </ul>
    </>
  )
}

export default TodoList
