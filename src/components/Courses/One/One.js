import React, { Component } from 'react';
import NavBar from '../../NavBar';

import LinearWithValueLabel from './ProgressBar';
import ActionsInAccordionSummary from './MultiSelection';
import FloatingActionButtonZoom from './Floating';
import CircularIntegration from './Check';
import Course1 from '../Course1';
import Course2 from '../Course2';
import Course3 from '../Course3';
import { Form, Row, Col, Image, Card } from 'react-bootstrap';
import { Link, Redirect } from "react-router-dom"; 
import { makeStyles } from '@material-ui/core';
// import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default class index extends Component {
  constructor(props) {
    super(props);
    this.state = {
      checknone: true,
      checkone: false,
      checktwo: false,
      checkthree: false,
      questionOneValid: false,
      questionTwoValid: false,
      questionThreeValid: false
    };

    // this.onSubmit = this.onSubmit.bind(this);
    this.onChangeOne = this.onChangeOne.bind(this);
    this.onChangeTwo = this.onChangeTwo.bind(this);
    this.onChangeThree = this.onChangeThree.bind(this);
  }

  onChangeOne = (e) => {
    this.setState({ checkone: true });
    this.setState({ checktwo: false });
    this.setState({ checkthree: false });
    this.setState({ checknone: false });
  };
  onChangeTwo = (e) => {
    this.setState({ checkone: false });
    this.setState({ checktwo: true });
    this.setState({ checkthree: false });
    this.setState({ checknone: false });
  };

  onChangeThree = (e) => {
    this.setState({ checkone: false });
    this.setState({ checktwo: false });
    this.setState({ checkthree: true });
    this.setState({ checknone: false });
  };



  render() {


   
    const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
    });
    
     const classes = useStyles();
    if (this.state.questionOneValid === true) {
      return (
        <div>hello</div>
      )
      
    }
    return (
      
      <div>
        <NavBar />
         <LinearWithValueLabel value={10} />
        <br></br>
        <Card>
          <h5>
            Which technolgy does Stellar use to validate transactions,
            and to keep the network in sync?{' '}
          </h5>
          <fieldset>
            <Form.Group as={Row}>
              <Col sm={10}>
                <Form.Check
                  type="checkbox"
                  label="Internet"
                  name="checkone"
                  id="form1"
                  onChange={this.onChangeOne}
                  value="checkone"
                  checked={this.state.checkone}
                  // defaultChecked={this.state.checkone}
                />
                <Form.Check
                  type="checkbox"
                  label="Blockchain"
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
                  label="Hashgraph"
                  name="checkthree"
                  id="form3"
                  onChange={this.onChangeThree}
                  value="checkthree"
                  checked={this.state.checkthree}
                  // defaultChecked={this.state.checkthree}
                />
              </Col>
            </Form.Group>
          </fieldset>
        </Card>
        );
        <br></br>
        <br></br>
        <CircularIntegration state={this.state} />
      </div>
    );
  }
}
