import React from 'react'
import { Field, reduxForm } from 'redux-form'
import {TextField} from '@mui/material'
import {Button} from "@mui/material"
import { register } from '../../actions/authActions'
import "./style.css"
import handleSubmit from "./submit"

const initialValues = {
  firstName,
  lastName,
  email,
  password
}

const validate = values => {
  const errors = {}
  const requiredFields = [
    'firstName',
    'lastName',
    'email',  
    "password"
  ]
  requiredFields.forEach(field => {
    if (!values[field]) {
      errors[field] = 'Required'
    }
  })
  if (
    values.email &&
    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
  ) {
    errors.email = 'Invalid email address'
  }
  
  if (values.firstName && values.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters'
  }
  if (values.lastName && values.lastName.length < 2) {
    errors.lastName = 'Second name must be at least 2 characters'
  }
  if (values.password && values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }
  return errors
}

const renderTextField = ({
  label,
  input,
  meta: { touched, invalid, error },
  ...custom
}) => (
    <TextField
      label={label}
      placeholder={label}
      error={touched && invalid}
      helperText={touched && error}
      {...input}
      {...custom}
    />
  )




export const Register = (props) => {
  const { handleSubmit, error, pristine, submitting } = props
  

  return (
    <form id="form" onSubmit={handleSubmit}>
      <div>Register</div>
      <div >
        <Field
          name="firstName" 
          type="text"
          component={renderTextField}
          label="First Name"
          id="firstName"
        />
      </div>
      <div>
        <Field 
        name="lastName" 
        type="text" 
        component={renderTextField} 
        label="Last Name" 
        id="secondName" />
      </div>
      <div>
        <Field 
        name="email" 
        type="email" 
        component={renderTextField} 
        label="Email" 
        id="email" />
      </div>
      <div>
        <Field
          name="password"
          type="password"
          component={renderTextField}
          label="Password"
          id="password"
        />
        {error && <strong>{error}</strong>}
      </div>

      <div>
        <Button variant="contained" id="register" type="submit" disabled={pristine || submitting}>
          Register
        </Button>
      </div>
    </form>
  )
}

export default reduxForm({
  form: 'RegisterFormRedux', // a unique identifier for this form
  validate,
  register,
  handleSubmit
})(Register)