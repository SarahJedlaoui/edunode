import React, { useState } from "react";
import {Button} from "@mui/material";
import {TextField} from "@mui/material";


export const Form = props => {
  const {
    values: { name, email, password, confirmPassword },
    errors,
    touched,
    handleChange,
    isValid,
    setFieldTouched
  } = props;

const change = (name, e) => {
  e.persist();
  handleChange(e);
  setFieldTouched(name, true, false);
 };

  // const values = useSelector(props => props.values)

 const handleSubmit = e => {
  e.preventDefault();
   // const [name, setname] = useState("")

// const { name, email, password } = props.values
  
//     // create user object
//    const newUser = {
//    name,
//     email,
// password

//     };

      // attempt to register
 // register(newUser);
/// alert("registered")
};
  return (
    <form
      onSubmit={handleSubmit}
    >
      <TextField
        id="name"
        name="name"
        helperText={touched.name ? errors.name : ""}
        error={touched.name && Boolean(errors.name)}
        label="Name"
        value={name}
        onChange={change.bind(null, "name")}
        fullWidth
 
      />
      <TextField
        id="email"
        name="email"
        helperText={touched.email ? errors.email : ""}
        error={touched.email && Boolean(errors.email)}
        label="Email"
        fullWidth
        value={email}
        onChange={change.bind(null, "email")}
 
      />
      <TextField
        id="password"
        name="password"
        helperText={touched.password ? errors.password : ""}
        error={touched.password && Boolean(errors.password)}
        label="Password"
        fullWidth
        type="password"
        value={password}
        onChange={change.bind(null, "password")}
 
      />
      <TextField
        id="confirmPassword"
        name="confirmPassword"
        helperText={touched.confirmPassword ? errors.confirmPassword : ""}
        error={touched.confirmPassword && Boolean(errors.confirmPassword)}
        label="Confirm Password"
        fullWidth
        type="password"
        value={confirmPassword}
        onChange={change.bind(null, "confirmPassword")}
 
      />
      <Button
        type="submit"
        fullWidth
        color="primary"
        disabled={!isValid}
      >
        Submit
      </Button>
    </form>
  );
 };