import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from '../../actions/authActions';
import PropTypes from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import {
    Button,
    Form
} from "reactstrap";
import { withRouter } from "react-router-dom";



class LogoutModal extends Component {

    static propTypes = {
        logout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    

  

    render() {
       

    

        return (
<>
            <Form>
                <Button onClick={this.props.logout}>
                    Logout
                </Button> 
            </Form>

</>

        )
    }
}

const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error
});

export default withRouter(connect(mapStateToProps,
    { clearErrors, logout })(LogoutModal))
