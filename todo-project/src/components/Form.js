import React,{useState} from 'react'

export default function Form(props) {
    const [name,setName] =useState('');
    const [tooltip,setTooltip] =useState('');
    function handleChange(e){
        setName(e.target.value);
    }

    function handleSubmit(event){
        event.preventDefault();
        if(name === ''){
          setTooltip("Write a task");
        }
       if(name !==''){
        props.addTask(name);
        setName("");
        setTooltip("");
       }
    }

    return (
        <form className="form" onSubmit={handleSubmit}>
        <h3>
          <label className="form-label" htmlFor="todo-input">Enter your new Task</label>
          <span> </span>
        <input onChange={handleChange} value={name} type="text" id="todo-input" name="todo-input" autoComplete="off"/>
        <span> </span>
        <button type="submit">ADD TASK</button></h3>
        <span id="tooltip">{tooltip}</span>
      </form>
    )
}
