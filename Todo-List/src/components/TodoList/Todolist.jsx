import Todo from "../Todo/Todo";

import todoContext from "../../context/todoContext";
import { useContext } from "react";
import todoDispatchContext from "../../context/todoDispatchContext";
import { useDispatch, useSelector } from "react-redux";



function Todolist({deleteTodo , editTodo , todoFinished}){
    // No argument needed
    const dispatch = useDispatch();


    // Ordering matter karegi dhyaan rkhna kon ky access kar sakta hai !!!
    

    // State variables op
    //  Todocontext importing 

    // const {list} = useContext(todoContext);

    // React redux using the callback

    // state.todo means joh hamne key value diye the na wohi le rha hai

    // List ka access (joh phle ham context se laa rhe the)
    const list = useSelector( (state) => state.todo.todoList);

    // const {dispatch} = useContext(todoDispatchContext);

    function onFinished(todo , isFinished){
        // dispatch({
        //     type : 'finished-todo' , payload : {
        //     todo : todo , 
        //     isFinished : isFinished
        //   }})

        // Now
        todoFinished({todo , isFinished})
    }



    function onDelete(todo){
        // const updatedList = list.filter(t => t.id !== todo.id);
        // setList(updatedList);

        // Using reducer
        // dispatch({
        //     type : 'delete-todo' , payload : {
        //     todo : todo
        //   }})

        deleteTodo({todo});
    }



    function onEdit(todo , todoText){
            // const updatedList = list.map(t => {
            //     if(t.id === todo.id){
            //         todo.todoData = todoText;
            //     }
            //     return t;
            // })
            // setList(updatedList);

            // dispatch({
            //     type : 'edit-todo' , payload : {
            //     todo , 
            //     todoText
            //   }})

            editTodo({todo , todoText});
    }
    

    // Don't give same name , error nhi de rha hai , map mai mene sabko t , t karke de rha tha , soo scope ke wajah se no error but output galat aa rha hai !!
    return (
        <div>
        {list.length > 0 && list.map((todo) => <Todo key={todo.id} todoData={todo.todoData} isFinished={todo.finished} id={todo.id}

        // isfinsihed parameter todo ke yaha se aa rha hai  !!!
        // changeFinished={
        //     (isFinished) => {
        //         const updatedList = list.map(t => {
        //             if(t.id === todo.id){
        //                 todo.finished = isFinished;
        //             }
        //             return t;
        //         })
        //         setList(updatedList);
        //     }
        // }

        // Making the function for the required task!!
        // Clean up code
        // Step to call the call back , kyuki woh call back mangta hai ham call back ke andar function chala denge

        // Ham jaha se isse call kar rha hai waha se isse argument milega , wohi isFinishsed mai aayega ,, function calling and scope analysis op !!
        changeFinished={(isFinished) => onFinished(todo , isFinished)}


        // onDelete={() => {
        //     const updatedList = list.filter(t => t.id !== todo.id);
        //     setList(updatedList);
        // }}

        // Clean up
        onDelete={() => onDelete(todo)}

        // onEdit={
        //     (todoText) => {
        //         const updatedList = list.map(t => {
        //             if(t.id === todo.id){
        //                 todo.todoData = todoText;
        //             }
        //             return t;
        //         })
        //         setList(updatedList);
        //     }
        // }

        // Jaha se onEdit ko call karenge wahi se isse yeh saare arguments dene padenge.
        onEdit={(todoText) => onEdit(todo , todoText)}

        />)}
        </div>
    )
}
export default Todolist;