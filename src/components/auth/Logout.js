import React, { Component } from 'react';
import { connect } from "react-redux";
import { logout } from '../../actions/authActions';
import PropTypes from "prop-types";
import { clearErrors } from "../../actions/errorActions";
import {
    Button,
    Form
} from "reactstrap";
import  withRouter  from "../../withRouter";
import { Navigate } from "react-router-dom";


class LogoutModal extends Component {


    constructor(props) {
        super(props);
        this.state = {

        }
       
        this.onChange = this.onChange.bind(this);
       
      }

    static propTypes = {
        logout: PropTypes.func.isRequired,
        clearErrors: PropTypes.func.isRequired,
        onChange:PropTypes.func,
    }

    

    onChange = async () => {
       this.props.logout();
       <Navigate to="/" />
      };

    render() {
       

    

        return (
<>
            <Form>
                <Button onClick={
                    this.onChange
                    } style={{ backgroundColor: '#808080', color: '#fff' }}>
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
