import { useContext, useEffect, useState } from "react";
import todoDispatchContext from "../../context/todoDispatchContext";

// Calling the actions
import { addTodo } from "../../actions/todoAction";


// Child ko parent se contact karna hai callback karna padd rha hai ! , aur bhot complication bhi aa rhi hai , which is  not a better way to do this 

// To resolve this --> redux


// Better --> Context Api !!!
//  Here we use context api !!!!!
// Heirarchy ka tension hi nhi !!

// Context ko ham parent bana denge aur baaki saari components uske child bana do , toh saare child ke pass woh parent ka access ho jayega


// React Redux (Op!!!)



// Yaha pe hamne context api se state ko pass karna hata diya , hamari saari state react - redux se aa rhi hai.

// For using the dispatch
import {useDispatch} from 'react-redux'




function Addtodo({addTodo}){

    // Clean up
    // const {dispatch} = useContext(todoDispatchContext);


    // Now (React - redux)
    // Joh return object karega usse object mai destructure karke rkhte hai , sabko nhi , easy to find error !!!

    // Automatically usko referred karta hai jisko abhi create kiya hai !!!
    const dispatch = useDispatch();

    const [inputText , setinputtext] = useState('');
    return (

        <div>
            <input type="text" placeholder={!inputText && "Add next todo" }
            value={inputText}
            onChange={e => setinputtext(e.target.value)}/>
            {/* Adding the new todo item */}
            <button
            onClick={() => {
                // Jaise hi yeh call karenge waise hi waha se set ho jayega 


                // Earlier
                // dispatch({
                //     type : 'add-todo' , payload : {
                //         // Passing the content for the todo (which is stored in input text)
                //     todoText: inputText
                //   }})

                // Now
                // dispatch(addTodo(inputText))


                // Privacy
                addTodo((inputText))

                
                // Yeh karna mat bhulo
                setinputtext('');
            }}
            >Add</button>
        </div>
    )
}
export default Addtodo;