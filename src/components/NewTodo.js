import React, { useState } from "react";

function NewTodo(props) {
  const [newTodo, setNewTodo] = useState("");
  // function cartLocalStorageYaz(todo) {
  //   localStorage.setItem("todo", JSON.stringify(newTodo));
  // }
  // function cartLocalStorageOku(id) {
  //   return JSON.parse(localStorage.getItem(id));
  // }

  // function initialStateOku(id) {
  //   const initialCart = cartLocalStorageOku(id);
  //   if (initialCart) {
  //     return initialCart;
  //   } else {
  //     return [];
  //   }
  // }
  function handleChange(event) {
    setNewTodo(event.target.value);
  }
  function handleSubmit(event) {
    event.preventDefault();
    props.handleAdd(newTodo);
    //localStorage.setItem("todo", newTodo);
    setNewTodo("");
  }
  return (
    <div className="resim p-6 m-4 rounded-lg">
      <label htmlFor="newTodo" className="text-lg py-1 block">
        New Todo
      </label>
      <form onSubmit={handleSubmit}>
        <div className="flex justify-center gap-2">
          <input
            type="text"
            className="px-4 py-2 border rounded"
            id="newTodo"
            value={newTodo}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="bg-white text-slate-600  px-4 py-2 rounded"
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
export default NewTodo;
