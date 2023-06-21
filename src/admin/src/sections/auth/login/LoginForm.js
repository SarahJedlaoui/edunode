import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// @mui
import { Link, Stack, IconButton, InputAdornment, TextField, Checkbox } from '@mui/material';
import { LoadingButton } from '@mui/lab';
import { Button } from '@mui/material';
// components
import Iconify from '../../../components/iconify';
import { makeStyles } from '@mui/styles';
import { login } from "../../../../../actions/authActions";
import { connect } from 'react-redux';
import { reduxForm, Field } from 'redux-form';
// ----------------------------------------------------------------------
const useStyles = makeStyles((theme) => ({
  blueButton: {
    backgroundColor: theme.palette.primary.main,
    color: 'white',
  },
}));

const validate = values => {
  const errors = {}
  const requiredFields = [
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
  if (values.password && values.password.length < 8) {
    errors.password = 'Password must be at least 8 characters'
  }
  return errors
}


 function LoginForm() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    navigate('/dashboard', { replace: true });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const values = {
      email: event.target.email.value,
      password: event.target.password.value,
    };

    const newUser = {
      email: values.email,
      password: values.password,
    };

    this.props.login(newUser)
      .then(() => {
        if (this.props.auth.user) {
          navigate('/dashboard');
        } else {
          this.setState({ error: true });
        }
      })
      .catch((error) => {
        console.log(error);
        this.setState({ showError: true });
      });
  };

  const classes = useStyles();

  return (
    <>
    
    
   
      <Stack spacing={3}>
        <TextField name="email" label="Email address" />

        <TextField
          name="password"
          label="Password"
          type={showPassword ? 'text' : 'password'}
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <IconButton onClick={() => setShowPassword(!showPassword)} edge="end">
                  <Iconify icon={showPassword ? 'eva:eye-fill' : 'eva:eye-off-fill'} />
                </IconButton>
              </InputAdornment>
            ),
          }}
        />
      </Stack>

      <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ my: 2 }}>
        <Checkbox name="remember" label="Remember me" />
        <Link variant="subtitle2" underline="hover">
          Forgot password?
        </Link>
      </Stack>

      
      <Button fullWidth size="large" type="submit" variant="contained" className={classes.blueButton} onClick={handleSubmit}>
        Login
      </Button>
    </>
  );
}
const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth
})

const mapDispatchToProps = {
  // Add the required action creators here
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(
  reduxForm({
    form: "LoginReduxForm",
    fields: ['email', 'password'],
    validate, // Add the required validation function here
  })(LoginForm)
);