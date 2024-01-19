import React, { useState } from "react";
import "./styles.css";
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import Footer from './components/Footer';
const App = () => <TodoApp />;

const TodoApp = () => {
  const [messageList, setMessageList] = useState(["Banana", "Mango", "Apple"]);

  const addTodo = (message) => {
    setMessageList([...messageList, message]);
  };

  const deleteTodo = (message) => {
    let deleteMessageIndex = messageList.indexOf(message);
    setMessageList([
      ...messageList.slice(0, deleteMessageIndex),
      ...messageList.slice(deleteMessageIndex + 1)
    ]);
  };

  return (
    <div id="app">
      <TodoHeader />
      <TodoForm addTodo={addTodo} /> <br /> {/* Why */}
      <TodoList messageList={messageList} deleteTodo={deleteTodo} />
      <Footer />
    </div>
  );
};

const TodoHeader = () => (
  <div id="header">
    <h2>Todo List</h2>
  </div>
);

export default App;
