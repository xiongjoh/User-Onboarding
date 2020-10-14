import React from "react";

export default function Form(props) {
  const { values, submit, change, disable, error } = props;

  const onChange = (event) => {
    //   debugger
      const {value, type, name, checked} = event.target
      const valueToUse = type === 'checkbox' ? checked : value
      change(name, valueToUse)
  }

  const onSubmit = () => {

  }

  return (
    <form className="container" onSubmit={onSubmit}>
      <label>
        Name:
        <input 
        type="text"
        name="name"
        value={values.name}
        onChange={onChange}
        />
      </label>

      <label>
        Email:
        <input 
        type="email"
        name="email"
        value={values.email}
        onChange={onChange}
        />
      </label>

      <label>
        Password:
        <input 
        type="text"
        name="password"
        value={values.password}
        onChange={onChange}
        />
      </label>

      <label>
        Terms Of Service
        <input 
        type="checkbox"
        name="tos"
        checked={values.hiking}
        onChange={onChange}
        />
      </label>
      <div>
          <button disabled={disable}>Submit</button>
      </div>
    </form>
  );
}
