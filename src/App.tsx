import React, { useState, useEffect } from 'react';
import axios from "axios";
import AppSection from './components/section/AppSection';
import AppHeader from './components/header/AppHeader';
import TodoForm from './components/form/TodoForm';
import Todo from './components/todo/Todo';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([
    {
      task: '',
      completed: false
    }
  ]);

  const API_URL = "http://localhost:5001/todos/";

  // fetch all todos and set todos state
  const updateTodos = async () => {
    const { data: todos } = await axios.get(API_URL)
    setTodos(todos)
  }

  // updateTodos when component mounts
  useEffect(() => {
    updateTodos()
  }, [])

  // add new task
  const addTask = async (task: any) => {
    await axios.post(API_URL, {task})
    updateTodos()
  };

  // mark a task as completed
  const completeTask = async (index: number) => {
    await axios.put(`${API_URL}${index}`)
    updateTodos()
  };

  // remove a task
  const removeTask = async (index: number) => {
    await axios.delete(`${API_URL}${index}`)
    updateTodos()
  };

  return (
    <div className="app">
      <AppHeader />
      <AppSection>
        <TodoForm addTask={addTask}/>
        <Todo todos={todos} completeTask={completeTask} removeTask={removeTask}/>
      </AppSection>
    </div>
  );
}

export default App;
