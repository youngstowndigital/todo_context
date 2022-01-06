import React from 'react';
import { Link } from 'react-router-dom';

const Todo = ({ todo: { id, title, description, complete }, toggleTodo}) => {
    return (
        <div>
            <Link to={ `/${id}` }>
                <h2>{ title }</h2>
            </Link>
            <p>{ description }</p>
            <input
                name="complete"
                type="checkbox"
                checked={complete}
                onChange={() => { toggleTodo(id) }}
                />
        </div>
    )
}

export default Todo;
