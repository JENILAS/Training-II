import Todo from "./components/Todo";
import Form from './components/Form'
import FilterButton from "./components/FilterButton";
import React, {useState,useEffect} from 'react';
import "./index.css";

const FILTER_MAP ={
  All: () => true,
  Active: task=> !task.completed,
  completed: task => task.completed
};

const FILTER_NAMES= Object.keys(FILTER_MAP);

function App(props) {
  const [tasks,setTasks]=useState(props.tasks)
  const [filter, setFilter]=useState('All');

  useEffect(() =>{
    const storedTodos = JSON.parse(localStorage.getItem('todoApp.todos'))
    if(storedTodos) setTasks(storedTodos)
},[])

  useEffect(() =>{
    localStorage.setItem('todoApp.todos', JSON.stringify(tasks))
},[tasks])
  
  function addTask(name){
    const newTask ={id: 'todo-'+Math.floor(10*Math.random()), name:name, completed:false};
    setTasks([...tasks,newTask]);
  }

  function toggleTaskCompleted(id){
   const updatedTasks =tasks.map(task =>{
     if(id === task.id){
       return {...task,completed: !task.completed}
     }
     return task;
   });
   setTasks(updatedTasks);
  }
  function deleteTask(id){
    const remainingTasks = tasks.filter(task => id!==task.id);
    setTasks(remainingTasks);
  }
  function editTask(id, newName){
    const editedTaskList = tasks.map(task =>{
      if(id === task.id){
        return {...task, name:newName}

      }
      return task;
    });
    setTasks(editedTaskList);
  }
    const filterList =FILTER_NAMES.map(name =>(
      
      <FilterButton key={name} name={name}
      isPressed = {name ===filter}
      setFilter={setFilter}/>
    ));

  const taskList =tasks.filter(FILTER_MAP[filter])
                  .map(task =>
                 <Todo key={task.id} 
                  id={task.id}
                  name={task.name}
                  completed={task.completed}
                  toggleTaskCompleted={toggleTaskCompleted}
                  deleteTask={deleteTask}
                  editTask={editTask}/>)
  
  return (
    <div className="todo">
      <h1>TODO LIST PROJECT</h1>
   <div id="body-of-todo">
   <Form addTask={addTask}/>
    <div>
    {filterList}
    </div>
    <h3> {taskList.length} tasks</h3>
    <ul>
      {taskList}
    </ul>
   </div>
    </div>
  );
}


export default App;
