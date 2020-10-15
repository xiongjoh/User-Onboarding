import React from "react";

export default function Form(props) {
  const { values, submit, change, disabled, errors } = props;

  const onChange = (event) => {
    //   debugger
      const {value, type, name, checked} = event.target
      const valueToUse = type === 'checkbox' ? checked : value
      change(name, valueToUse)
  }

  const onSubmit = (event) => {
      event.preventDefault()
      submit()
  }

  return (
    <form className="form container" onSubmit={onSubmit}>
        <div className="errors">
        <div>{errors.name}</div>
        <div>{errors.email}</div>
        <div>{errors.password}</div>
        <div>{errors.role}</div>
        <div>{errors.workstatus}</div>
        <div>{errors.tos}</div>
        </div>
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

      <label>Role: 
          <select
          onChange={onChange}
          value={values.role}
          name='role'
          >
              <option value="">--Select Role--</option>
              <option value="student">Student</option>
              <option value="tl">Team Lead</option>
              <option value="instructor">Instructor</option>
              <option value="alumni">Alumni</option>
          </select>
      </label>

      <label>Working
          <input 
          type="radio"
          name="workstatus"
          onChange={onChange}
          value='working'
          checked={values.workstatus === 'working'}
          />
      </label>
      <label>Not Working
          <input 
          type="radio"
          name="workstatus"
          onChange={onChange}
          value='notworking'
          checked={values.workstatus === 'notworking'}
          />
      </label>

      <label>
        Agree to Terms of Service
        <input 
        type="checkbox"
        name="tos"
        checked={values.hiking}
        onChange={onChange}
        />
      </label>
      <div>
        <button id="submitBtn" disabled={disabled}>submit</button>
      </div>
    </form>
  );
}
