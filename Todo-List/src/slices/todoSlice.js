import {createSlice} from '@reduxjs/toolkit'

const initialState = {

    // Bhai phle maine {} pass kiya tha aur array ka operation laga rha tha , YA ALLAH !!! , (do not do this again..)
    todoList : []
}

// Aisa object hoga jaha tumhare reducer , actions , constant sabhi ek hi jagah rhenge!!
const todoSlice = createSlice({
    // Kiss naam se bulana chahte ho !! , jaise combineReducer ka key
    name : 'todo',
    initialState,
    // Yaha paar sara reducers ka logic likh sakte ho!
    reducers: {
        addTodo : (state , action) => {
            let todoText = action.payload.todoText;

            // emerJs library (state to ek array hai toh usse array ki tarah use kar sakte , actual mai state ek special hai.. )
            state.todoList.push({id : state.todoList.length + 1 , todoData: todoText , finished : false})
        },
        // Puri stata ka access hai
        editTodo : (state , action) => {
            let todo = action.payload.todo;
            let todoText = action.payload.todoText;



            // const updatedList = state.map(t => {
            //     if(t.id === todo.id){
            //         todo.todoData = todoText;
            //     }
            //     return t;
            // })

            // Direct bhi kar sakte ho!!!
            console.log(state.todoList);
            state.todoList = state.todoList.map(t => {
                if(t.id === todo.id){
                    t.todoData = todoText;
                }
                return t;
            })

            // // new array bhi return kar sakte ho !!!
            // return updatedList;
        },
        todoFinished : (state , action) => {
            let todo = action.payload.todo;
            let isFinished = action.payload.isFinished;
            state.todoList = state.todoList.map(t => {
                if(t.id === todo.id){
                    todo.finished = isFinished;
                }
                return t;
            })
        },
        deleteTodo : (state , action) => {
            let todo = action.payload.todo;
            state.todoList = state.todoList.filter(t => t.id !== todo.id);

        }
    },

})
// Slice bann gya !!!

export const {deleteTodo , addTodo , editTodo , todoFinished} = todoSlice.actions;
export default todoSlice.reducer;