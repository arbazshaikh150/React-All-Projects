// Using the redux 
// "type" : "module", --> For import wala syntax


// Scope ka dhyaan rkho -> kon kiske upar hai aur kon kiske niche hai

import {bindActionCreators, compose} from 'redux';

function removeSpaces(string){
    return string.split(" ").join("");
}

function repeatString(string){
    return string + string; 
    //  Can also use string.repeat

}

function convertToUppercase(string){
    return string.toUpperCase(); 
}

const input = "abc def ghi";
// Hame teeno ko call karni hai !!
// const output = convertToUppercase(repeatString(removeSpaces(input)));

// Same ordering jiss ordering mai chahiye!!

// Abb yeh naya function bann gya hai !!!
//  Phle removeSpaces call hogi uski joh bhi output aayegi woh next wale mai and so onn
const composeFunction = compose(removeSpaces , repeatString , convertToUppercase);




//  Create Store (Important)
// For Creating the state Object (Reducer with help of context api)

//  Holds the complete state tree


import {createStore , combineReducers} from 'redux'




// CombineReducer
// Ek reducer mai ek type ka hi state ko lena chahiye

const ADD_USER = 'add-user'
function userReducer(state = [] ,action){
    if(action.type === ADD_USER){
        const name = action.payload.userName;
        return [
            ...state ,
            {
                userName : name ,
                id : (state.length == 0 ? 1 : state[state.length - 1].id + 1)
            }
        ]
    }
    return state;
}


// CreateStore --> ek hi reducer leta hai !!! abb ??
// COMBINE  reducer





// Its argument is similar to useReducer hook ke argument

// For removing the error
const ADD_TODO = 'add-todo';
const DEL_TODO = 'delete-todo';
const UPD_TODO = 'edit-todo';

//  Same analogue
function todoReducer(state = [] , action){
    if(action.type === ADD_TODO){
        const todoText = action.payload.todoText;

        // Ham bass update state ko return kar denge
        return [
            ...state , {
                text : todoText ,
                isFinsished : false,
                id : (state.length == 0 ? 1 : state[state.length - 1].id + 1)
            }
        ]
        // state.length() -> Wrong
        // state.length -> right
    }

    else if(action.type === DEL_TODO){
        const todo = action.payload.todo;
        return state.filter(t => t.id !== todo.id) 
    }

    else if(action.type === UPD_TODO){
        // joh bhi arguments chahiye hame usse varibale ke form mai kar rha hu
        let todo = action.payload.todo;
        let todoText = action.payload.todoText;



        const updatedList = state.map(t => {
            if(t.id === todo.id){
                todo.todoData = todoText;
            }
            return t;
        })
        return updatedList;


    }

    // Agar kuch match nhi hua toh wohi state return kar do !!!, undefined return nhi kar sakte
    return state;
}


// Key bhot dhyaan se sochke rkhnni hai , aur value mai reducers hi daal denge.

// Learn about this key and value
const reducer = combineReducers({todo : todoReducer , user : userReducer})

// Similar to that of UseReducer
// Reducer and the initial state

// const response = createStore(todoReducer , []);

// Using combineReducer
const response = createStore(reducer);

// Return 4 Important methods:
console.log(response);

// Function op
const {dispatch , subscribe , getState , replaceReducer} = response;

// 1) Dispatch --> 
// 2) Getstate --> Current state ky hai !! , curretnt toh empty tha.
//  3) ReplaceReducer --> purane reducer ko replace karna chahte hai tab

// Same as that of dispatch method

// Case Sensitive
// koi bhi raw string likhenge tph error ka chance bhot zyaada hai , issliye hame usse varibale mai daal do
dispatch({type: ADD_TODO , payload : {
    todoText : 'todo 1'
} ,
});

dispatch({type: ADD_TODO , payload : {
    todoText : 'todo 2'
} ,
});

console.log(getState());



// Subscribe
//Jab bhi state mai kuch change hua tab hame kuch karna hai tab suscribe use karna hai
//  subscribe ek callback leta hai , aur changes pe baar baar execute karega

// Ordering important hai !!!
subscribe(() => console.log(getState()));
// Iske aage se joh bhi hoga uspe trace karega




// Action Creator (Plain js object)
const addTodo = (todoText) => {
    return {type: ADD_TODO , payload : {
        todoText : todoText
    } ,
    }
}

// Easy OP !!
// Function binding op!!
// Updation op !! (DRY Property)
dispatch(addTodo('todo 1'));


// Action - object --> action methods (action - creator)

// Agar hamne kissi ko dispatch ka access de diya toh koi bhi usse koi bhi object pass karne lag jayega , privacy 0..





// Adding in the user Function
const addUser = (name) => ({type : ADD_USER , payload : {userName : name}});



// BindActionCreator
// 2 parameter --> 1) joh bhi method ham dispatch ke andar call kar rhe hai
// 2) isse dispatch ke sath bind kar do

// Every action is wrapped into the second one !!

// actions yeh javascript object hai 
const actions = bindActionCreators({addTodo , addUser} , dispatch);

actions.addTodo('todo 3');


actions.addUser('arbaz');



// Middle Ware
//  Using the documentation (then function op !! , )
// applyMiddleware.