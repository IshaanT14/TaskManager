import React, { useEffect, useState } from 'react';
import { fetchTasks, addTask, completeTask, deleteTask } from './api/taskService';
import AddTaskForm from './components/AddTaskForm';
import TaskList from './components/TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);

  const loadTasks = () => {
    fetchTasks().then(res => setTasks(res.data)).catch(console.error);
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const handleAdd = (task) => {
    addTask(task).then(loadTasks);
  };

  const handleComplete = (id) => {
    completeTask(id).then(loadTasks);
  };

  const handleDelete = (id) => {
    deleteTask(id).then(loadTasks);
  };

  return (
    <div className="container">
      <h1>Task Manager</h1>
      <AddTaskForm onAdd={handleAdd} />
      <TaskList tasks={tasks} onComplete={handleComplete} onDelete={handleDelete} />
    </div>
  );
}

export default App;

