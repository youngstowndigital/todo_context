import React, { Fragment, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { TodoContext } from '../context/TodoContext';

const TodoPage = () => {
    const { todo, loadTodo, toggleTodo } = useContext(TodoContext);
    const params = useParams();

    useEffect(() => {
        loadTodo(params.id);
    }, [todo, loadTodo, toggleTodo, params.id])

    return (
        <Fragment>
            <h1>{ todo.title }</h1>
            <p>{ todo.description }</p>
            <input
                name="complete"
                type="checkbox"
                checked={todo.complete}
                onChange={() => { toggleTodo(todo.id) }}
                />
        </Fragment>
    )
}

export default TodoPage;

