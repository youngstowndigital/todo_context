import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);

    const loadTodos = async () => {
        try {
            const res = await axios.get('http://localhost:5000/todos');

            setTodos(res.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        loadTodos();
    }, [])

    return (
        <TodoContext.Provider value={ { todos } }>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoProvider;

