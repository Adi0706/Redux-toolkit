import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { MdDelete, MdEdit } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { removeTodo, editTodo } from '../Features/Todo/todoSlice';

function TodoList() {
  const todos = useSelector(state => state.todos);
  const removeDispatch = useDispatch();
  const editDispatch = useDispatch();

  const [editMode, setEditMode] = useState(null);
  const [editedInput, setEditedInput] = useState('');

  const handleEdit = (id, text) => {
    setEditMode(id); // Set the edit mode for the current todo
    setEditedInput(text); // Set the initial value of the input field
  };

  const handleKeyDown = (event, todo) => {
    if (event.key === 'Enter') {
      setEditMode(null); // Exit edit mode when Enter is pressed
      editDispatch(editTodo({ id: todo.id, text: editedInput }));
    }
  };

  return (
    <>
      <h2 className="text-2xl font-bold mb-4 text-white mt-12">Todo List</h2>
      <ul className="list-none p-0">
        {todos.map((todo) => (
          <li key={todo.id} className="rounded-md bg-blue-200 text-blue-900 px-4 py-2 mb-2 shadow-md flex justify-between">
            {editMode === todo.id ? (
              <input
                className="text-blue-900 border-0 focus:outline-none"
                defaultValue={todo.text}
                onChange={(e) => setEditedInput(e.target.value)}
                onKeyDown={(e) => handleKeyDown(e, todo)}
                onBlur={() => setEditMode(null)} // Exit edit mode when input field loses focus
                autoFocus
              />
            ) : (
              <span className="text-blue-900">{todo.text}</span>
            )}
            <button className='text-white bg-red-400 border-0 py-1 px-2 focus:outline-none rounded-md ml-12'
              onClick={() => removeDispatch(removeTodo(todo.id))}
            ><MdDelete /></button>
            <button className='text-white bg-red-400 border-0 py-1 px-2 focus:outline-none rounded-md ml-12'
              onClick={() => handleEdit(todo.id, todo.text)} // Enter edit mode when the edit button is clicked
            ><MdEdit /></button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default TodoList;
