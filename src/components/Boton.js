function Button({ setOpenModal }) {
  return (
    <div
      className="add-todo"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      <p>+</p>
    </div>
  );
}

export { Button };
