
// redux bhi install karna padega aur react - redux bhi install karna padega!!

import {createStore , combineReducers} from 'redux'

// Reducer import
import todoReducer from './reducers/todoReducer';

const reducers = combineReducers({
    todo : todoReducer
})

const store = createStore(reducers);

// Abb hamara store ready ho gya hai

export default store;