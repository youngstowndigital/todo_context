import React from 'react';

const Todo = ({ todo: { title, description, complete }}) => {
    return (
        <div>
            <h2>{ title }</h2>
            <p>{ description }</p>
        </div>
    )
}

export default Todo;
