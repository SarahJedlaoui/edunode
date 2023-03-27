import React, { Component } from 'react'
import {Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import SideBar from "../SideBar"


class Settings extends Component {
    render() {
        return (
            <div>
            <Container fluid>
                <Row>
                    <Col xs={2} id="sidebar-wrapper">      
                      <SideBar />
                    </Col>
                    <Col xs={10} id="page-content-wrapper">
                        
                    </Col> 
                </Row>

            </Container>  
            </div>
        )
    }
}

export default Settings
