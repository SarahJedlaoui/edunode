import React, { Component } from 'react';
import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
} from "reactstrap";
import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";


class RegisterModal extends Component { 
    state = {
        modal: false,
        name: "",
        email: "",
        password: "",
        msg: null
    };

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        isVerified: PropTypes.bool,
    }

    componentDidUpdate(prevProps) {
        const { error, isVerified } = this.props;
        if (error !== prevProps.error) {
            if (error.id === "REGISTER_FAIL") {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
// if authenticated close modal
        if (this.state.modal) {
            if(isVerified) {
             this.toggle()
            }
            
        }
    }

    toggle = () => {
        this.props.clearErrors();
        this.setState({
            modal: !this.state.modal
        });
    };

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };


    
    onSubmit = e => {
        e.preventDefault();
        const { name, email, password } = this.state
    
        // create user object
        const newUser = {
            name,
            email,
            password
        };

        // attempt to register
        this.props.register(newUser);


      
           
    };


    render() {
        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Register
                </NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Register</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}

                        <Form onSubmit={this.onSubmit}>
                            <FormGroup>
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="add name"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Label htmlFor="email">E-mail</Label>
                                <Input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="add email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Label htmlFor="password">password</Label>
                                <Input
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="add password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button color="dark" style={{ marginTop: "2rem" }} block>
                                    Register
                            </Button>
                            </FormGroup>
                        </Form>
                    </ModalBody>
                </Modal>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default connect(
    mapStateToProps,
    { register, clearErrors }
)(RegisterModal);