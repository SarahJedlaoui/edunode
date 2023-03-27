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
import { login } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";


class LoginModal extends Component {
    state = {
        modal: false,
        email: null,
        password: null,
        msg: null
    };
    

    static propTypes = {
        isAuthenticated: PropTypes.bool,
        isVerified: PropTypes.bool,
        error: PropTypes.object.isRequired,
        login: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    componentDidUpdate(prevProps) {
        const { error, isAuthenticated } = this.props;
        if (error !== prevProps.error) {
            if (error.id === "LOGIN_FAIL") {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
        // if authenticated close modal
        if (this.state.modal) {
            if (isAuthenticated) {
                this.toggle();
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
        this.setState({ [e.target.email]: e.target.value, [e.target.password]: e.target.value });

    };

    onSubmit = e => {
        e.preventDefault();
        const {email, password} = this.state;
        const user = {
            email,
            password
        }
        /// attempt to login

        this.props.login(user);
        
       
    };


    render() {
       
       

        return (
            <div>
                <NavLink onClick={this.toggle} href="#">
                    Login
                </NavLink>

                <Modal isOpen={this.state.modal} toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>Please enter your E-mail and password</ModalHeader>
                    <ModalBody>
                        {this.state.msg ? <Alert color="danger">{this.state.msg}</Alert> : null}

                        <Form>
                            <FormGroup>

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
                                <Button onClick={this.onSubmit} color="dark" style={{ marginTop: "2rem" }} block>
                                    Login
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
    { login, clearErrors }
)(LoginModal);