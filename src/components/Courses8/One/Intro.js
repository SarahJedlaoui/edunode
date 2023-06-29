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
    '1. Infusing Active Learning into 6.033 Recitations: ',
    '2. What is Active Learning:',
    '3. Unique Aspects of the Course:',
    '4. Why Infuse Active Learning into 6.033 Recitations?:',
    '5. Getting Everyone on Board:',
    '6. The Importance of Extensive Planning:',
    '7. Supporting Staff as Individuals:',
    '8. Supporting Staff as a Group:',
    '9. Group Work to Class-wide Discussion: ',
    '10. Debates:',
    '11. Drawing Pictures:',
    '12. Acting Things Out:',
    '13. Did Active Learning Work?:',
    
  ];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return (
        <div>
       <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 1:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=22" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 2:
      return (
        <div>

<iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=107" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>


        </div>
      );
    case 3:
      return (
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=270" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      )
    case 4:
      return (
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=585" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 5:
      return (
        <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=892" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 6:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=1117" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 7:
      return (
        <div>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=1177" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 8:
      return (
        <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=1303" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );

    case 9:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=1502" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );


    case 10:
      return (
        <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=1595" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 11:
      return (
        <div>
          <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=1675" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
      );
    case 12:
      return (
        <div>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/r2_-2KW76ec?start=2648" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
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