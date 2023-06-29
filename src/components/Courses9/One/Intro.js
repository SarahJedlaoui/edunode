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
import Navbar from '../../Dashboard/Navbar1';

import { connect } from 'react-redux';
import { clearErrors } from '../../../actions/errorActions';
import { reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';
import "./styles.css"
import Precourse from "../Precourse.js"
import { Container } from '@mui/material';
import ReactPlayer from 'react-player'





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
    '1. Signatures, Hashing, Hash Chains, e-cash, and Motivation: ',
    '2. Proof of Work and Mining:',
    '3. Signatures:',
    '4. Transactions and the UTXO model',
    '5. Synchronization Process and Pruning:',
    '6. Wallets and SPV:',
    '7. Catena: Efficient Non-equivocation via Bitcoin:',
    '8. Forks:',
    '10. PoW Recap, Other Fork Types: ',
    '11. Fees:',
    '12. Transaction Malleability and Segregated Witness:',
    '13. Payment Channels and Lightning Network:',
    '14. Lightning Network and Cross-chain Swaps',
    '15. Discreet Log Contracts',
    '16. MAST, Taproot, Graftroot',
    '17. Anonymity, Coinjoin and Signature Aggregation',
    '18. Confidential Transactions:',
    '22. Alternative Consensus Mechanisms',
    '23. New Directions in Crypto',
    '24. zkLedger',
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=IJquEYhiq_U' />
        </div>
      );
    case 1:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=zYzEmBlJ77s' />
        </div>
      );
    case 2:
      return (
        <div>

          <ReactPlayer url='https://www.youtube.com/watch?v=0Q5IimX-AAc' />


        </div>
      );
    case 3:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=VT2o4KCEbes' />
        </div>
      )
    case 4:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=1Qws70XGSq4' />
        </div>
      );
    case 5:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=mhQebe1Y4d0' />
        </div>
      );
    case 6:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=CCeq5PChvuk' />
        </div>
      );
    case 7:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=U2yAcsj7P_E' />
        </div>
      );
    case 8:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=muwNEvhy6Po' />
        </div>
      );

    case 9:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=wXWbdiOBW5w' />
        </div>
      );


    case 10:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=7o5shPC0R2k' />
        </div>
      );

    case 11:
      return (
        <div>

          <ReactPlayer url='https://www.youtube.com/watch?v=Hzv9WuqIzA0' />
        </div>
      );
    case 12:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=hNR3WTboo_U' />
        </div>
      );
    case 13:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=P6AX8KdXAts' />
        </div>
      );
    case 14:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=gF4Mkkhyz1Q' />
        </div>
      );
    case 15:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=BFwc2XA8rSk' />
        </div>
      );
    case 16:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=UySc4jxbqi4' />
        </div>
      );
    case 17:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=mBdrvfytLDQ' />
        </div>
      );
    case 18:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=74_BKWR3n0k' />
        </div>
      );
    case 19:
      return (
        <div>
          <ReactPlayer url='https://www.youtube.com/watch?v=yKa-KxY-YJk' />
        </div>
      );
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
            <Link to="/courses/110/1" className={classes.button}>
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
    navigate('/courses/110');
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
        <Navbar></Navbar>
        <LinearProgressWithLabel value={activeProgress} />
        <VerticalLinearStepper
          activeStep={activeStep}
          handleNext={this.handleNext}
          handleBack={this.handleBack}
        />
        
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