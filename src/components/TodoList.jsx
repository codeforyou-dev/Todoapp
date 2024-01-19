import React from 'react';
import TodoItem from './TodoItem';
const TodoList = ({ messageList, deleteTodo }) => (
    <ol id="todolist">
        {messageList.map((message, index) => (
            <TodoItem message={message} deleteTodo={deleteTodo} key={index} />
        ))}
    </ol>
);
export default TodoList;