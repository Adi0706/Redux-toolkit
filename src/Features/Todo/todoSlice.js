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
    editTodo: (state, action) => {
      // Update the todo in the array by mapping over it and modifying the matching one.
      return {
        ...state, // knowing the current state of our todo list 
        todos: state.todos.map(todo => {
          if (todo.id === action.payload.id) {
            // If the `id` matches, update the `text`
            return {
              ...todo,
              text: action.payload.text
            };
          } else {
            return todo; // otherwise, return the todo item unchanged
          }
        })
      };
    },

  },
});

//exporting all the methods in the reducers ...
export const {addTodo,removeTodo,editTodo} = todoSlice.actions ; // we export them as actions 

//exporting the entire reducer itself ...cuz this entire reducer needs to be wired up with the store.
export default todoSlice.reducer ; 