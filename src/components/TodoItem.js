import React from "react";
import Checked from "./Checked";

function TodoItem(props) {
  const { id, isim, yapildiMi } = props.item;
  const cx = yapildiMi
    ? "text-white line-through decoration-blue-600"
    : "text-zinc-400";

  function handleToggle() {
    props.handleToggle(id);
    //localStorage.setItem("todo", id);
  }
  return (
    <div className="flex justify-center cursor-pointer" onClick={handleToggle}>
      <div className={cx}>{isim}</div>
      {yapildiMi && <Checked />}
    </div>
  );
}

export default TodoItem;
