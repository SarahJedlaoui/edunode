import React, { useState, useRef } from 'react';
import { makeStyles } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Navbar from '../../../Dashboard/Navbar1';
import { connect } from 'react-redux';
import { clearErrors } from '../../../../actions/errorActions';
import { reduxForm } from 'redux-form';
import Editor from '@monaco-editor/react';
import "./styles.css"
import Dialog from '@mui/material/Dialog';
import space from './space.png'
import { useNavigate } from 'react-router-dom';
import store from './1.png'
import list from './list.png'
import add from './add.png'
import findName from './find.png'
import all from './all.png'


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
const stepImages = [
  store,
  list,
  add,
  findName,
  all,
];
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
}

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
  const [openDialog, setOpenDialog] = useState(false);
  const steps = getSteps();
  const [editorValues, setEditorValues] = useState(Array(steps.length).fill(''));
  const [activeStep, setActiveStep] = useState(0);
  const [grade, setGrade] = useState(0);
  const navigate = useNavigate();

  const handleOpenDialog = () => {
    setOpenDialog(true);
  };

  const handleCloseDialog = () => {
    setOpenDialog(false);
  };

  function handleEditorChange(value, stepIndex) {
    const updatedValues = [...editorValues];
    updatedValues[stepIndex] = value;
    setEditorValues(updatedValues);
  }

  function handleNext() {
    const isAnswerCorrect = validateStep(activeStep, editorValues[activeStep]);
    if (isAnswerCorrect) {
      setGrade(grade + 1);
      
    } else {
      alert('Your answer incorrect. Please review it!');
    }
    if (activeStep === steps.length - 1) {
      // Last step reached
      if (grade>3) { navigate('/challenges/101/done');}
      else { alert( `Sorry you only have ${grade} answers right! You didn't pass the challenge! Please do it again ! `);}
      
    } else {
      setActiveStep(activeStep + 1);
    }
  }

  function handleChangeValue(value, index) {
    const newEditorValues = [...editorValues];
    newEditorValues[index] = value;
    setEditorValues(newEditorValues);
  }

  
  function validateStep(stepIndex, value) {
    const validationFuncs = [
      validateStep1,
      validateStep2,
      validateStep3,
      validateStep4,
      validateStep5
    ];
    return validationFuncs[stepIndex](value);
  }

  function validateStep1(value) {
    const expectedValueRegex = /^pub\s+struct\s+Spaceship\s+{\s+name:\s+String,\s+destination:\s+String,\s+}$/;
    return expectedValueRegex.test(value);
  }

  function validateStep2(value) {
    const expectedValueRegex = /^impl\s+Spaceship\s+{\s+pub\s+fn\s+new\(name:\s+String,\s+destination:\s+String\)\s+->\s+Spaceship\s+{\s+Spaceship\s+{\s+name,\s+destination\s+}\s+}\s+}$/;
    return expectedValueRegex.test(value);
  }

  function validateStep3(value) {
    const expectedValueRegex = /^pub\s+fn\s+add_spaceship\(spacecrafts:\s+&mut\s+Vec<Spaceship>,\s+spaceship:\s+Spaceship\)\s+{\s+spacecrafts.push\(spaceship\);\s+}$/;
    return expectedValueRegex.test(value);
  }

  function validateStep4(value) {
    const expectedValueRegex = /^pub\s+fn\s+find_spaceship\(spacecrafts:\s+&Vec<Spaceship>,\s+name:\s+String\)\s+->\s+Option<&Spaceship>\s+{\s+spacecrafts.iter\(\).find\(\|s\|\s+s.name\s+==\s+name\)\s+}$/;
    return expectedValueRegex.test(value);
  }

  function validateStep5(value) {
    const expectedValueRegex = /^pub\s+fn\s+spaceships_to_destination\(spacecrafts:\s+&Vec<Spaceship>,\s+destination:\s+String\)\s+->\s+Vec<String>\s+{\s+spacecrafts\s*\.\s*iter\s*\(\s*\)\s*\.\s*filter\s*\(\s*\|s\s*\|\s*s\s*\.\s*destination\s*==\s*destination\s*\)\s*\.\s*map\s*\(\s*\|s\s*\|\s*s\s*\.\s*name\s*\.\s*clone\s*\(\s*\)\s*\)\s*\.\s*collect\s*\(\s*\)\s*}$/;
    return expectedValueRegex.test(value);
  }
  const getStepAnswer = (stepIndex) => {
    const answers = [
      'pub struct Spaceship {\n  name: String,\n  destination: String,\n}',
      'impl Spaceship {\n  pub fn new(name: String, destination: String) -> Spaceship {\n    Spaceship { name, destination }\n  }\n}',
      'pub fn add_spaceship(spacecrafts: &mut Vec<Spaceship>, spaceship: Spaceship) {\n  spacecrafts.push(spaceship);\n}',
      'pub fn find_spaceship(spacecrafts: &Vec<Spaceship>, name: String) -> Option<&Spaceship> {\n  spacecrafts.iter().find(|s| s.name == name)\n}',
      'pub fn spaceships_to_destination(spacecrafts: &Vec<Spaceship>, destination: String) -> Vec<String> {\n  spacecrafts.iter().filter(|s| s.destination == destination).map(|s| s.name.clone()).collect()\n}',
    ];
    return answers[stepIndex];
  };

  return (
    <div className="page-container">
      <div className="split-view">
        <div className="left-panel">
        <img src={space} style={{ width: '550px', height: '300px' }}></img>

          <Stepper activeStep={activeStep} orientation="vertical">
            {steps.map((label, index) => (
              <Step key={label}>
                <StepLabel>{label}</StepLabel>
                <StepContent>
                  <pre className="text">{highlightText(getStepContent(index))}</pre>
                  <img src={stepImages[activeStep]} alt={`Step ${activeStep + 1}`} />
                  <div>
                    <div>
                      <Button
                        type="button"
                        label="back"
                        id="back"
                        disabled={activeStep === 0}
                        onClick={() => setActiveStep(activeStep - 1)}
                      >
                        Back
                      </Button>
                      <Button
                        variant="contained"
                        color="primary"
                        onClick={handleNext}
                      >
                        {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
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
            stepIndex={props.activeStep}
            value={editorValues[activeStep]}
            onChange={(value) => handleEditorChange(value, activeStep)}
            theme="vs-dark"
          />
          <Button variant="contained" onClick={handleOpenDialog}>
            Show Answer
          </Button>
          <Dialog open={openDialog} onClose={handleCloseDialog}>
          <pre>{getStepAnswer(activeStep)}</pre>
          </Dialog>
        </div>
      </div>
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
      <Navbar />

      <LinearProgressWithLabel value={activeProgress} />


      <VerticalLinearStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />

      
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
