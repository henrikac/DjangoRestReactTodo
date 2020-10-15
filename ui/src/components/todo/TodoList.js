import React from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.nextId = 4;
        this.state = {
            title: '',
            todos: [],
        };
    }

    componentDidMount = () => {
        fetch('http://localhost:8000/api/v1/todos/')
            .then(res => res.json())
            .then(data => {
                this.setState({ todos: [...data] });
            })
            .catch(err => console.log(err));
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
    }

    addTodo = e => {
        e.preventDefault();

        if (this.state.title === '') return;

        fetch('http://localhost:8000/api/v1/todos/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ title: this.state.title })
        })
        .then(res => res.json())
        .then(todo => {
            this.setState({ 
                todos: [...this.state.todos, todo],
                title: ''
            })
        })
        .catch(err => console.log(err));
    }

    deleteTodo = id => {
        const todo = this.state.todos.find(todo => todo.id === id);

        if (!todo) return;

        fetch(`http://localhost:8000/api/v1/todos/${id}`, {
            method: 'DELETE',
        })
        .then(res => res.text())
        .then(data => {
            this.setState({
                todos: [...this.state.todos.filter(todo => todo.id !== id)]
            });
        })
        .catch(err => console.log(err));
    }

    markCompleted = id => {
        this.setState({ todos: this.state.todos.map(todo => {
                if (todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo;
            })
        });
    }

    render() {
        const todoItems = this.state.todos.map(todo =>
            <TodoItem
                todo={todo}
                markCompleted={this.markCompleted.bind(this, todo.id)}
                deleteTodo={this.deleteTodo.bind(this, todo.id)}
                key={todo.id}
            />
        );

        return (
            <div id="todo-list">
                <h1 className="text-title text-center">Todo List</h1>
                <form id="todo-list-form" onSubmit={this.addTodo}>
                    <input
                        type="text"
                        name="todo"
                        id="todo-list-input"
                        placeholder="Enter new todo..."
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                    <input
                        type="submit"
                        value="Add"
                        id="todo-list-btn"
                    />
                </form>
                <hr className="content-seperator-line" />

                {todoItems}
            </div>
        );
    }
}

export default TodoList;