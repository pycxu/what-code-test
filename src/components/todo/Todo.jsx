import './todo.scss';
import { getTodos, updateTodo, deleteTodo} from '../../utils/APIHelper';

const Todo = ({todos, setTodos}) => {

  const handleUpdate = async (id) => {
    await updateTodo(id);
    const data = await getTodos();
    setTodos(data)
  }

  const handleDelete = async (id) => {
    await deleteTodo(id);
    const data = await getTodos();
    setTodos(data)
  }

  if(!Array.isArray(todos)) {
    return (null);
  }else {
    return (
      <div className="todo__wrapper">
        {todos.map((todo) => (
          <div className="todo__row" key={todo.id}>
            <span className="text__normal" style={{ textDecoration: todo.done ? "line-through" : ""}}>
              {todo.task}
            </span>
            <div>
                <button onClick={() => handleUpdate(todo.id)}><span>✔︎</span></button>
                <button onClick={() => handleDelete(todo.id)}><span>✕</span></button>
            </div>
          </div>
        ))}
      </div>
    )
  } 
}

export default Todo;