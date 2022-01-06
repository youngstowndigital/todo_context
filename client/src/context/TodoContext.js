import React, { useState, useEffect, createContext } from 'react';
import axios from 'axios';

export const TodoContext = createContext();

const TodoProvider = ({ children }) => {
    const [todos, setTodos] = useState([]);
    const [todo, setTodo] = useState({ 
        title: '',
        description: '',
        complete: false
    });

    const loadTodos = async () => {
        try {
            const res = await axios.get('http://localhost:5000/todos');

            setTodos(res.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    const loadTodo = async (id) => {
        try {
            const res =  await axios.get(`http://localhost:5000/todos/${id}`);

            setTodo(res.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    const toggleTodo = async (id) => {
        try {
            const res = await axios.put(`http://localhost:5000/todos/${id}/toggle`);

            const todoIndex = todos.map(todo => todo.id).indexOf(id);

            let updatedTodos = [...todos];
            updatedTodos[todoIndex] = res.data;
            setTodos(updatedTodos);
            setTodo(res.data);
        } catch (error) {
            console.error(error.message);
        }
    }

    useEffect(() => {
        loadTodos();
    }, [])

    return (
        <TodoContext.Provider value={ { todos, todo, loadTodo, toggleTodo } }>
            { children }
        </TodoContext.Provider>
    )
}

export default TodoProvider;

