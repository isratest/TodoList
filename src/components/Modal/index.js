import React from "react";
import ReactDOM from "react-dom";
import { TodoForm } from "../TodoForm";

function Modal({ setOpenModal, createTodo }) {
  return ReactDOM.createPortal(
    <div className="make-todo-container">
      <TodoForm setOpenModal={setOpenModal} createTodo={createTodo} />
    </div>,
    document.getElementById("modal")
  );
}

export { Modal };
