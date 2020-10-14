import React from "react";

export default function Form(props) {
  const { values, submit, change, disable, error } = props;
  
  return (
    <form className="container">
      <label>
        Name:
        <input type="text" />
      </label>

      <label>
        Email:
        <input type="email" />
      </label>

      <label>
        Password:
        <input type="text" />
      </label>

      <label>
        Terms Of Service
        <input type="checkbox" />
      </label>
    </form>
  );
}
