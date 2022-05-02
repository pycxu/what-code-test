import React, { useState } from 'react';
import './App.css';

function App() {
  const [formValue, setFormValue] = useState({
    input: '',
  });

  const [todos, setTodos] = useState([
    {
      text: '',
      isDone: false
    }
  ]);

  const addTodo = (todo: any) => {
    const newTodos = [...todos, { text: todo, isDone: false }];
    setTodos(newTodos); 
  };

  const markTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isDone = true;
    setTodos(newTodos);
  };

  const removeTodo = (index: number) => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  };

  const submitForm = (event: any) => {
    event.preventDefault();
    if (!event.target[0].value) return;
    addTodo(event.target[0].value);
    setFormValue({input: ''});
  };

  return (
    <div className="app">
      <header className="app__header">
        <h3 className="text__heading3">Congrats!</h3>
        <p className="text__normal">
          If you're able to start this app, you just passed the first test on
          version control
        </p>
        <p className="text__normal">
          Right now, we just need you to finish this simple todo list feature.
          😊
        </p>
      </header>

      <section className="to-do-list">
        <h3 className="text__heading3">To Do List</h3>
        <form className="to-do-list__form" onSubmit={submitForm}>
          <div className="form__row">
            <label htmlFor="input" className="text__normal">
              New To-Do Item:
            </label>
            <input
              type="text"
              id="input"
              className="to-do-list__input"
              value={formValue.input}
              onChange={({ target: { value } }) =>
                setFormValue((preValue) => ({ ...preValue, input: value }))
              }
            />
            <button type="submit" className="to-do-list__submit">
              Add
            </button>
          </div>
        </form>

        {/* You should render your todo list down here */}
        <div className="to-do-list__todo">
          {todos.map((todo, index) => (
            <div className="todo__row">
              <span className="text__normal" style={{ textDecoration: todo.isDone ? "line-through" : "", display: "inline-block"}}>
                {todo.text}
              </span>
              {todo.text === ''
                ?<></>
                :<div>
                  <button onClick={() => markTodo(index)}>✓</button>
                  <button onClick={() => removeTodo(index)}>✕</button>
                </div>
              }
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
