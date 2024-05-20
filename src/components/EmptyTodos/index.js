import React from "react";
import "./empty.css";

function EmptyTodos({ setOpenModal }) {
  return (
    <div className="container-btn53">
      <button
        className="btn-53"
        onClick={() => {
          setOpenModal((state) => !state);
        }}
      >
        <div className="original">Add your first TODO.</div>
        <div className="letters">
          <span>+</span>
          <span>T</span>
          <span>O</span>
          <span>D</span>
          <span>O</span>
          <span>🔥</span>
        </div>
      </button>
    </div>
  );
}

export { EmptyTodos };
