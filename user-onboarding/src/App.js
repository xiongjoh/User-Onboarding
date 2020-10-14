import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialFormErrors = {
  name:'',
  email:'',
  password:'',
}

const initialUsers = []
const initialDisabled = true

function App() {

const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)
const [formErrors, setFormErrors] = useState(initialFormErrors)
const [disabled, setDisabled] = useState(initialDisabled)

// const postUser = (newUser) => {
//   axios.post(``)
// }

const change = (name, value) => {
  setFormValues({...formValues, [name]: value})
}

useEffect(() => {
  schema.isValid(formValues)
  .then(valid => {
    console.log(valid)
    setDisabled(!valid)
  })
}, [formValues])

const submit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
  }

}


  return (
    <div className="App">
      <Form 
      values={formValues}
      change={change}
      submit={submit}
      disabled={disabled}
      errors={formErrors}
      />
    </div>
  );
}

export default App;
