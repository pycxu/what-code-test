const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 5001;

const todos = []

app.use(cors())
app.use(express.json({extended: false}))

app.get('/todos', (req, res) => {
    res.status(200).json(todos)
})

app.post('/todos', (req, res) => {
    const newTodo = {
        task: req.body.task,
        completed: false
    }

    todos.push(newTodo)
    res.status(200).json(todos)
})

app.put('/todos/:id', (req, res) => {
    const index = req.params.id
    todos[index].completed = true
    res.status(200).json(todos)
})

app.delete('/todos/:id', (req, res) => {
    const index = req.params.id
    todos.splice(index, 1)
    res.status(200).json(todos)
})

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}...`)
})