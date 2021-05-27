
import React,{useState} from 'react';

export default function Todo(props){
    const [isEditing, setEditing] =useState(false);
    const [newName, setNewName] = useState('');
    function handleChange(e){
        setNewName(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        props.editTask(props.id,newName);
        setNewName('');
        setEditing(false);
    }
    const editingTemplate =(
        <form onSubmit ={handleSubmit}>
            <div>
                <label htmlFor={props.id}>New Name for <strong>{props.name}</strong> </label>
                <input value={newName} onChange={handleChange} id={props.id} type="text"/>
            </div>
            <div>
                <button onClick={() =>setEditing(false)}>Cancel</button>
                <span> </span>
                
                <button>Save
                    <span>new name for {props.name}</span>
                </button>

            </div>
        </form>
    );
    const viewTemplate =(
        <div>
            <div>
                <input id={props.id} type="checkbox" 
                defaultChecked={props.completed} 
                onChange={() =>props.toggleTaskCompleted(props.id)}/>
                 <label>{props.name}</label><br></br>
                 {/*  contenteditable="true" */}
                <button onClick={() =>setEditing(true)}>Edit  {props.name}</button> <span></span>
                <button onClick ={() =>{props.deleteTask(props.id)}}>Delete {props.name} </button>
                
            </div>
        </div>
    );
    return(
        <li>
        {isEditing ? editingTemplate :viewTemplate}
      </li>
    );
}