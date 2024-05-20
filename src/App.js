import React from "react";
import "./index.css";
import { TodoChildren } from "./components/TodoChildren";
import { Search } from "./components/Search";
import { Header } from "./components/Header";
import { LoadingTodos } from "../src/components/LoadingTodos";
import { ErrorTodos } from "../src/components/ErrorTodos";
import { EmptyTodos } from "../src/components/EmptyTodos";
import { Modal } from "./components/Modal";

/*Custom Hooks*/
//localStore:
function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);

        let parsedItem;
        if (!localStorageItem) {
          localStorage.setItem(itemName, JSON.stringify(initialValue));
          parsedItem = initialValue;
        } else {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        }
        setLoading(false);
      } catch (error) {
        setLoading(false);
        setError(true);
      }
    }, 2000);
  });

  const saveItem = (newItem) => {
    const stringiFied = JSON.stringify(newItem);
    localStorage.setItem(itemName, stringiFied);
    setItem(newItem);
  };
  return {
    item,
    saveItem,
    error,
    loading,
  };
}

/* Principal Function */
function App() {
  const {
    item: todos,
    saveItem: saveTodos,
    error,
    loading,
  } = useLocalStorage("TODOS_V1", []);

  const [searchValue, setSearchValue] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);

  const totalTodos = todos.length;
  const searchedTodos = todos.filter((todo) =>
    todo.text.toLowerCase().includes(searchValue.toLowerCase())
  );

  const createTodo = (text) => {
    const newArrTodos = [...todos];
    newArrTodos.push({
      text,
      check: false,
    });
    saveTodos(newArrTodos);
  };

  const checkingTodo = (text) => {
    const newArrTodos = [...todos];
    const findedTodo = newArrTodos.findIndex((todo) => todo.text === text);
    newArrTodos[findedTodo].check = true;
    saveTodos(newArrTodos);
  };

  const deleteTodo = (text) => {
    const newArrTodos = [...todos];
    const findedTodo = newArrTodos.findIndex((todo) => todo.text === text);
    newArrTodos.splice(findedTodo, 1);
    saveTodos(newArrTodos);
  };

  return (
    <>
      <main className="super-container">
        <Header
          usuario="Israel F."
          numero={todos.filter((todo) => !todo.check).length}
          total={totalTodos}
          setOpenModal={setOpenModal}
        />
        <article className="todo-container">
          <Search searchValue={searchValue} setSearchValue={setSearchValue} />
          {loading && <LoadingTodos />}
          {error && <ErrorTodos />}
          {!loading && searchedTodos.length === 0 && (
            <EmptyTodos setOpenModal={setOpenModal} />
          )}
          {searchedTodos.map((todo) => (
            <TodoChildren
              key={todo.text}
              day={todo.day}
              month={todo.month}
              text={todo.text}
              check={todo.check}
              checkCompleted={() => checkingTodo(todo.text)}
              deleteTodo={() => deleteTodo(todo.text)}
            />
          ))}
        </article>
      </main>
      {openModal && (
        <Modal setOpenModal={setOpenModal} createTodo={createTodo}></Modal>
      )}
    </>
  );
}

export default App;
