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
    'Intro to Operations',
    'Which kind of operations exist (1/2)',
    'Which kind of operations exist (2/2)',
    'Smart Contracts and Escrow Transactions:',
    'Conclusion to operations',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The Stellar Network is a decentralized, open-source platform that facilitates cross-border transactions and digital asset exchanges. In this one-page course, you'll learn about the key operations that enable you to connect to and interact with the Stellar Network. By the end of this course, you'll have a basic understanding of the operations that power Stellar's innovative platform.`;
    case 1:
      return'Account Creation and Management: \n\
      -Creating a Stellar Account: Learn how to generate a public-private key pair and set up a Stellar account. \n\
      -Funding an Account: Understand the process of funding a Stellar account using the native currency, Lumens (XLM). \n\
      -Merging Accounts: Discover how to merge two Stellar accounts and transfer the remaining XLM to a destination account.\n\
      -Assets and Trustlines: \n\
      -Issuing Assets: Learn about the process of creating custom assets on the Stellar Network. \n\
      -Establishing Trustlines: Understand the importance of trustlines, which enable users to hold and transact with issued assets.\n\
      -Payments and Transactions: \n\
      -Making Payments: Discover how to send payments in XLM or custom assets between Stellar accounts. \n\
      -Path Payments: Learn how to convert one asset to another during a payment transaction, leveraging the Stellar Network"s built-in decentralized exchange.';
    case 2:
      return '1-Offers and Order Books:\n\
      -Creating Offers: Understand the process of creating offers to buy or sell assets on the Stellar decentralized exchange.\n\
      -Managing Order Books: Learn how to view and manage your offers on the Stellar order books. \n\
      2-Account Monitoring and Security:\n\
      -Account Data and History: Discover how to access and interpret your account"s transaction history and data.\n\
      -Multi-Signature Accounts: Learn about multi-signature accounts, a security feature that requires multiple signatures to authorize transactions. ';
    case 3:
      return '1-Stellar Smart Contracts: Learn how Stellar supports simple smart contracts using pre-defined conditions, such as time locks and multi-signature requirements, to automate transactions on the network. \n\
      2-Escrow Transactions: Discover how to create escrow transactions, which use Stellar"s smart contract capabilities to hold and release funds based on specific conditions or time constraints, ensuring secure and trustless transactions between parties.';
    case 4:
      return `With this foundational knowledge of Stellar Network operations, you can now connect to the platform and begin exploring its vast potential. Whether you're an individual looking for a better way to transfer funds or a developer seeking to leverage Stellar's powerful technology, understanding these core operations will help you make the most of the Stellar Network. Happy exploring!`;
    default:
      return 'Unknown step';
  }
}
export function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(4);
 const [activeProgress, setActiveProgress] = React.useState(0);
  const steps = getSteps();

 React.useEffect(() => {

   setActiveProgress((prevActiveStep) => prevActiveStep + 10);

 }, [activeStep]);

  const handleNext = () => {
      //  const step = activeStep
       setActiveStep((prevActiveStep) => prevActiveStep + 1);
      //  progressBar(activeStep)
    setTimeout(function () {
     
     window.location.href = '/courses/102/iiiii';
   }, 1000);

       //  setActiveProgress((prevActiveStep) => prevActiveStep + 20);
     };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setTimeout(function () {
       window.location.href = '/courses/102/iii';
    }, 3000);
   
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
            Course introduction completed - Now get ready for the
            Quiz.
          </Typography>
          <Link to="/courses/102/1" className={classes.button}>
            Continue
          </Link>
        </Paper>
      )}
    </div>
  );
    
}




const history = createBrowserHistory();

const Introiiii = (props) => {
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
      
    </div>
  );
};

Introiiii.propTypes = {
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

export default connect(mapStateToProps, { clearErrors })(Introiiii);
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