import React, { Component } from "react";
import { Formik } from "formik";
import {withStyles} from "@material-ui/core";
import { Form } from "./form";
import {Paper} from "@mui/material";
import { Link } from "react-router-dom";
import * as Yup from "yup";
import "./style.css"



const styles = theme => ({
 paper: {
   marginTop: theme.spacing.unit * 8,
   display: "flex",
   flexDirection: "column",
   alignItems: "center",
   justifyContent: "center",
   padding: `${theme.spacing.unit * 5}px ${theme.spacing.unit * 5}px ${theme
     .spacing.unit * 5}px`
 },
 container: {
   maxWidth: "200px",
   margin: "auto",
   display: "flex",
   alignItems: "center",
   justifyContent: "center"
 }
});
const validationSchema = Yup.object({
  name: Yup.string("Enter a name")
  .min(2, "Name must contain at least 2 characters")
  .required("Name is required"),
  email: Yup.string("Enter your email")
  .email("Enter a valid email")
  .required("Email is required"),
  password: Yup.string("")
  .min(8, "Password must contain at least 8 characters")
  .required("Enter your password"),
  confirmPassword: Yup.string("Enter your password")
  .required("Confirm your password")
  .oneOf([Yup.ref("password")], "Password does not match")
})

class Register extends Component {
 constructor(props) {
   super(props);
   this.state = {};

 }


 render() {
   const classes = this.props;
   const values = { name: "", email: "", confirmPassword: "", password: "" };

   return (
     <React.Fragment>
          <div id="form" className={classes.container}>
         <Paper elevation={1} className={classes.paper}>
           <h1>Signup</h1>
           <Formik
         render={props => <Form {...props} />}
          initialValues={values}
         validationSchema={validationSchema}

           />
         </Paper>
       </div>
       <Link to="/">
     Return
     </Link>
     </React.Fragment>
     
   );
 }
}

export default withStyles(styles)(Register);