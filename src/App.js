import TodoList from "./components/TodoList";
import NewTodo from "./components/NewTodo";
import "./App.css";
import { useEffect, useState } from "react";
const yapilacaklar = [
  {
    id: 1,
    isim: "Make a portfolio",
    yapildiMi: true,
  },
  {
    id: 2,
    isim: "Deploy portfolio",
    yapildiMi: false,
  },
  {
    id: 3,
    isim: "Preparing for the presentation",
    yapildiMi: false,
  },
];
function App() {
  const [todos, setTodos] = useState(yapilacaklar);
  function toggleTodoStatus(id) {
    const todosCopy = [...todos];
    const ilgiliTodo = todosCopy.find((todo) => todo.id === id);
    ilgiliTodo.yapildiMi = !ilgiliTodo.yapildiMi;
    setTodos(todosCopy);
  }
  function addTodo(title) {
    const newTodoObj = {
      id: Date.now(),
      isim: title,
      yapildiMi: false,
    };
    setTodos([...todos, newTodoObj]);
  }
  return (
    <div className="App">
      <TodoList items={todos} handleTodoClick={toggleTodoStatus} />
      <NewTodo handleAdd={addTodo} />
    </div>
  );
}

export default App;
