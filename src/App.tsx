import React, { useState, useEffect } from 'react';
import Section from './components/section/Section';
import Header from './components/header/Header';
import TodoForm from './components/form/TodoForm';
import Todo from './components/todo/Todo';
import { getTodos } from './utils/APIHelper';
import './App.scss';

function App() {
  const [todos, setTodos] = useState([]);

  // fetch all todos and set todos state when component mounts
  useEffect(() => {
    // fetch all todos and set todos state
    const fetchAndSetTodos = async () => {
      const data = await getTodos();
      setTodos(data);
    }
    fetchAndSetTodos()
  }, [])

  return (
    <div className="app">
      <Header />
      <Section>
        <TodoForm setTodos={setTodos}/>
        <Todo todos={todos} setTodos={setTodos}/>
      </Section>
    </div>
  );
}

export default App;
