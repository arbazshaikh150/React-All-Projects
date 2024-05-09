import Todo from "../Todo/Todo";

import todoContext from "../../context/todoContext";
import { useContext } from "react";

function Todolist(){
    // State variables op
    //  Todocontext importing 
    const {list , setList} = useContext(todoContext);


    // Don't give same name , error nhi de rha hai , map mai mene sabko t , t karke de rha tha , soo scope ke wajah se no error but output galat aa rha hai !!
    return (
        <div>
        {list.length > 0 && list.map((todo) => <Todo key={todo.id} todoData={todo.todoData} isFinished={todo.finished} id={todo.id}

        // isfinsihed parameter todo ke yaha se aa rha hai  !!!
        changeFinished={
            (isFinished) => {
                const updatedList = list.map(t => {
                    if(t.id === todo.id){
                        todo.finished = isFinished;
                    }
                    return t;
                })
                setList(updatedList);
            }
        }
        onDelete={() => {
            const updatedList = list.filter(t => t.id !== todo.id);
            setList(updatedList);
        }}

        onEdit={
            (todoText) => {
                const updatedList = list.map(t => {
                    if(t.id === todo.id){
                        todo.todoData = todoText;
                    }
                    return t;
                })
                setList(updatedList);
            }
        }
        
        />)}
        </div>
    )
}
export default Todolist;