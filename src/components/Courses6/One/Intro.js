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
    'What is Ethereum?:',
    'Ether and Gas:',
    'Smart Contracts:',
    'Decentralized Applications (dApps):',
    'Decentralized Finance (DeFi):',
    'Key Concepts:',
    'Conclusion: '

  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Hello everyone and welcome to our course on Ethereum. Over the next few weeks, we'll be diving into the world of blockchain technology, smart contracts, and decentralized finance, all of which revolve around Ethereum. Ethereum is an open-source, blockchain-based platform that allows developers to build and deploy decentralized applications (dApps). These dApps operate without any downtime, fraud, control, or interference from a third party, creating a world of applications that are completely free of any central authority control.`;
    case 1:
      return 'Ether (ETH) is the native cryptocurrency of the Ethereum platform. It is used as "fuel" to conduct transactions and run applications on the Ethereum network. This is where the term "gas" comes into play. In the Ethereum network, gas refers to the unit that measures the amount of computational effort required to execute specific operations.';
    case 2:
      return 'One of the most groundbreaking features of Ethereum is its support for smart contracts. A smart contract is a self-executing contract where the terms of the agreement are directly written into lines of code. They are executed by the Ethereum blockchain, making them transparent, trustless, and without the need for a third party.';
    case 3:
      return 'Decentralized applications, or dApps, are digital applications or programs that run on a blockchain or P2P network of computers instead of a single computer, and are outside the purview and control of a single authority. Many dApps built on Ethereum have smart contracts at their core.';
    case 4:
      return `Finally, we'll discuss DeFi, or decentralized finance. This is an umbrella term for financial applications in cryptocurrency or blockchain geared toward disrupting financial intermediaries. Ethereum has been the primary network upon which these applications are built.`;
    case 5:
      return `1-Decentralized Finance (DeFi): An ecosystem of financial applications built on top of blockchain networks, primarily Ethereum.\

      2-Blockchain: A system of recording information in a way that makes it difficult or impossible to change, hack, or cheat the system. A blockchain is essentially a digital ledger of transactions that is duplicated and distributed across the entire network of computer systems on the blockchain.
      
      3-Decentralized Applications (dApps): Applications that run on a P2P network of computers, often leveraging smart contracts.
      
      4-Smart Contract: A self-executing contract with the terms of the agreement being written into code.
      
      5-Ether (ETH): The native cryptocurrency of the Ethereum platform.
      
      6-Gas: A unit of measurement for the computational effort in conducting transactions or executing smart `;
    case 6:
      return `That's it for our initial introduction. In the next course, we'll start to delve into each concept more deeply, and by the end of this course, you should have a strong understanding of Ethereum and its various applications. Looking forward to our learning journey!
      Stay tuned for our next course on Ethereum's blockchain architecture and its consensus mechanism, Proof-of-Stake (PoS).`;
    default:
      return 'Unknown step';
  }
}

export function VerticalLinearStepper(props) {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const [activeProgress, setActiveProgress] = React.useState(0);
  const steps = getSteps();

  React.useEffect(() => {

    setActiveProgress((prevActiveStep) => prevActiveStep + 10);

  }, [activeStep]);

  const handleNext = () => {
    //  const step = activeStep
    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    //  progressBar(activeStep)
    // window.location.href = '/courses/101/i';

    //  setActiveProgress((prevActiveStep) => prevActiveStep + 20);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  //   const onSubmit = () => {
  //     console.log("hi")

  // }

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
            <Link to="/courses/107/1" className={classes.button}>
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
    navigate('/courses/107');
  }
  constructor(props) {
    super(props);
    this.state = {
      progress: 0,
      stepone: 10,
      isLoading: false,
      errors: {},
    };
    this.onChangeOne = this.onChange.bind(this);
  }

  onChange = (e) => {
    // e.preventDefault();
    console.log('Please select a value');
  };

  render(props, state) {
    const progress = this.state.progress
    return (
      <div>
        <NavBar></NavBar>
        <LinearProgressWithLabel value={5} />
        <VerticalLinearStepper />


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