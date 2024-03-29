import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from '../../actions/authActions';
import PropTypes from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import {
    Button,
    Form,
    Modal,
    ModalHeader,
    ModalBody,
    ModalFooter
} from "reactstrap";
import withRouter from "../../withRouter";
import { Navigate } from "react-router-dom";

class LogoutModal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false
        };
    }

    static propTypes = {
        logout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool
    };

    toggleModal = () => {
        this.setState((prevState) => ({
            modal: !prevState.modal
        }));
    };

    handleLogout = () => {
        this.props.logout();
        this.toggleModal();
        window.location.href = '/';
    };

    render() {
        const { isAuthenticated } = this.props;

        return (
            <>
               
                    <Button outline onClick={this.handleLogout} size="lg">
                        Logout
                    </Button>
               

            </>
        );
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default withRouter(
    connect(mapStateToProps, { clearErrors, logout })(LogoutModal)
);
