import React, { useState } from "react";

function Form(props) {
  const [name, setName] = useState("");
  
  function clearAll()
  {
    localStorage.clear();
    window.location.reload(true);
  }

  function handleChange(e) {
    setName(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    props.addTask(name);
    setName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="label-wrapper">
        <label htmlFor="new-todo-input" className="label__lg">
          What needs to be done?
        </label>
      </h2>
      <input
        type="text"
        id="new-todo-input"
        className="input input__lg"
        name="text"
        autoComplete="off"
        value={name}
        onChange={handleChange}
      />
      <button type="submit" className="btn btn__primary btn__lg">
        Add
      </button>

      <button type="button" className="btn btn__primary btn__lg btn__clear" onClick={() => clearAll()}>
        Clear
      </button>
      
    </form>
  );
}

export default Form;