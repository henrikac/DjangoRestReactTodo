import React from 'react';

import './TodoList.css';

class TodoList extends React.Component {
    render() {
        return (
            <div id="todoList">
                <h1 className="text-title text-center">Todo List</h1>
                <form id="todoListForm">
                    <input
                        type="text"
                        name="todo"
                        id="todoListInput"
                        placeholder="Enter new todo..."
                    />
                    <input
                        type="submit"
                        value="Add"
                        id="todoListBtn"
                    />
                </form>
                <hr className="content-seperator-line" />
            </div>
        );
    }
}

export default TodoList;