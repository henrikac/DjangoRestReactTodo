import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

import './TodoItem.css';

class TodoItem extends React.Component {
    render() {
        return (
            <div className="todo-item">
                <span className="todo-item-text">{this.props.title}</span>

                <div className="todo-item-actions">
                    <input
                        type="checkbox"
                        className="todo-item-checker"
                    />
                    <FaTrashAlt className="todo-item-delete-btn" />
                </div>
            </div>
        );
    }
}

export default TodoItem;