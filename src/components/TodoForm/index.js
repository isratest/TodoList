import React from "react";
import "./todoform.css";

function TodoForm({ setOpenModal, createTodo }) {
  const [newTodoValue, setNewTodoValue] = React.useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    createTodo(newTodoValue);
    setOpenModal(false);
  };

  const onChange = (event) => {
    setNewTodoValue(event.target.value);
  };

  const onCancel = () => {
    setOpenModal(false);
  };

  return (
    <div className="container-todoform">
      <form className="todoform" onSubmit={onSubmit}>
        <label className="titulo">Create TODO +</label>
        <textarea
          value={newTodoValue}
          onChange={onChange}
          className="textarea"
          placeholder="Organize your life."
        />
        <div className="buttons-container">
          <button
            type="button"
            className="TodoForm-button TodoForm-Button-cancel"
            onClick={onCancel}
          >
            Cancel
          </button>
          <button type="submit" className="TodoForm-button TodoForm-Button-add">
            Add +
          </button>
        </div>
      </form>
    </div>
  );
}

export { TodoForm };
