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
    'Course Post',
    'What are Anchors on the Stellar Network?',
    'How do Anchors work?',
    'How to become an Anchor on the Stellar Network?',
    'Conclusion',
    
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return `Hello everyone! Today, we'll dive into the world of the Stellar Network and explore a crucial aspect of its ecosystem – the Anchors. We will discuss what Anchors are, how they work, and how you can become one. Let's get started!`;
    case 1:
      return 'Anchors are trusted entities on the Stellar Network that act as a bridge between traditional financial systems and the Stellar ecosystem. They provide essential services by allowing users to deposit and withdraw their local currency (fiat) or other assets, such as cryptocurrencies, in exchange for Stellar-based tokens. These tokens can then be traded and transferred within the Stellar Network seamlessly and cost-effectively. ';
    case 2:
      return 'Anchors operate by issuing tokens that represent real-world assets, such as fiat currencies or cryptocurrencies. They maintain a one-to-one reserve of the underlying asset for every token they issue, ensuring that the tokens are fully backed and can be redeemed at any time. Here is a step-by-step breakdown of how Anchors work:\
      A user deposits a real-world asset (e.g., USD) with an Anchor.\
      The Anchor mints an equivalent amount of Stellar-based tokens (e.g., USDt) and credits the user s Stellar account.\
      The user can now trade, send, or receive the tokens within the Stellar Network.\
      When the user wants to redeem their tokens, they send the tokens back to the Anchor.\
      The Anchor verifies the transaction and releases the corresponding real-world asset (e.g., USD) back to the user.';
    case 3:
      return 'Becoming an Anchor requires fulfilling several criteria, ensuring that you can provide a reliable and secure service to users. Here"s a step-by-step guide on how to become an Anchor:\
      Establish a legal entity: To operate as an Anchor, you need to create a registered company or organization in your jurisdiction. This entity will be responsible for complying with all applicable laws and regulations, such as Anti-Money Laundering (AML) and Know Your Customer (KYC) requirements.\
      Build a robust infrastructure: Develop a secure and scalable technical infrastructure to handle deposits, withdrawals, token issuance, and redemption processes. This will include creating APIs for users to interact with your services and integrating with the Stellar Network.\
      Maintain reserves: Ensure that you have a one-to-one reserve of the real-world assets for every token you issue. This is critical for maintaining the trust and stability of your tokens within the Stellar ecosystem.\
      Implement AML and KYC procedures: Develop and enforce robust AML and KYC policies to prevent fraud and comply with regulatory requirements. This includes verifying the identity of users and monitoring transactions for suspicious activities.\
      Acquire necessary licenses and approvals: Obtain any required licenses or regulatory approvals to operate as an Anchor in your jurisdiction. This may involve working with financial regulators, banks, and other relevant authorities.\
      Join the Stellar Network: Finally, submit an application to join the Stellar Network as an Anchor. Once approved, you can start providing your services to users worldwide.';
    case 4:
      return `We hope this post has given you a clear understanding of what Anchors are, how they work, and how you can become one on the Stellar Network. Anchors play a critical role in connecting traditional financial systems with the world of digital assets, enabling a more inclusive, efficient, and accessible global financial ecosystem. Good luck on your journey to becoming an Anchor!`;
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
    <Precourse  />
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
          <Link to="/courses/103/1" className={classes.button}>
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
    navigate('/courses/103');
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
        <VerticalLinearStepper  />


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