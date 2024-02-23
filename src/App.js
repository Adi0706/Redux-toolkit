import React from 'react';
import {useDispatch} from 'react-redux' ; // get the values and send it to store 
import {addTodo} from '../src/Features/Todo/todoSlice' // method where we want our functionality to happen 
import { useState } from 'react';
import TodoList from './Components/TodoList';

function App() {

  const [input , setInput] = useState('')
  const dispatch = useDispatch() ;


  const addTodoHandler=(e)=>{//we need a method  to send the data
    e.preventDefault() 
    if(input){
    dispatch(addTodo(input))
    setInput('')
    }else{
      alert("write Something first !")
    }
  }
  return (
    <>
      <div className='flex flex-col items-center justify-center p-4 '>
        <p className='text-white font-bold text-3xl'>ToDo List- Redux Toolkit</p>
        <div className='h-full flex mt-12'>
          <input 
            placeholder='Enter task here...'
            className='rounded-xl py-2 px-4 border-2 border-gray-200 focus:border-blue-500 focus:outline-none'
            value={input}
            onChange={(e)=>setInput(e.target.value)}
          ></input>
          <button type='submit' className='btn text-sm bg-blue-300 text-white px-4 py-2 rounded-xl ml-2' onClick={addTodoHandler}>ADD TASK</button>
        </div>
        <TodoList/>
      </div>
    </>
  );
}

export default App;
