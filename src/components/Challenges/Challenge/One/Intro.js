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
import NavBar from '../../../NavBar';
import Footer from '../../../Footer';
import { connect } from 'react-redux';
import { clearErrors } from '../../../../actions/errorActions';
import { reduxForm } from 'redux-form';
import { useNavigate } from 'react-router-dom';
import "./styles.css"
import Editor, { DiffEditor, useMonaco, loader } from '@monaco-editor/react';





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



class Intro extends Component {
  navigateTo = () => {
    const navigate = useNavigate();
    navigate('/challenge/101');
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
      editorRef:null
    };
    this.onChangeOne = this.onChange.bind(this);
    this.handleEditorDidMount = this.handleEditorDidMount.bind(this);
    this.showValue = this.showValue.bind(this);

  }

  handleEditorDidMount(editor, monaco) {
    this.setState({ editorRef: editor });
  }

  showValue() {
   const char=this.state.editorRef
    console.log('editorRef',this.state.editorRef)
    alert(char);
  }


  onChange = (e) => {
    // e.preventDefault();
    console.log('Please select a value');
  };

  render(props, state) { 
    
    const text = `Challenge Description\n
    The Intergalactic Space Agency is developing a new tracking system for their spaceships. They need a program that will help them keep track of all the ships and their destinations.\n
    The challenge is to create a Rust program that can:\n
    1. Store the information of a spaceship.\n
    2. Store a list of multiple spaceships.\n
    3. Add a new spaceship to the list.\n
    4. Find a spaceship in the list by its name.\n
    5. Print the names of all spaceships headed to a specific destination.\n
    Requirements:\n
    1. Create a struct **\`Spaceship\`** with the following fields: **\`name: String\`** and **\`destination: String\`**.\n
    2. Implement the following functions/methods:\n
    - **\`new_spaceship(name: String, destination: String) -> Spaceship\`**: Creates a new **\`Spaceship\`**.\n
    - **\`add_spaceship(spacecrafts: &mut Vec<Spaceship>, spaceship: Spaceship)\`**: Adds a **\`Spaceship\`** to **\`spacecrafts\`**.\n
    - **\`find_spaceship(spacecrafts: &Vec<Spaceship>, name: String) -> Option<&Spaceship>\`**: Returns a reference to the **\`Spaceship\`** with the given **\`name\`**, or **\`None\`** if no such **\`Spaceship\`** is found.\n
    - **\`spaceships_to_destination(spacecrafts: &Vec<Spaceship>, destination: String) -> Vec<String>\`**: Returns the names of all **\`Spaceships\`** that are headed to the given **\`destination\`**.`;
  
    // Function to apply highlighting to the text
    const highlightText = (text) => {
      const regex = /\*\*(.*?)\*\*/g;
      return text.split(regex).map((chunk, index) => {
        if (index % 2 === 1) {
          return <strong key={index}>{chunk}</strong>;
        }
        return chunk;
      });
    };

  return (
    <div className="page-container">
      <NavBar></NavBar>

      <div className="split-view">
        <div className="left-panel">
          <pre className="text">{highlightText(text)}</pre>
        </div>
  
          <div className="right-panel">
            
            <Editor
              height="60vh"
              defaultLanguage="javascript"
              defaultValue="// some comment"
              onMount={this.handleEditorDidMount}
              theme="vs-dark"
            />
            <button onClick={this.showValue}>Show value</button>
          </div>
        </div>
  
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

