import React from "react";
import { Button } from "./Boton";

function Header({ usuario, numero, total, setOpenModal }) {
  return (
    <div className="top-container">
      <div className="header-container">
        <h1 className="header--title">{usuario}.</h1>

        <div className="pending-container">
          <p className="header--pending">
            pending {numero} of {total} TODOS.
          </p>
        </div>
      </div>
      <Button setOpenModal={setOpenModal} />
    </div>
  );
}

export { Header };
