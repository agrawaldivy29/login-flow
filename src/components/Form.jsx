import React, { useState } from "react";
import Input from "./Input";

function Form() {
  const [isMouseOver, setMouseOver] = useState(false);
  function onMouseOver() {
    setMouseOver(true);
  }
  function onMouseOut() {
    setMouseOver(false);
  }
  return (
    <form className="form">
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <button
        onMouseOver={onMouseOver}
        onMouseOut={onMouseOut}
        type="submit"
        style={{ backgroundColor: isMouseOver ? "black" : "white" }}
      >
        Login
      </button>
    </form>
  );
}

export default Form;
