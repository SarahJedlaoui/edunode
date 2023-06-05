import React, { useState, useRef } from 'react';
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
import NavBar from '../../../NavBar';
import Footer from '../../../Footer';
import { connect } from 'react-redux';
import { clearErrors } from '../../../../actions/errorActions';
import { reduxForm } from 'redux-form';
import Precourse from "../Precourse.js";
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';
import "./styles.css"

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
    'Challenge Description:',
    'function implementation(1):',
    'function implementation(2):',
    'function implementation(3):',
    'function implementation(4):',
  ];
}
const highlightText = (text) => {
  const regex = /\*\*(.*?)\*\*/g;
  return text.split(regex).map((chunk, index) => {
    if (index % 2 === 1) {
      return <strong key={index}>{chunk}</strong>;
    }
    return chunk;
  });
};

function getStepContent(step) {
  switch (step) {
    case 0:
      return ` The Intergalactic Space Agency is developing a new tracking system for their spaceships. They need a program that will help them keep track of all the ships and their destinations.\n
      The challenge is to create a Rust program that can:\n
      1. Store the information of a spaceship.\n
      2. Store a list of multiple spaceships.\n
      3. Add a new spaceship to the list.\n
      4. Find a spaceship in the list by its name.\n
      5. Print the names of all spaceships headed to a specific destination.\n
      Requirements:\n
      1. Create a struct **\`Spaceship\`** with the following fields: **\`name: String\`** and **\`destination: String\`**.\n`;
    case 1:
      return `Implement the following function/method:\n
      - **\`new_spaceship(name: String, destination: String) -> Spaceship\`**: Creates a new **\`Spaceship\`**.\n`;
    case 2:
      return `Implement the following function/method:\n
      - **\`add_spaceship(spacecrafts: &mut Vec<Spaceship>, spaceship: Spaceship)\`**: Adds a **\`Spaceship\`** to **\`spacecrafts\`**.\n`;
    case 3:
      return `Implement the following function/method:\n
      - **\`find_spaceship(spacecrafts: &Vec<Spaceship>, name: String) -> Option<&Spaceship>\`**: Returns a reference to the **\`Spaceship\`** with the given **\`name\`**, or **\`None\`** if no such **\`Spaceship\`** is found.\n`;
    case 4:
      return `Implement the following function/method:\n
      - **\`spaceships_to_destination(spacecrafts: &Vec<Spaceship>, destination: String) -> Vec<String>\`**: Returns the names of all **\`Spaceships\`** that are headed to the given **\`destination\`**. `;
    default:
      return 'Unknown step';
  }
}

function VerticalLinearStepper(props) {

  const steps = getSteps();
  const editorRef = useRef(null);
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  return (

    <div className="page-container">
      <div className="split-view">
        <div className="left-panel">
          <Stepper activeStep={props.activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <pre className="text">{highlightText(getStepContent(index))}</pre>
                  <div>
                    <div>
                      <Button
                        type="button"
                        label="back"
                        id="back"
                        disabled={props.activeStep === 0}
                        onClick={props.handleBack}

                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={props.handleNext}

                      >
                        {props.activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                      </Button>
                    </div>
                  </div>
                </StepContent>
              </Step>
            ))}
          </Stepper>
        </div>
        <div className="right-panel">
          <Editor
            height="60vh"
            defaultLanguage="rust"
            defaultValue="// some comment"
            onMount={handleEditorDidMount}
            theme="vs-dark"
          />
          <button onClick={showValue}>Show value</button>
        </div>
      </div>
      {props.activeStep === steps.length && (
        <Paper square elevation={0} >
          <Typography>
            Challenge completed
          </Typography>
          <Link to="/courses/101/1" >
            Continue
          </Link>
        </Paper>
      )}
    </div>

  );
}

VerticalLinearStepper.propTypes = {
  activeStep: PropTypes.number.isRequired,
  handleNext: PropTypes.func.isRequired,
  handleBack: PropTypes.func.isRequired,
};

function Intro(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeProgress, setActiveProgress] = useState(0);

  const editorRef = useRef(null);
  const classes = useStyles();



  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    setActiveProgress((prevActiveProgress) => prevActiveProgress + 20);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
    setActiveProgress((prevActiveProgress) => prevActiveProgress - 20);
  };
  
  const steps = getSteps();
  function handleEditorDidMount(editor, monaco) {
    editorRef.current = editor;
  }

  function showValue() {
    alert(editorRef.current.getValue());
  }


  return (
    <div className="page-container">
      <NavBar />

      <LinearProgressWithLabel value={activeProgress} />
      
        
          <VerticalLinearStepper
            activeStep={activeStep}
            handleNext={handleNext}
            handleBack={handleBack}
          />
       
      <Footer />
    </div>
  );
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
        <Typography variant="body2" color="textSecondary">
          {`${Math.round(props.value)}%`}
        </Typography>
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
