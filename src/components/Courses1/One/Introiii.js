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
    'Intro to the Stellar Network',
    'What is Stellar for?',
    'Issuing assets and stablecoins',
    'Who builds on Stellar?',
    'SDF',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `The Stellar Network is an open-source network which makes it possible to create, send and trade digital representations of all forms of money such as: euros, dollars, pesos, bitcoin, real estate pretty much any type of assets. It’s designed so all the world’s financial systems can work together on a single network. Stellar has no owner; if anything it’s owned by the public. The software runs across a decentralized, open network and handles millions of transactions each day. Like Bitcoin and Ethereum, Stellar relies on blockchain to keep the network in sync, but the end-user experience is more like cash. Stellar is much faster, cheaper, and more energy-efficient than typical blockchain-based systems.`;
    case 1:
      return 'The Stellar Network allows anyone to create a redeemable, tradable representation of any asset. Such representations are called tokens. Tokens are most useful when tied to currencies (representing dollars or yuan or euros digitally makes payments borderless and instant) but in theory, on Stellar, you could issue a token for corn bushels or gold or shares of a REIT or an hour of your time as a consultant. In a sense, Stellar offers a generalized toolkit for anyone to do what Tether did for the Dollar with their USDT, or what Coinbase is doing with their USDC. Stellar lets you digitize value and then issue and redeem claims on it; the platform was designed for stablecoins before stablecoin was even a word. ';
    case 2:
      return 'The Stellar network launched in 2015. Since then it’s processed more than 450 million operations made by over 4 million individual accounts. Large enterprise companies and companies as small as single-dev startups have chosen Stellar to move money and access new markets. The Stellar network has a native digital currency, the lumen, that’s required in small amounts for initializing accounts and making transactions but, beyond those requirements, Stellar doesn’t privilege any particular currency. It’s specifically designed to make traditional forms of money—the money people have been spending and saving for centuries—more useful and accessible.';
    case 3:
      return 'For end-users, Stellar is a fast, efficient network for trading, saving, and spending digital money. For builders, it’s open financial infrastructure. Anyone can access it; there’s no permission or application needed. That basket of currency tokens we just mentioned, those are on the network, ready to use. We have euros, bitcoins, dollars, Mexican pesos, Argentinian pesos, Brazilian reais, and Nigerian naira. Their respective issuers handle deposit, redemption, and compliance, so builders can focus on end-user experience. This same openness also applies to the token layer: a financial institution can issue new digital tokens to fill a market need, say, for the Swiss Franc, without joining a proprietary “association” or dealing with a gatekeeper. The total power of Stellar grows with each new company and developer.';
    case 4:
      return `The Stellar Network is a decentralized payment network for building financial products that connect people everywhere. The technical development of Stellar is led by the Stellar Development Foundation (SDF), which is a non-profit organization that uses blockchain technology and their native cryptocurrency asset (lumens or XLM) to solve the current problems of sending money around the world in a fast and low-fee way. The platform is run by individuals and organizations all over the world, each contributing some compute, storage, and network capacity.`;
    default:
      return 'Unknown step';
  }
}

export function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(3);
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
     
     window.location.href = '/courses/102/iiii';
   }, 1000);

       //  setActiveProgress((prevActiveStep) => prevActiveStep + 20);
     };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setTimeout(function () {
       window.location.href = '/courses/102/ii';
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

const Introiii = (props) => {
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

Introiii.propTypes = {
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

export default connect(mapStateToProps, { clearErrors })(Introiii);

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