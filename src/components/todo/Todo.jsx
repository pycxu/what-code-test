import './todo.scss';

const Todo = ({todos, completeTask, removeTask}) => {

    return (
        <div className="todo__wrapper">
          {todos.map((todo, index) => (
            <div className="todo__row" key={index}>
              <span className="text__normal" style={{ textDecoration: todo.completed ? "line-through" : ""}}>
                {todo.task}
              </span>
              {todo.task === ''
                ?<></>
                :<div>
                  <button onClick={() => completeTask(index)}>✔️</button>
                  <button onClick={() => removeTask(index)}>✖️</button>
                </div>
              }
            </div>
          ))}
        </div>
    )
}

export default Todo;