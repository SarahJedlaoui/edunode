import { connect } from "react-redux";
import { PropTypes } from "prop-types";
import { register } from "../../actions/authActions";
import { clearErrors } from "../../actions/errorActions";
import React, { Component } from 'react'

class Balance extends Component {
    constructor(props) {
        super(props);
      }
    state = {
        isOpen: false,
        name: ""
      }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        register: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired
    }
    render() {
        const { isVerified, user } = this.props.auth;
        if (isVerified) {
            return (
                <div>
                <h4>{user.balance}Balance</h4>
            <h1>$</h1>             
            </div>
            )
        }
        return (
            <div>
                <h4>not ath to see balance</h4>
            <h1></h1>             
            </div>
        )
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    auth: state.auth,
    error: state.error
});

export default connect(
    mapStateToProps,
    { clearErrors }
)(Balance);
