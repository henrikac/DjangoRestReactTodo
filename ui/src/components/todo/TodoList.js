import React from 'react';

import './TodoList.css';
import TodoItem from './TodoItem';

class TodoList extends React.Component {
    render() {
        return (
            <div id="todo-list">
                <h1 className="text-title text-center">Todo List</h1>
                <form id="todo-list-form">
                    <input
                        type="text"
                        name="todo"
                        id="todo-list-input"
                        placeholder="Enter new todo..."
                    />
                    <input
                        type="submit"
                        value="Add"
                        id="todo-list-btn"
                    />
                </form>
                <hr className="content-seperator-line" />

                <TodoItem title="Todo item 1" />
                <TodoItem title="Todo item 2" />
            </div>
        );
    }
}

export default TodoList;