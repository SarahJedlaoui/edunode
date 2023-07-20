import React, { useState, useRef, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Navbar from '../../Dashboard/Navbar1';
import { connect } from 'react-redux';
import { clearErrors } from '../../../actions/errorActions';
import { reduxForm } from 'redux-form';
import Editor from '@monaco-editor/react';
import "./styles.css"
import space from './images/space.png'
import { useNavigate } from 'react-router-dom';
import store from './images/1.png'
import list from './images/list.png'
import add from './images/add.png'
import findName from './images/find.png'
import all from './images/all.png'
import axios from 'axios';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Countdown from 'react-countdown';
import { useParams } from 'react-router-dom';
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
  all,
  list,
  add,

];
function getSteps() {
  return [
    'Challenge Description:',
    'Write a Contract:',
    'Testing:',

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
      return ` The Intergalactic Space Agency has decided to experiment with Rust-based smart contracts using the Soroban SDK. Your task is to create a basic "Hello World" contract that takes a Symbol as input and returns a Vec<Symbol> as output.\n
      The challenge involves three components:\n
      1. Cargo.toml: The configuration file for the Rust package.\n
      2. lib.rs: The main library file where the contract is defined.\n
      3. test.rs: A testing file to ensure that the contract works as expected.\n
      Now let's go throught the process step by step :\n
      T o create your Soroban contract these are the requirements:\n
      1. Create New Project\n
      **\`cargo new --lib [project-name]\`**\n
      2. Open the Cargo.toml, it should look something like this: \n
         ** [package]**
         ** name = "project-name" **
         ** version = "0.1.0"**
         ** edition = "2021"**\n
      3. Configure the Library Type:\n
          **[lib]**
          ** crate-type = ["cdylib"]**
      4.Import soroban-sdk and Features:  \n
         **[dependencies]**
         ** soroban-sdk = "0.9.2"**
      
         **[dev_dependencies]**
        **soroban-sdk = { version = "0.9.2", features = ["testutils"] }**
      
        **[features]**
        **testutils = ["soroban-sdk/testutils"]**
      5.Configure the release Profile:  \n
           **[profile.release]**
           ** opt-level = "z"**
           ** overflow-checks = true**
           ** debug = 0**
           ** strip = "symbols"**
           ** debug-assertions = false**
           ** panic = "abort"**
           ** codegen-units = 1**
           ** lto = true**
      6.Configure the release-with-logs Profile\n
           **[profile.release-with-logs]**
           **inherits = "release"**
           **debug-assertions = true**\n
       Questions:
      1. Now you need to wrap up the Cargo.toml file :
      `;
    case 1:
      return `Write a Contract:\n
      - Once you've created a project, writing a contract involves writing Rust code in the projects lib.rs file\n
      - All contracts should begin with #![no_std] to ensure that the Rust standard library is not included in the build. The Rust standard library is large and not well suited to being deployed into small programs like those deployed to blockchains.\n
      `;
    case 2:
      return `Testing:\n
      - Writing tests for Soroban contracts involves writing Rust code using the test facilities and toolchain that you'd use for testing any Rust code.\n`;
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
  const [challengeFinished, setChallengeFinished] = useState(false);
  const [winnerEmail, setWinnerEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();
  const { randomNumber } = useParams();
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

  const handleNext = async () => {
    const localUser = localStorage.getItem('user');
    const user = JSON.parse(localUser);
    const localEmail = user.email;
    console.log('local email ', user.email)

    const isAnswerCorrect = validateStep(activeStep, editorValues[activeStep]);
    if (isAnswerCorrect) {
      setGrade(grade + 1);

    } else {
      alert('Your answer incorrect. Please review it!');
    }
    if (activeStep === steps.length - 1) {
      if (isAnswerCorrect) {
        setGrade(grade + 1);
  
      } else {
        alert('Your answer incorrect. Please review it!');
      }
      // Last step reached
      if (grade >= 2) {
        setModalVisible(true);
        try {
          // Send a POST request to the backend to submit the challenge and check the grade
          const response = await axios.post('https://edunode.herokuapp.com/api/gamechallenge/submit', {
            localEmail: localEmail,
            challengeFinished: true,
            grade: grade,
            gameNumber: randomNumber
          });

          // Once the backend responds with the winner's email, show the winner modal
          setWinnerEmail(localEmail); // Assuming the response contains the winner's email
          setChallengeFinished(true);
        } catch (error) {
          console.error('Error:', error);
          // Handle error if needed
        }

      }
      else { alert(`Sorry you only have ${grade} answers right! You didn't pass the challenge! Please do it again ! `); }

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
      validateStep3
    ];
    return validationFuncs[stepIndex](value);
  }

  function validateStep1(value) {
    const lines = value.trim().split('\n');
    const expectedLines = [
      '[package]',
      'name = "project-name"',
      'version = "0.1.0"',
      'edition = "2021"',
      '',
      '[lib]',
      'crate-type = ["cdylib"]',
      '',
      '[features]',
      'testutils = ["soroban-sdk/testutils"]',
      '',
      '[dependencies]',
      'soroban-sdk = "0.9.2"',
      '',
      '[dev_dependencies]',
      'soroban-sdk = { version = "0.9.2", features = ["testutils"] }',
      '',
      '[profile.release]',
      'opt-level = "z"',
      'overflow-checks = true',
      'debug = 0',
      'strip = "symbols"',
      'debug-assertions = false',
      'panic = "abort"',
      'codegen-units = 1',
      'lto = true',
      '',
      '[profile.release-with-logs]',
      'inherits = "release"',
      'debug-assertions = true',
    ];

    if (lines.length !== expectedLines.length) {
      return false;
    }

    for (let i = 0; i < lines.length; i++) {
      if (lines[i].trim() !== expectedLines[i]) {
        return false;
      }
    }

    return true;
  }

  function validateStep2(value) {
    const requiredComponents = [
      '#![no_std]',
      'use soroban_sdk::{contract, contractimpl, symbol_short, vec, Env, Symbol, Vec};',
      '',
      '#[contract]',
      'pub struct Contract;',
      '',
      '#[contractimpl]',
      'impl Contract {',
      '    pub fn hello(env: Env, to: Symbol) -> Vec<Symbol> {',
      '        vec![&env, symbol_short!("Hello"), to]',
      '    }',
      '}',
      '',
      '#[cfg(test)]',
      'mod test;',
    ];

    return requiredComponents.every((component) => value.includes(component));
  }



  function validateStep3(value) {
    const requiredComponents = [
      'use crate::{Contract, ContractClient};',
      'use soroban_sdk::{vec, Env, Symbol, symbol_short};',
      '',
      '#[test]',
      'fn test() {',
      '    let env = Env::default();',
      '    let contract_id = env.register_contract(None, Contract);',
      '    let client = ContractClient::new(&env, &contract_id);',
      '',
      '    let words = client.hello(&symbol_short!("Dev"));',
      '    assert_eq!(',
      '        words,',
      '        vec![&env, symbol_short!("Hello"), symbol_short!("Dev"),]',
      '    );',
      '}',
    ];

    return requiredComponents.every((component) => value.includes(component));
  }



  const getStepAnswer = (stepIndex) => {
    const answers = [
      `
[package]
name = "project-name"
version = "0.1.0"
edition = "2021"

[lib]
crate-type = ["cdylib"]

[features]
testutils = ["soroban-sdk/testutils"]

[dependencies]
soroban-sdk = "0.9.2"

[dev_dependencies]
soroban-sdk = { version = "0.9.2", features = ["testutils"] }

[profile.release]
opt-level = "z"
overflow-checks = true
debug = 0
strip = "symbols"
debug-assertions = false
panic = "abort"
codegen-units = 1
lto = true

[profile.release-with-logs]
inherits = "release"
debug-assertions = true
`,
      `
#![no_std]
use soroban_sdk::{contract, contractimpl, symbol_short, vec, Env, Symbol, Vec};

#[contract]
pub struct Contract;

#[contractimpl]
impl Contract {
    pub fn hello(env: Env, to: Symbol) -> Vec<Symbol> {
        vec![&env, symbol_short!("Hello"), to]
    }
}
#[cfg(test)]
mod test;
`,
      `
use crate::{Contract, ContractClient};
use soroban_sdk::{vec, Env, Symbol, symbol_short};

#[test]
fn test() {
    let env = Env::default();
    let contract_id = env.register_contract(None, Contract);
    let client = ContractClient::new(&env, &contract_id);

    let words = client.hello(&symbol_short!("Dev"));
    assert_eq!(
        words,
        vec![&env, symbol_short!("Hello"), symbol_short!("Dev"),]
    );
}
`,
    ];
    return answers[stepIndex];
  };
  const handleClose = () => {
    setModalVisible(false);
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
        <div>

          <Dialog
            open={modalVisible}

            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {`Congrats you are the first to finish the challenge with ${grade} questions right!`}
            </DialogTitle>

            <DialogActions>

              <Button onClick={handleClose} >
                OK!
              </Button>
            </DialogActions>
          </Dialog>
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




const Completionist = () => <alert>Time is up!!</alert>;


const renderer = ({ hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {

    return <span>{hours}:{minutes}:{seconds}</span>;
  }
};
function Intro(props) {
  const [activeStep, setActiveStep] = useState(0);
  const [activeProgress, setActiveProgress] = useState(0);
  const [modalVisible, setModalVisible] = useState(true);
  const [modalFinishVisible, setModalFinishVisible] = useState(false);
  const [timerVisible, setTimerVisible] = useState(false);
  const [timerDuration, setTimerDuration] = useState(1200000); // 20 minutes
  const [challengeStarted, setChallengeStarted] = useState(false);
  const [challengeFinished, setChallengeFinished] = useState(false);
  const [winnerEmail, setWinnerEmail] = useState('');
  const editorRef = useRef(null);
  const classes = useStyles();
  const [isDialogClosed, setIsDialogClosed] = useState(false);
  const { randomNumber } = useParams();
  const [readyClicked, setReadyClicked] = useState(false);

  useEffect(async () => {
    setModalVisible(true);
    console.log('random number', randomNumber)

  }, []);


  useEffect(() => {
    const fetchData = async () => {
      const gameNumber = randomNumber;
      try {
        const response = await axios.get(`https://edunode.herokuapp.com/api/gamechallenge/start/${gameNumber}`);
        setChallengeStarted(response.data);
        setModalVisible(!response.data);
      } catch (error) {
        console.error('Error:', error);
      }
    };

    fetchData(); // Initial fetch

    const intervalId = setInterval(() => {
      fetchData(); // Fetch data every 2 seconds
    }, 5000);

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, []);

  useEffect(() => {
    const fetchGameChallenge = async (gameNumber) => {
      try {
        const response = await axios.get(`https://edunode.herokuapp.com/api/gamechallenge/finish/${gameNumber}`);
        const data = response.data;

        if (data) {
          // Data retrieval successful
          const { challengeFinished, winner } = data;
          // Use the retrieved data as needed
          if (challengeFinished) {
            setModalFinishVisible(challengeFinished);
            setWinnerEmail(winner);
          }
          console.log('Challenge Finished:', challengeFinished);
          console.log('Winner:', winner);
          return data;
        } else {
          // Error or data not found
          console.log('Unable to fetch game challenge');
          return null;
        }
      } catch (error) {
        console.error('Error:', error);
        // Handle error if needed
        return null;
      }
    };

    const gameNumber = randomNumber;

    fetchGameChallenge(gameNumber);

    const intervalId = setInterval(() => {
      if (!isDialogClosed) {
        fetchGameChallenge(gameNumber); // Fetch data every 5 seconds if dialog is not closed
      }
    }, 15000);

    return () => {
      clearInterval(intervalId); // Clean up the interval on component unmount
    };
  }, [isDialogClosed]); // Add isDialogClosed as a dependency






  const handleReadyClick = async () => {
    setReadyClicked(true);
    const localUser = localStorage.getItem('user');
    const user = JSON.parse(localUser);
    const localEmail = user.email;
    console.log('local email ', user.email);

    try {
      // Send a POST request to the backend to notify readiness
      const response = await axios.post('https://edunode.herokuapp.com/api/gamechallenge/ready', {
        gameNumber: randomNumber,
        localEmail: localEmail
      });

      console.log('ready response', response.data);
      setModalVisible(!response.data);
      setTimerVisible(response.data);
      setChallengeStarted(response.data);
    } catch (error) {
      console.error('Error:', error);
    }
  };


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
  const handleClose = () => {
    setModalVisible(false);
    window.location.href = '/challengeGame';window.location.href = '/challengeGame';
  };

  const handlefinishClose = () => {
    setIsDialogClosed(true);
    setModalFinishVisible(false);
  };




  return (
    <div className="page-container">
      <Navbar />

      <LinearProgressWithLabel value={activeProgress} />
      time left : <Countdown date={Date.now() + 1200000}
        renderer={renderer}
      />

      <VerticalLinearStepper
        activeStep={activeStep}
        handleNext={handleNext}
        handleBack={handleBack}
      />

      <div>
        <div>

          <Dialog
            open={modalVisible}

            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Challenge Game"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Challenge Link :  https://edunode.org/challengeGame2/{randomNumber}/

              </DialogContentText>
              <DialogContentText id="alert-dialog-description">
                (Please copy this link and send it to you friend in order to start the challenge! )

              </DialogContentText>
              <DialogContentText id="alert-dialog-description">

                This challenge will last 20 minutes the first who finish wins !
              </DialogContentText>
              <DialogContentText id="alert-dialog-description">
                Are you ready to start the game?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={handleReadyClick} autoFocus disabled={readyClicked}>
                Ready
              </Button>
              <Button onClick={handleClose} >
                No
              </Button>
            </DialogActions>
          </Dialog>
        </div>
        <div>

          <Dialog
            open={modalFinishVisible}

            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
          >
            <DialogTitle id="alert-dialog-title">
              {"Challenge finished"}
            </DialogTitle>
            <DialogContent>
              <DialogContentText id="alert-dialog-description">
                Challenge Finished! {winnerEmail} has won the game !

              </DialogContentText>


            </DialogContent>
            <DialogActions>

              <Button onClick={handlefinishClose} >
                ok
              </Button>
            </DialogActions>
          </Dialog>
        </div>




      </div>
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
