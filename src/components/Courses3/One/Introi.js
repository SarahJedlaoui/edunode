import React, { Component, useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import NavBar from '../../NavBar';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import { clearErrors } from '../../../actions/errorActions';
import { reduxForm } from 'redux-form';
import { createBrowserHistory } from 'history';






const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return [
    'Course Post',
    'What are Stellar Ecosystem Proposals (SEPs)?',
    'How do SEPs define the standard way for Anchors and wallets to interact on behalf of users?',
    'Benefits of SEPs for Anchors, wallets, and users',
    'Conclusion',
    
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Hello everyone! In this post, we'll explore Stellar Ecosystem Proposals (SEPs) and their crucial role in defining a standard way for Anchors and wallets to interact on behalf of users. Understanding SEPs will provide you with valuable insights into the Stellar Network's underlying structure and functionality. Let's dive in!`;
    case 1:
      return 'SEPs are a set of standardized protocols and specifications proposed by the Stellar community to enhance the network"s interoperability, functionality, and ease of use. These proposals aim to establish a common language and framework for various components within the Stellar ecosystem, such as Anchors, wallets, and other services, to work together seamlessly. By adopting SEPs, developers and service providers can ensure that their products are compatible with the broader Stellar ecosystem, enabling a more efficient and accessible global financial infrastructure. ';
    case 2:
      return 'SEPs outline a series of standardized processes and APIs for Anchors and wallets to communicate and execute various operations on behalf of users. These processes ensure that users can easily interact with different services within the Stellar ecosystem without having to navigate through multiple unique interfaces or integration methods. Some of the key SEPs that define the standard way for Anchors and wallets to interact include:\
      SEP-6: This proposal defines a standard API for depositing and withdrawing digital assets on the Stellar Network. By following SEP-6, Anchors can provide a consistent interface for wallets to execute deposit and withdrawal operations, simplifying the user experience.\
      SEP-10: SEP-10 specifies an authentication protocol that allows Anchors and wallets to verify the identity of users securely. This protocol leverages Stellar"s built-in cryptographic capabilities to ensure that users can authenticate themselves without sharing sensitive information, enhancing privacy and security.\
      SEP-12: This proposal outlines a standardized process for collecting and managing user KYC (Know Your Customer) and AML (Anti-Money Laundering) information. By adopting SEP-12, Anchors and wallets can streamline the onboarding process and ensure compliance with regulatory requirements.\
      SEP-24: SEP-24 builds upon SEP-6 by offering an interactive, web-based interface for depositing and withdrawing assets. This proposal simplifies the process for users, especially those who are new to cryptocurrencies, by providing a familiar and user-friendly experience.';
    case 3:
      return 'Adopting SEPs offers several benefits for Anchors, wallets, and users within the Stellar ecosystem:\
      Interoperability: SEPs ensure that different services within the Stellar ecosystem can communicate and work together seamlessly, promoting a more efficient and interconnected financial infrastructure.\
      Ease of integration: By following standardized protocols, developers and service providers can reduce the time and effort required to integrate their products with the Stellar Network, enabling faster innovation and adoption.\
      Enhanced user experience: SEPs provide a consistent and familiar experience for users, simplifying interactions with various services and reducing the learning curve for new users.\
      Improved security and compliance: SEPs facilitate secure authentication and help Anchors and wallets implement robust AML and KYC procedures, ensuring compliance with regulatory requirements and enhancing user trust.';
    case 4:
      return `We hope this post has provided you with a clear understanding of Stellar Ecosystem Proposals (SEPs) and their role in defining the standard way for Anchors and wallets to interact on behalf of users. By adopting SEPs, the Stellar community can work together to create a more inclusive, efficient, and accessible global financial ecosystem.`;
    default:
      return 'Unknown step';
  }
}

export function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(1);
 const [activeProgress, setActiveProgress] = React.useState(0);
  const steps = getSteps();

 React.useEffect(() => {

   setActiveProgress((prevActiveStep) => prevActiveStep + 10);

 }, [activeStep]);

  const handleNext = () => {
      //  const step = activeStep
       setActiveStep((prevActiveStep) => prevActiveStep + 1);
       setTimeout(function () {
         window.location.href = '/courses/104/ii';
       }, 500);
      //  progressBar(activeStep)
  //   setTimeout(function () {
     
  //    window.location.href = '/courses/104/i';
  //  }, 1000);

       //  setActiveProgress((prevActiveStep) => prevActiveStep + 20);
     };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // setTimeout(function () {
    //    window.location.href = '/courses/104/';
    // }, 3000);
 setTimeout(function () {
   window.location.href = '/courses/104/';
 }, 500);
  };

//   const onSubmit = () => {
//     console.log("hi")
  
// }

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
               
                  <div>
                    <Button
                      type="button"
                      label="back"
                      id="back"
                      disabled={activeStep === 0}
                      onClick={handleBack}
                      className={classes.button}
                    >
                      Back
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={handleNext}
                      className={classes.button}
                    >
                      {activeStep === steps.length - 1
                        ? 'Finish'
                        : 'Next'}
                    </Button>
                  </div>
              
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper
          square
          elevation={0}
          className={classes.resetContainer}
        >
          
          <Typography>
            Course completed - Now get ready for the
            Quiz.
          </Typography>
          <Link to="/courses/104/1" className={classes.button}>
            Continue
          </Link>
        </Paper>
      )}
    </div>
  );
    
}





const history = createBrowserHistory();

const Introi = (props) => {
  const [state, setState] = useState();
  const [progress, setProgress] = useState(0);
  const [stepone, setStepone] = useState(10);
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (props.isAuthenticated) {
      history.push('/dashboard'); // Redirect to dashboard if user is authenticated
    }
  }, [props.isAuthenticated]);

  const onChange = (e) => {
    console.log('Please select a value');
  };

  return (
    <div>
      <NavBar></NavBar>
      <LinearProgressWithLabel value={10} />
      <VerticalLinearStepper onChange={console.log(state)} />
      <Footer />
    </div>
  );
};

Introi.propTypes = {
  auth: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  error: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

export default connect(mapStateToProps, { clearErrors })(Introi);

function LinearProgressWithLabel(props) {
  return (
    <Box display="flex" alignItems="center">
      <Box width="100%" mr={1}>
        <LinearProgress variant="determinate" {...props} />
      </Box>
      <Box minWidth={35}>
        <Typography
          variant="body2"
          color="textSecondary"
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
}

LinearProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate and buffer variants.
   * Value between 0 and 100.
   */
  value: PropTypes.number.isRequired,
};

// const useStyles = makeStyles({
//   root: {
//     width: '100%',
//   },
// });

function LinearWithValueLabel(props) {
  const classes = useStyles();
   const [progress, setProgress] = React.useState(props.props);

 React.useEffect(() => {
//  setProgress(prev => prev + 10)
 }, []);
// const now = 60;

  return (
    <div className={classes.root}>
      

      {/* <ProgressBar now={now} label={`${now}%`} /> */}
      
    </div>
  );
}