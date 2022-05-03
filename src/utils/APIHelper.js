import axios from "axios";

const API_URL = 'http://localhost:2022/api/v1/todos/';

// get all todos
export const getTodos = async () => {
    const { data: todos } = await axios.get(API_URL);
    return todos;
}

// add new task
export const addTodo = async (task) => {
    await axios.post(API_URL, {task});
}

// mark/unmark a task as done
export const updateTodo = async (id) => {
    await axios.put(`${API_URL}${id}`);
}

// delete a task
export const deleteTodo = async (id) => {
    await axios.delete(`${API_URL}${id}`)
}