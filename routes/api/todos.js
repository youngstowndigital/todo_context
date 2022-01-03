const express = require('express');

const router = express.Router();

const todos = [ 
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

module.exports = router;
