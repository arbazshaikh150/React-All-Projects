
// All logic extracted

// UseReducer hook 

function todoReducer(state , action){
    // Action of execute karenge based on its type (joh string hogi)
    if(action.type === 'add-todo'){
        // Inn sab ke related operation action ke payload mai rhegi!!
        let todoText = action.payload.todoText;

        // State to update kar rhe hai 

        // Setter function ko call karne ki zarurat nhi , yeh function return kar rha hai , ham isse lekar baad mai update kar sakte hai.

        // Ek hook hoga joh internally hamara saara kaam kar dega 
        return [
            ...state , {id : state.length + 1 , todoData: todoText , finished : false}
        ]
    }
    else if(action.type === 'edit-todo'){
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
    else if(action.type === 'delete-todo'){
        let todo = action.payload.todo;
        const updatedList = state.filter(t => t.id !== todo.id);

        // Return woh hi karna hai , joh tumhe chahiye ki baad mai , setter function mai aa jaye
        return updatedList;
    }

    else if(action.type === 'finished-todo'){
        let todo = action.payload.todo;
        let isFinished = action.payload.isFinished;
        const updatedList = state.map(t => {
            if(t.id === todo.id){
                todo.finished = isFinished;
            }
            return t;
        })
        return updatedList;
    }
    else{
        return state;
    }


}
export default todoReducer;