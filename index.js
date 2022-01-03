const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.use('/todos', require('./routes/api/todos'));

app.listen(5000, () => {
    console.log('Listening on port 5000...');
});
