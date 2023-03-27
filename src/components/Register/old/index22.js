import React, {useEffect} from 'react';
import { withFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import {useSelector, useDispatch} from 'react-redux'
import { PropTypes } from "prop-types";

import { clearErrors } from "../../actions/errorActions";
import NewForm from "./NewForm"

// const styles = () => ({
//   card: {
//     maxWidth: 420,
//     marginTop: 50
//   },
//   container: {
//     display: "Flex",
//     justifyContent: "center"
//   },
//   actions: {
//     float: "right"
//   }
// });

// const courseCategory = [
//   {
//     value: "webDevelopment",
//     label: "Web Development"
//   },
//   {
//     value: "networking",
//     label: "Networking"
//   },
//   {
//     value: "computerScience",
//     label: "Computer Science"
//   }
// ];

// function handleSubmit(value, { setSubmitting }, e) {

//   const [name, setName] = useState('Mary');
  
//   const newUserState = useSelector(state => state.value)
//  // const dispatch = useDispatch()
  
//   useEffect(() => {
//     register(newUserState)
//   }, [])


//   setSubmitting(false);
// }




const form = props => {

  


  //  const { firstName, lastName, email, course, password } = this.state

    

  const {
    classes,
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
    handleReset
  } = props;

  return (
    <NewForm />
  );
};

const Form = withFormik({


  mapPropsToValues: ({
    firstName,
    lastName,
    email,
    course,
    password,
    confirmPassword
  }) => {
    return {
      firstName: firstName || "",
      lastName: lastName || "",
      email: email || "",
      course: course || "",
      password: password || "",
      confirmPassword: confirmPassword || ""
    };
  },

  validationSchema: Yup.object().shape({
    firstName: Yup.string().required("Required"),
    lastName: Yup.string().required("Required"),
    email: Yup.string()
      .email("Enter a valid email")
      .required("Email is required"),
    course: Yup.string().required("Select your course category"),
    password: Yup.string()
      .min(8, "Password must contain at least 8 characters")
      .required("Enter your password"),
    confirmPassword: Yup.string()
      .required("Confirm your password")
      .oneOf([Yup.ref("password")], "Password does not match")
  }),

// onChange: e => {
//     this.setState({ [e.target.name]: e.target.value });
// },

//handleSubmit: (newUser, { setSubmitting }, e) => {

    // const newUser = {
    //    firstName,
    //    lastName,
    //    email,
    //    course,
    //    password
    // };
 //   e.preventDefault();
    // console.log(newUser);

 //    this.props.register(newUser);
 //setSubmitting(false);



 
    // setTimeout(() => {
    //   // submit to the server
    //   alert(JSON.stringify(values, null, 2));


    // }, 1000);
 // }
}
)(form);

export default Form;