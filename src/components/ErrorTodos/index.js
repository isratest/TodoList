import React from "react";
import "./error.css";
function ErrorTodos() {
  return (
    <div class="container">
      <div class="container_terminal"></div>
      <div class="terminal_toolbar">
        <div class="butt">
          <button class="btn btn-color"></button>
          <button class="btn"></button>
          <button class="btn"></button>
        </div>
        <p class="user">israelferic@admin: ~</p>
      </div>
      <div class="terminal_body">
        <div class="terminal_promt">
          <span class="terminal_user">israelferic@admin:</span>
          <span class="terminal_location">~</span>
          <span class="terminal_bling">
            $ We have some error, please recharge your web and do it again.
          </span>
          <span class="terminal_cursor"></span>
        </div>
      </div>
    </div>
  );
}

export { ErrorTodos };
