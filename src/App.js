import React from 'react';

function App() {
  return (
    <>
      <div className='flex flex-col items-center justify-center p-4 border border-solid border-black'>
        <p className='text-white font-bold text-3xl'>ToDo List- Redux Toolkit</p>
        <div className='h-full flex mt-12'>
          <input 
            placeholder='Enter task here...'
            className='rounded-xl py-2 px-4 border-2 border-gray-200 focus:border-blue-500 focus:outline-none'
          ></input>
          <button className='btn text-sm bg-blue-300 text-white px-4 py-2 rounded-xl ml-2'>ADD TASK</button>
        </div>
      </div>
    </>
  );
}

export default App;
