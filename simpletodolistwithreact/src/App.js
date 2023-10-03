import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle, faTrash } from '@fortawesome/free-solid-svg-icons';


import './App.css';
import { useState } from 'react';


function App() {
  const [tasks,setTasks] = useState([]);
  const [newTask,setNewTask] = useState('');


  const addTask = () => {
    if (newTask.trim() !== '') {
      const newTasks = [...tasks, { text: newTask, completed: false }];
      setTasks(newTasks);
      setNewTask('');
    }
  };

  const markTaskCompleted = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      <h1 className="toDoList-title">To-Do List</h1>
      <div className="toDoList">
        <form action="" className="toDoList-form">
          <input
            type="text"
            className="toDoList-input"
            placeholder="Add a new task"
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <input
            type="button"
            value="Add Task"
            className="toDoList-addButton"
            onClick={addTask}
          />
        </form>
        <div className="toDoList-todos">
          {tasks.map((task, index) => (
            <div className="toDoList-todo" key={index}>
              <p className={task.completed ? 'completed' : ''}>{task.text}</p>
              <div className="actions">
                <FontAwesomeIcon
                  icon={faCheckCircle}
                  className={`icon completed ${task.completed ? 'completed' : ''}`}
                  onClick={() => markTaskCompleted(index)}
                />
                <FontAwesomeIcon
                  icon={faTrash}
                  className="icon delete"
                  onClick={() => deleteTask(index)}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
