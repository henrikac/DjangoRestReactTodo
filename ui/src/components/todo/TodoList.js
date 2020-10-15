import React from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    constructor(props) {
        super(props);

        this.nextId = 4;
        this.state = {
            title: '',
            todos: [
                {
                    id: 1,
                    title: 'Todo item 1',
                    completed: false,
                },
                {
                    id: 2,
                    title: 'Todo item 2',
                    completed: false
                },
                {
                    id: 3,
                    title: 'Todo item 3',
                    completed: false
                }
            ],
        };
    }

    handleTitleChange = e => {
        this.setState({ title: e.target.value });
    }

    addTodo = e => {
        e.preventDefault();

        this.setState({
            todos: [...this.state.todos,
                {
                    id: this.nextId,
                    title: this.state.title,
                    completed: false
                }],
            title: ''
        });

        this.nextId += 1;
    }

    deleteTodo = id => {
        this.setState({
            todos: [...this.state.todos.filter(todo => todo.id !== id)]
        });
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