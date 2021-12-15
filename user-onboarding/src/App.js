
import './App.css';
import Form from './Form'
import User from './User'
import React, { useState, useEffect } from 'react'

import axios from 'axios';
import schema from './formValidatorSchema.js';
import * as yup from 'yup';

//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
//////////////// INITIAL STATES ////////////////
const initialFormValues = {
  ///// TEXT INPUTS /////
  first_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  
  ///// CHECKBOX /////
  termsOfService: false,
  
}
const initialFormErrors = {
  first_name: '',
  email: '',
  password: '',
  confirmPassword: '',
  termsOfService: '',
}
const initialUsers = []
const initialDisabled = true


export default function App() {
  const [users, setUsers] = useState(initialUsers)          
  const [formValues, setFormValues] = useState(initialFormValues) 
  const [formErrors, setFormErrors] = useState(initialFormErrors) 
  const [disabled, setDisabled] = useState(initialDisabled)       

  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  //////////////// HELPERS ////////////////
  const getUsers = () => {

    axios.get('https://reqres.in/api/users')
      .then(resp => {
        console.log(resp.data.data)
          setUsers(resp.data.data)
      }).catch(err => console.error(err))
  }

  const postNewUser = newUser => {
    axios.post('https://reqres.in/api/users', newUser)
      .then(resp => {
          setUsers([ resp.data.data, ...users ]);
      }).catch( err => console.error(err))
        .finally(() => setFormValues(initialFormValues))
  }


  const validate = (name, value) => {
    yup.reach(schema, name)
      .validate(value)
      .then(() => setFormErrors({ ...formErrors, [name]: '' }))
      .catch(err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
  }

  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  //////////////// EVENT HANDLERS ////////////////
  const inputChange = (name, value) => {
  
    validate(name, value);
    setFormValues({
      ...formValues,
      [name]: value 
    })
  }

  const formSubmit = () => {
    const newUser = {
      name: formValues.first_name.trim(),
      email: formValues.email.trim(),
      password: formValues.password.trim(),
      confirmPassword: formValues.confirmPassword.trim(),
     
      termsOfService: ['termsOfService'].filter(checkedterm => !!formValues[checkedterm]),
    }
   
    postNewUser(newUser);
  }

  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  //////////////// SIDE EFFECTS ////////////////
  useEffect(() => {
    getUsers()
  }, [])

  useEffect(() => {
    schema.isValid(formValues).then(valid => setDisabled(!valid))
  }, [formValues])

  return (
    <div className='container'>
      <header><h1>Onboarding Users App</h1></header>

      <Form
        values={formValues}
        change={inputChange}
        submit={formSubmit}
        disabled={disabled}
        errors={formErrors}
      />

      {
        users.map(user => {
          return (
            <User key={user.id} details={user} />
          )
        })
      }
    </div>
  )
}

