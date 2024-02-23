//Slice:helps to create a big object which we use to store the initial state of the "Store " and we collect all the reducers here.

import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = {
  todos: [], // initial state of the todo list is an empty array
};

export const todoSlice = createSlice({
  name: "todo", // name your slices --> cuz there can be many slices in your application like chatapp , login etc.
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // state and action compulsory --> state is used to change the initial state and action is used to send payload(data)
      const todo = {
        id: nanoid(),
        text: action.payload, // coming from add to do handler from app.js
      };
      state.todos.push(todo); // after addTodo is written we push the new state to our todos[] initialstate
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter(
        (item) => item.id !== action.payload // create a new array but dont include my id for the todolist
      );
    },
  },
});

//exporting all the methods in the reducers ...
export const {addTodo,removeTodo} = todoSlice.actions ; // we export them as actions 

//exporting the entire reducer itself ...cuz this entire reducer needs to be wired up with the store.
export default todoSlice.reducer ; 