import { useState } from "react";


// Child ko parent se contact karna hai callback karna padd rha hai ! , aur bhot complication bhi aa rhi hai , which is  not a better way to do this 

// To resolve this --> redux


// Better --> Context Api !!!
//  Here we use context api !!!!!
// Heirarchy ka tension hi nhi !!

// Context ko ham parent bana denge aur baaki saari components uske child bana do , toh saare child ke pass woh parent ka access ho jayega

function Addtodo({updatelist}){

    const [inputText , setinputtext] = useState('');
    return (

        <div>
            <input type="text" placeholder="Add next todo" 
            onChange={e => setinputtext(e.target.value)}/>
            {/* Adding the new todo item */}
            <button
            onClick={() => {
                updatelist(inputText);
                setinputtext('');
            }}
            >Add</button>
        </div>
    )
}
export default Addtodo;