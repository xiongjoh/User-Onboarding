import React, { useState, useEffect } from 'react';
import './App.css';
import Form from './components/Form'

const initialFormValues = {
  name: '',
  email: '',
  password: '',
  tos: false,
}

const initialUsers = []

function App() {

const [users, setUsers] = useState(initialUsers)
const [formValues, setFormValues] = useState(initialFormValues)



  return (
    <div className="App">
      <Form />
    </div>
  );
}

export default App;
