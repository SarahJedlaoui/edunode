import React, { Component } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import CircularIntegration from './One/CheckThree';
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
import { setCourseOne } from '../../actions/authActions';

export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      progress: 90,
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

  onSubmit = (props, e) => {
    console.log('submit');
    // e.preventDefault();
    if (this.state.checknone === true) {
      alert('Please select a value');
    }
    console.log(props.email);
    setCourseOne(props.email);
  };

  render() {
    return (
      <>
        <NavBar />
        <LinearProgressWithLabel value={80} />
        <h5>
        What is the function of an Inbound Oracle?{' '}
        </h5>

        <Form.Group as={Row}>
          <Col sm={10}>
            <Form.Check
              type="checkbox"
              label="Sends data from smart contracts to the external world"
              name="checkone"
              id="form1"
              onChange={this.onChangeOne}
              value="checkone"
              checked={this.state.checkone}
            />
            <Form.Check
              type="checkbox"
              label="Provides smart contracts with data from the external world"
              name="checktwo"
              id="form2"
              onChange={this.onChangeTwo}
              value="checktwo"
              checked={this.state.checktwo}
            />
            <Form.Check
              type="checkbox"
              label="Acts as a legal system for smart contracts"
              name="checkthree"
              id="form3"
              onChange={this.onChangeThree}
              value="checkthree"
              checked={this.state.checkthree}
            />

            <Form.Check
              type="checkbox"
              label=" Monitors the physical world and relays this information back to the blockchain"
              name="checkfour"
              id="form4"
              onChange={this.onChangeFour}
              value="checkfour"
              checked={this.state.checkfour}
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