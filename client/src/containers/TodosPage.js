import React, { useContext } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from '../components/Todo';

const TodosPage = () => {
    const { todos, toggleTodo } = useContext(TodoContext);

    return (
        <div>
            { todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />) }
        </div>
    )
}

export default TodosPage;

