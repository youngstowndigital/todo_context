const express = require('express');

const router = express.Router();

let todos = [ 
    { id: 1, title: "Groceries", description: "Pick up the groceries", complete: false },
    { id: 2, title: "Bills", description: "Pay my bills", complete: false }
]

router.get('/', (req, res) => {
    res.json(todos);
});

router.get('/:id', (req, res) => {
    const todo = todos.filter(todo => todo.id == req.params.id)[0];

    if (!todo)
        return res.status(404).json({ message: 'Todo not found' });

    res.json(todo);
});

router.put('/:id/toggle', (req, res) => {
    todos = todos.map(todo => {
        return todo.id == req.params.id ? { ...todo, complete: !todo.complete } : todo
    });

    const todo = todos.filter(todo => todo.id == req.params.id)[0];

    res.json(todo);
});

module.exports = router;
