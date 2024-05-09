import { useState } from "react";

function Todo({todoData , isFinished , changeFinished , onDelete , onEdit}){

    // Jaise change hota hai na waise hi iski checked property ko bhi change karenge!!
    const [finished , setFinished] = useState(isFinished);

    const [isEditing , setIsEditing]  = useState(false);

    const [editText , setEditText]  = useState(todoData);

    return (
        <div>

            {/* .checked hota hai bhai , debugging op !! */}
        <input type="checkbox" checked={finished} onChange={(e) => {setFinished(e.target.checked);
            changeFinished(e.target.checked)
        }}/>
        
        {(isEditing) ? <input type="text" value={editText} onChange={e => setEditText(e.target.value)}/> : <span>{todoData}
        </span>}
        <button onClick={ () => {
            setIsEditing(!isEditing);

            //  Calling the edit function
            onEdit(editText);
        }
            
        }>{!isEditing ? 'Edit' : 'Save'}</button>
        <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Todo;