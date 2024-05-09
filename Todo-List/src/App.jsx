
import { useState } from 'react'
import './App.css'
import Addtodo from './components/AddTodo/Addtodo'
import Todolist from './components/TodoList/Todolist'

// Importing context
import TodoContext from './context/todoContext.js';
// import { useContext } from 'react';



// Binding with the App


function App() {


  
  const [list , setList] = useState([
    {id : 1 , todoData : 'todo 1' , finished: false},
    {id : 2 , todoData : 'todo 2' , finished: true},
  ])
  // Value props --> passed as a object.



  // Mechanism 1st so that we can get tall todos

  // Finished issliye lagaya hu taaki woh checkbox mai todo ko done ya not done wala property daal saku
//   const [list , setList] = useState([
//     {id : 1 , todoData : 'todo 1' , finished: false},
//     {id : 2 , todoData : 'todo 2' , finished: true},
// ])



// Hook provider
// Joh bhi value mai provide kiye rhenge woh saari value yaha mil jayegi !!!
  // const {list , setList} = useContext();

  return (
    <TodoContext.Provider value={{list , setList}}>
    {/* Waha se ham isse todo ka input bhej rhe hai aur yeh yahi callback mai render kar rha hai !! */}
    <Addtodo updatelist={(todo) => setList([...list , {id : list.length + 1 , todoData: todo , finished : false}])}/>

    {/* Eaarlier */}
    {/* <Todolist list={list} updatelist={setList}/> */}

    {/* Now */}
    <Todolist/>

    </TodoContext.Provider>
  )
}

export default App
