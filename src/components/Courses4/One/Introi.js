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
    'Introduction:',
    'Distributed Ledger Technology (DLT):',
    'Consensus Mechanisms:',
    'Smart Contracts:',
    'Privacy:',
    'Identity Management:',
    'Modularity:',
    'Conclusion:',
    
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Hyperledger is an open-source blockchain platform that was created by the Linux Foundation in 2015. It is designed to support enterprise blockchain applications with a focus on scalability, privacy, and security. Hyperledger is not a cryptocurrency, but rather a distributed ledger technology (DLT) that is used to build decentralized applications for businesses. In this post, we will cover the most important features and definitions of Hyperledger.`;
    case 1:
      return 'Hyperledger is a distributed ledger technology (DLT) that allows for the creation of a shared and decentralized database that can be accessed by all participants in a network. The ledger is distributed across all the nodes in the network, and each node has a copy of the ledger. This means that there is no need for a central authority to verify transactions or maintain the ledger.';
    case 2:
      return 'Hyperledger uses different consensus mechanisms to verify transactions and maintain the integrity of the ledger. One of the most popular consensus mechanisms used by Hyperledger is the Practical Byzantine Fault Tolerance (PBFT) algorithm. PBFT is a fault-tolerant consensus algorithm that allows for fast transaction confirmation and is designed to be resistant to malicious attacks.';
    case 3:
      return 'Hyperledger allows for the creation of smart contracts, which are self-executing contracts that can automate the negotiation and execution of agreements between parties. Smart contracts are written in programming languages such as Go or Java and are executed on the Hyperledger blockchain.';
    case 4:
      return `Hyperledger provides different levels of privacy for transactions, depending on the needs of the application. This is achieved through the use of different technologies such as channels, which allow for private communication between specific parties, and Fabric Private Data Collections, which allow for the storage of private data within a channel.`;
    case 5:
      return `Hyperledger provides robust identity management capabilities, which enable participants to authenticate themselves on the network and control access to resources. This is achieved through the use of digital certificates and access control lists (ACLs).`;
    case 6:
      return `Hyperledger is a modular platform, which means that different components can be swapped out and replaced with other components as needed. This enables developers to customize the platform to meet the specific needs of their application.`;
    case 7:
      return `Hyperledger is a powerful blockchain platform that provides enterprise-grade features and capabilities. It is designed to support the creation of decentralized applications for businesses and provides different levels of privacy, identity management, and modularity. Hyperledger is a rapidly evolving technology, and developers who are interested in building applications on the platform should stay up-to-date with the latest developments and best practices.`;
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
         window.location.href = '/courses/105/ii';
       }, 500);
      //  progressBar(activeStep)
  //   setTimeout(function () {
     
  //    window.location.href = '/courses/105/i';
  //  }, 1000);

       //  setActiveProgress((prevActiveStep) => prevActiveStep + 20);
     };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    // setTimeout(function () {
    //    window.location.href = '/courses/105/';
    // }, 3000);
 setTimeout(function () {
   window.location.href = '/courses/105/';
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
          <Link to="/courses/105/1" className={classes.button}>
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