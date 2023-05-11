import React, { Component } from 'react'
import { clearErrors } from "../../actions/errorActions";
import { verifyCode } from "../../actions/authActions";
import Box from '@mui/material/Box';
import Sidebar from "../Dashboard/Sidebar";
import Topbar from "../Dashboard/Topbar";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';
import { styled } from '@mui/material/styles';
import { connect } from 'react-redux';
import { Field, reduxForm } from "redux-form";
import TextField from '@mui/material/TextField'
import PropTypes from 'prop-types'
import "./style.css"
import { Navigate } from "react-router-dom";
import Alert from '@mui/material/Alert';
import Typography from '@mui/material/Typography';
import { GpsFixed } from '@mui/icons-material';
import Button from '../Membership/Button';
import Navbar from '../Dashboard/Navbar';


class History extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "",
            prompt: "",
            isLoading: false,
            errors: {},
            messages: [], // Add this line
            input: '',
            sidebarRef: React.createRef(),
        }

        this.onChange = this.onChange.bind(this)


    }


    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    renderTextField = ({
        label,
        input,
        meta: { touched, invalid, error },
        ...custom
    }) => (
        <TextField
            label={label}
            placeholder={label}
            error={touched && invalid}
            helperText={touched && error}
            {...input}
            {...custom}
        />
    )

    onChange = e => {
        this.setState({ [e.target.name]: e.target.value });
    };



    async componentDidMount() {
        const { input, email } = this.state;
        // Get the chat history from the backend and update the state with it
        const response = await fetch(`https://edunode.herokuapp.com/api/chat/openai/${email}`);
        const data = await response.json();
        const chatHistory = data.map(chat => ({ user: chat.input, ai: chat.output }));
        this.setState({ messages: chatHistory });


    }

    render() {
        const Item = styled(Paper)(({ theme }) => ({
            ...theme.typography.body2,
            padding: theme.spacing(1),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        }));

        const {

            isAuthenticated,

        } = this.props.auth;

        if (isAuthenticated) {
            const { messages } = this.state;
            const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "";
            return (

                <>
                    <div>
                        <Box sx={{ flexGrow: 1 }}>
                            <Grid container spacing={2}>
                                {/* <Grid item xs={12} sm={4} md={2} >
                                    <Item>

                                        <Sidebar props={email} />

                                    </Item>
                                </Grid> */}

                                <Grid item xs={12} sm={8.5} md={10}>
                                    <Navbar />
                                    <br></br>
                                    <br></br>
                                    <br></br>
                                    <div>
                                        <div>
                                            <div>
                                                <h4 style={{ fontSize: '2em' }}>Chat History</h4>
                                                {messages.map((message, index) => (
                                                    <div key={index}>

                                                        <Alert severity="info"><Typography variant="h6">User:</Typography> {message.user}</Alert>

                                                        <Alert severity="success">
                                                            <Typography variant="h6">AI:</Typography> {message.ai}
                                                        </Alert>
                                                    </div>
                                                ))}

                                            </div>
                                        </div>
                                    </div>

                                </Grid>

                            </Grid>
                            {/* <Footer /> */}
                        </Box>
                    </div>
                </>

            )

        }


        if (!this.props.auth.isAuthenticated) {
            return (
                <Navigate to="/" />
            );
        }
    }

}

const mapStateToProps = (state) => ({
    auth: state.auth,
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
});

History = connect(
    mapStateToProps, { verifyCode, clearErrors }
)(History);

export default History = reduxForm({
    form: "ReduxForm",
    fields: ["input", "email"],
    clearErrors

})((History));