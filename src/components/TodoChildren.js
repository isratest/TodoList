function TodoChildren({ day, month, text, check, checkCompleted, deleteTodo }) {
  return (
    <div className={check === true ? "check-todo" : "main-todo"}>
      <div className="todo-container--date">
        <p>{day}</p>
        <p>{month}</p>
      </div>
      <div className="description-todo">
        <div
          className={
            check === true
              ? "description-text-check"
              : "description-text-container"
          }
        >
          <p>{text}</p>
        </div>
      </div>
      <div className="status-container">
        <div className="delete" onClick={deleteTodo}>
          <p>x</p>
        </div>
        <div
          className={check === true ? "check-checking" : "check"}
          onClick={checkCompleted}
        ></div>
      </div>
    </div>
  );
}

export { TodoChildren };
