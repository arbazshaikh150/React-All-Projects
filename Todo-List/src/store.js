
// redux bhi install karna padega aur react - redux bhi install karna padega!!

import {createStore , combineReducers} from 'redux'

// Reducer import
// import todoReducer from './reducers/todoReducer';
import { configureStore } from '@reduxjs/toolkit';
import todoReducer from './slices/todoSlice';

// const reducers = combineReducers({
//     todo : todoReducer
// })

// const store = createStore(reducers);

//  slice mai reducerss pass kar rhe the
// Yaha reducer aa rha hai
// Redux toolkit!!!

// Configure Store mdn**
const store = configureStore({
    reducer :{
        todo : todoReducer
    },
    // Redux dev tool install and check all the logs
    // devTools : true,
})
// Abb hamara store ready ho gya hai

export default store;