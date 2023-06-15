import React, { Component } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import CircularIntegration from './One/CheckTwo';
import {
  Form,
  Row,
  Col,
  Image,
  Card,
  Modal,
  Button,
} from 'react-bootstrap';
import Box from '@mui/material/Box';
import LinearProgress from '@mui/material/LinearProgress';
import Typography from '@mui/material/Typography';
import PropTypes from 'prop-types';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checknone: true,
      checkone: false,
      checktwo: false,
      checkthree: false,
      checkfour: false,
      questionOneValid: false,
      questionTwoValid: false,
      questionThreeValid: false,
      questionFourValid: false,
    };

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeOne = this.onChangeOne.bind(this);
    this.onChangeTwo = this.onChangeTwo.bind(this);
    this.onChangeThree = this.onChangeThree.bind(this);
    this.onChangeFour = this.onChangeFour.bind(this);
  }

  onChangeOne = (e) => {
    this.setState({ checkone: true });
    this.setState({ checktwo: false });
    this.setState({ checkthree: false });
    this.setState({ checknone: false });
        this.setState({ checkfour: false });
  };
  onChangeTwo = (e) => {
    this.setState({ checkone: false });
    this.setState({ checktwo: true });
    this.setState({ checkthree: false });
    this.setState({ checknone: false });
        this.setState({ checkfour: false });
  };

  onChangeThree = (e) => {
    this.setState({ checkone: false });
    this.setState({ checktwo: false });
    this.setState({ checkthree: true });
    this.setState({ checknone: false });
        this.setState({ checkfour: false });
  };

  onChangeFour = (e) => {
    this.setState({ checkfour: true });
    this.setState({ checkone: false });
    this.setState({ checktwo: false });
    this.setState({ checkthree: false });
    this.setState({ checknone: false });
        this.setState({ checkfour: true });
  };

  onSubmit = (e) => {
    console.log('submit');
    // e.preventDefault();
    if (this.state.checknone === true) {
      alert('Please select a value');
    }
  };

  render() {
    return (
      <>
        <NavBar />
        <LinearProgressWithLabel value={70} />
        <h5>
        Which of the following is NOT a type of oracle?{' '}
        </h5>

        <Form.Group as={Row}>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              label="Software Oracle"
              name="checkone"
              id="form1"
              onChange={this.onChangeOne}
              value="checkone"
              checked={this.state.checkone}
              // defaultChecked={this.state.checkone}
            />
            <Form.Check
              type="checkbox"
              label=" Hardware Oracle"
              name="checktwo"
              id="form2"
              onChange={this.onChangeTwo}
              value="checktwo"
              checked={this.state.checktwo}
              // defaultChecked={this.state.checktwo}

              // checked={this.state.answers.value === 'checktwo'}
            />
            <Form.Check
              type="checkbox"
              label=" Inbound Oracle "
              name="checkthree"
              id="form3"
              onChange={this.onChangeThree}
              value="checkthree"
              checked={this.state.checkthree}
              // defaultChecked={this.state.checkthree}
            />
            <Form.Check
              type="checkbox"
              label=" Blockchain Contract"
              name="checkfour"
              id="form4"
              onChange={this.onChangeFour}
              value="checkfour"
              checked={this.state.checkfour}
              // defaultChecked={this.state.checkthree}
            />
          </Col>
        </Form.Group>

        <CircularIntegration state={this.state} />
        
      </>
    );
  }
}

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