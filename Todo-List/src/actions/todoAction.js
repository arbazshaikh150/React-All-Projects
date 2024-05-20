import { ADD_TODO, DELETE_TODO, EDIT_TODO, FINISH_TODO } from "../constants/actions";

export const todoFinished = (todo , isFinished) => (
    {
        type : FINISH_TODO , payload : {
            todo : todo , 
            isFinished : isFinished
        }
    }
);


export const addTodo = (inputText) => ({
    type : ADD_TODO , payload : {
        // Passing the content for the todo (which is stored in input text)
    todoText: inputText
  }})

export const deleteTodo = (todo) => ({
    type : DELETE_TODO , payload : {
    todo : todo
  }})

export const editTodo = (todo , todoText) => ({
    type : EDIT_TODO , payload : {
    todo , 
    todoText
  }})


