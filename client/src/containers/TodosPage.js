import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';

const TodosPage = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div>
            { todos.map(todo => JSON.stringify(todo)) }
        </div>
    )
}

export default TodosPage;

