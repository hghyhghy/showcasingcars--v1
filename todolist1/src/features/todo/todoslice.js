import {createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
    todos: [{id: 1, text: "Hello Recruiters"}]
}



export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: nanoid(), 
                text: action.payload
            }
            state.todos.push(todo)
        },

        updateTodo: (state, action) => {
            return state.map((todo) => {
            const item = todo.item;
            if (todo.id === action.payload.id) {
               return {
                  ...todo,
                  [item]: action.payload.text,
                };
              }
              return todo;
            });
          },
      
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload )
        },
    }
})

export const {addTodo, removeTodo, updateTodo} = todoSlice.actions

export default todoSlice.reducer


