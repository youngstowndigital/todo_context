const express = require('express');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.json({ message: 'Hello, world!' });
});

app.use('/todos', require('./routes/api/todos'));

app.listen(5000, () => {
    console.log('Listening on port 5000...');
});
