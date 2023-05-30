import React from 'react';
import { makeStyles } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import { Link, Redirect, BrowserRouter } from 'react-router-dom';


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
    'Issuing assets and stablecoins',
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
      return `The Stellar Network is a decentralized payment network for building financial products that connect people everywhere. The technical development of Stellar is led by the Stellar Development Foundation (SDF), which is a non-profit organization that uses blockchain technology and their native cryptocurrency asset (lumens or XLM) to solve the current problems of sending money around the world in a fast and low-fee way. The platform is run by individuals and organizations all over the world, each contributing some compute, storage, and network capacity.`;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
    // const [activeProgress, setActiveProgress] = React.useState(10);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    // setActiveProgress((prevActiveProgress) => prevActiveProgress + 10);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };



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
          <Link to="/courses/110/1" className={classes.button}>
            Continue
          </Link>
        </Paper>
      )}
    </div>
  );
}
