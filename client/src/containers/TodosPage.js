import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from '../components/Todo';

const TodosPage = () => {
    const { todos } = useContext(TodoContext);

    return (
        <div>
            { todos.map(todo => <Todo key={todo.id} todo={todo} />) }
        </div>
    )
}

export default TodosPage;

