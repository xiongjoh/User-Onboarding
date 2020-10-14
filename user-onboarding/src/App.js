import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'
import axios from 'axios'
import * as yup from 'yup'
import schema from './validation/formSchema'
import DisplayUsers from './components/DisplayUsers'

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

const postUser = (newUser) => {
  axios.post(`https://reqres.in/api/users`, newUser)
  .then(res => {
    setUsers([...users, res.data])
    // debugger
  })
  .catch(err => {
    console.log(err)
  })
  setFormValues(initialFormValues)
}

const change = (name, value) => {

  yup.reach(schema, name).validate(value)
  .then(() => {
    setFormErrors({...formErrors,[name]:''})
  })
  .catch(err => {
    setFormErrors({
      ...formErrors,[name]:err.errors[0]
    })
  })

  setFormValues({...formValues, [name]: value})
}

useEffect(() => {
  schema.isValid(formValues)
  .then(valid => {
    setDisabled(!valid)
  })
}, [formValues])

const submit = () => {
  const newUser = {
    name: formValues.name.trim(),
    email: formValues.email.trim(),
    password: formValues.password.trim(),
  }

  postUser(newUser)
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
      {users.map(user => {
        return <DisplayUsers key={user.id} userDetails={user}/>
      })}
    </div>
  );
}

export default App;
