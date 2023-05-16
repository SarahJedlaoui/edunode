import React, { Component } from 'react'
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
//import ProgressBar from 'react-bootstrap/ProgressBar';
import Box from '@mui/material/Box';
import NavBar from '../../NavBar';
import Footer from '../../Footer';
import { connect } from 'react-redux';
import { clearErrors } from '../../../actions/errorActions';
import { reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';
import "./styles.css"
import Precourse from "../Precourse.js"






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
    'Introduction to Blockchain Oracles: Key Definitions and Concepts:',
    'Key Definitions:',
    'Blockchain:',
    'Smart Contracts:',
    'Blockchain Oracles:',
    'Types of Oracles:',
    'Oracle Problem:',
    'Conclusion: '

  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Hello and welcome to the first lesson of our course about Blockchain Oracles!`;
    case 1:
      return "In this post, we will delve into the main definitions and concepts related to Blockchain Oracles, a crucial component in the world of blockchain and smart contracts. Let's get started!";
    case 2:
      return 'A blockchain is a decentralized and distributed digital ledger that records transactions across many computers so that any involved record cannot be altered retroactively, without the alteration of all subsequent blocks. This allows participants to verify and audit transactions independently.';
    case 3:
      return 'A smart contract is a self-executing contract with the terms of the agreement between buyer and seller being directly written into lines of code. The code and the agreements contained therein exist across a distributed, decentralized blockchain network. Smart contracts permit trusted transactions and agreements to be carried out among disparate, anonymous parties without the need for a central authority, legal system, or external enforcement mechanism.';
    case 4:
      return `Blockchain oracles are third-party services that provide smart contracts with external information. They serve as bridges between blockchains and the outside world. Oracles are vital within the blockchain ecosystem because they broaden the scope that smart contracts can operate within.`;
    case 5:
      return `1-Software Oracles: These oracles handle information available online. For instance, temperature, prices of commodities and goods, flight or train delays, etc.

      2-Hardware Oracles: These oracles are used for monitoring the physical world and relaying this information back to the blockchain. For example, they can be RFID sensors in supply chain monitoring.
      
      3-Inbound Oracles: These provide the smart contract with data from the external world.
      
      4-Outbound Oracles: These provide smart contracts the ability to send data to the outside world.
      
      5-Consensus Oracles: In situations where there's a need for the verification of authenticity, different oracles are used and the most common result amongst them is considered as the true one. `;
    case 6:
      return `The "Oracle Problem" is a term that describes the security and trust issues associated with oracles. Since oracles are third-party services with a central point of control, they introduce a level of trust into the blockchain ecosystem, which otherwise aims to be trustless. If the oracle is compromised, the data it feeds into the smart contract could also be compromised.`;
    case 7:
      return `Stay tuned for our next lesson where we'll dive deeper into how Blockchain Oracles work, their benefits, and their challenges. We'll also explore real-world use cases to help you understand their practical applications in the blockchain ecosystem.`;
    default:
      return 'Unknown step';
  }
}

export function VerticalLinearStepper(props) {
  const classes = useStyles();
  
  const steps = getSteps();
  const { activeStep, handleNext, handleBack } = props;

 

  return (
    <>
      <Precourse />
      <div className={classes.root} >
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
            <Link to="/courses/108/1" className={classes.button}>
              Continue
            </Link>
          </Paper>
        )}
      </div>
    </>
  );

}





class Intro extends Component {
  navigateTo = () => {
    const navigate = useNavigate();
    navigate('/courses/108');
  }
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      activeStep: 0,
      activeProgress: 0,
      stepone: 10,
      isLoading: false,
      errors: {},
    };
    this.onChangeOne = this.onChange.bind(this);
  }


  handleNext = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep + 1,
      activeProgress: prevState.activeProgress + 10,
    }));
  };

  handleBack = () => {
    this.setState((prevState) => ({
      activeStep: prevState.activeStep - 1,
      activeProgress: prevState.activeProgress - 10,
    }));
  };

  onChange = (e) => {
    // e.preventDefault();
    console.log('Please select a value');
  };

  render(props, state) {
    const { activeStep, activeProgress } = this.state;
    const progress = this.state.progress
    return (
      <div>
        <NavBar></NavBar>
        <LinearProgressWithLabel value={activeProgress} />
        <VerticalLinearStepper
          activeStep={activeStep}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
        />
        <Footer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth,
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
});

Intro = connect(mapStateToProps, { clearErrors })(Intro);

export default Intro = reduxForm({
  form: '',
  fields: [''],
  clearErrors,

})(Intro);

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