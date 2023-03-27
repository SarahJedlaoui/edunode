import React, { Component } from 'react'

class CourseOne extends Component {
  render() {
    return <div></div>;
  }
}



const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Courses = connect(mapStateToProps, { verifyCode, clearErrors })(
  Courses,
);

export default Courses = reduxForm({
  form: '',
  fields: [''],
  validate,
  clearErrors,
  verifyCode,
})(withRouter(CourseOne));

