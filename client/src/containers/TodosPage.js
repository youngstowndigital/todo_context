import React, { useContext, useState } from 'react';
import { TodoContext } from '../context/TodoContext';
import Todo from '../components/Todo';

const TodosPage = () => {
    const { todos, todoErrors, addTodo, toggleTodo } = useContext(TodoContext);
    const [formData, setFormData] = useState({
        title: '',
        description: ''
    });

    const { title, description } = formData;

    const handleFormData = (e) => setFormData({ ...formData, [e.target.id]: e.target.value });

    const onSubmit = (e) => {
        e.preventDefault();
        addTodo(formData);
    }

    return (
        <div>
            { JSON.stringify(todoErrors) }
            <form onSubmit={onSubmit}>
                <label>Title</label><br />
                <input onChange={handleFormData} type="text" id="title" value={title} />
                <br />
                <label>Description</label><br />
                <textarea onChange={handleFormData} id="description" value={description}></textarea><br />
                <button>Create</button>
            </form>
            { todos.map(todo => <Todo key={todo.id} todo={todo} toggleTodo={toggleTodo} />) }
        </div>
    )
}

export default TodosPage;

