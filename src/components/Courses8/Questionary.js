import React, { Component, useState } from 'react';
import NavBar from '../NavBar';
import Footer from '../Footer';
import CircularIntegration from './One/Check';
import { Form, Row, Col, Image, Card, Modal, Button } from 'react-bootstrap';
import {LinearWithValueLabel} from "./One/Intro"


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

    this.onSubmit = this.onSubmit.bind(this);
    this.onChangeOne = this.onChangeOne.bind(this);
    this.onChangeTwo = this.onChangeTwo.bind(this);
    this.onChangeThree = this.onChangeThree.bind(this);
  }

  onChangeOne = (e) => {
    this.setState({ checkone: true });
    this.setState({ checktwo: false });
    this.setState({ checkthree: false });
  };
  onChangeTwo = (e) => {
    this.setState({ checkone: false });
    this.setState({ checktwo: true });
    this.setState({ checkthree: false });
  };

  onChangeThree = (e) => {
    this.setState({ checkone: false });
    this.setState({ checktwo: false });
    this.setState({ checkthree: true });
  };

  onSubmit = (e) => {
    e.preventDefault();
    alert("Please select a value")
  }
    render() {
        return (
          <>
            <LinearWithValueLabel value={10} />
            <h5>
              Which technology does Stellar use to validate
              transactions, and to keep the network in sync?{' '}
            </h5>


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
            <CircularIntegration state={this.state} />
            
          </>
        );
    }
    }
