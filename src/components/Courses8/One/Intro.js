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
    '1. Introduction: ',
    '2. Money, Ledgers, and Bitcoin:',
    '3. Blockchain Basics & Cryptography:',
    '4. Blockchain Basics & Consensus',
    '5. Blockchain Basics & Transactions, UTXO and Script Code:',
    '6. Smart Contracts and DApps:',
    '7. Technical Challenges:',
    '8. Public Policy:',
    '9. Permissioned Systems: ',
    '10. Financial System Challenges & Opportunities',
    '11. Blockchain Economics',
    '12. Assessing Use Cases',
    '13. Payments, Part 1',
    '14. Payments, Part 2',
    '15. Central Banks & Commercial Banking, Part 1',
    '16. Central Banks & Commercial Banking, Part 2',
    '17. Secondary Markets & Crypto-Exchanges',
    '19. Primary Markets, ICOs & Venture Capital, Part 1',
    '20. Primary Markets, ICOs & Venture Capital, Part 2',
    '21. Post Trade Clearing, Settlement & Processing',
    '22. Trade Finance & Supply Chain',
    '23. Digital ID',
    '24. Conclusion',






  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/EH6vE97qIP4"
            title="Session 1: Introduction:"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );
    case 1:
      return (
        <div>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/5auv_xrvoJk"
            title="Session 2: Money, Ledgers, and Bitcoin:"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      );
    case 2:
      return (
        <div>

          <ReactPlayer url='https://www.youtube.com/watch?v=0UvVOMZqpEA' />


        </div>
      );
    case 3:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/w7HDA8gUbpQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      )
    case 4:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/zGDTt9Q3vyM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 5:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/JPkgJwJHYSc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 6:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/GLVrOlHLJ1U" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 7:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/sMnBl0g3Ev4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 8:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/vPJ8oQ99r9c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );

    case 9:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/l0vD_FBWk0g" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );


    case 10:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_eGNSuTBc60" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 11:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ObGYNQLG3us" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 12:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/ojcOUtUwIe4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 13:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/_Ycy0Dy-B1c" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 14:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/lPD9fx8fK1k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 15:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/uNqMBBbb6UI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 16:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/KHBi3n0hUSU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 17:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/iWpQpPbo7rM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 18:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/7EXcHqLg7BI" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 19:
      return (
        <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/-cZPoqnRZq4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 20:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/DsSzQfejwMk" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
      case 21:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/W06Le8fw0vU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
      case 22:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/CJCKTixMb70" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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
            <Link to="/courses/109/1" className={classes.button}>
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
    navigate('/courses/109');
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