import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import './TodoItem.css';

class TodoItem extends React.Component {
    render() {
        const { completed, title } = this.props.todo;

        return (
            <div className="todo-item">
                <span className={`todo-item-text${completed ? ' strike' : ''}`}>{title}</span>

                <div className="todo-item-actions">
                    <input
                        type="checkbox"
                        className="todo-item-checker"
                        onChange={this.props.markCompleted}
                    />
                    <FaTrashAlt
                        className="todo-item-delete-btn"
                        onClick={this.props.deleteTodo}
                    />
                </div>
            </div>
        );
    }
}

export default TodoItem;