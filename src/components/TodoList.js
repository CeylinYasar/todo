import React from "react";
import TodoItem from "./TodoItem";

function TodoList(props) {
  return (
    <div className="resim p-8 border m-4  rounded-lg">
      <h2 className="text-2xl mb-4 text-black font-bold">To Do List</h2>
      {props.items.map((i) => (
        <TodoItem key={i.id} item={i} handleToggle={props.handleTodoClick} />
      ))}
    </div>
  );
}

export default TodoList;
