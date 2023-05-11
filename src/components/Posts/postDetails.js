import React, { Component } from "react";
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import NavBar from "../NavBar"
import { clearErrors } from "../../actions/errorActions";
import Topbar from "../Dashboard/Topbar";
import Grid from '@mui/material/Grid';
import Footer from '../Footer';
import Box from '@mui/material/Box';
import { EditorState } from 'draft-js';
//import  { useLocation,useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

class PostDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            title: "",
            link: "",
            description: '',
            email: "",
            success: false,
            isLoading: false,
            editorState: EditorState.createEmpty(),
            errors: {},
            privatee: false,
            comments: [],
            newComment: ""
        };
    }

    handleCommentChange = (event) => {
        this.setState({ newComment: event.target.value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const newComments = this.state.comments.concat([this.state.newComment]);
        this.setState({ comments: newComments, newComment: "" });
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }





    render() {


        return (

            <div>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        {/* <Grid item xs={12} sm={4} md={3}>
                            <Item><Sidebar props={email}/></Item>
                        </Grid> */}
                        <Grid item xs={12} sm={8} md={9}>
                            <Topbar />
                            <div style={{ padding: '10px' }}>

                                <div className="post">
                                    <h2>{this.props.title}</h2>
                                    <p>{this.props.description}</p>
                                    <a href={this.props.link}>{this.props.link}</a>
                                    <div className="tags">
                                        {this.props.tags.map((tag) => (
                                            <span key={tag}>{tag}</span>
                                        ))}
                                    </div>
                                    <div className="comments">
                                        <h3>Comments</h3>
                                        <form onSubmit={this.handleSubmit}>
                                            <textarea value={this.state.newComment} onChange={this.handleCommentChange} />
                                            <button type="submit">Add Comment</button>
                                        </form>
                                        {this.state.comments.map((comment, index) => (
                                            <div key={index}>{comment}</div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </Grid>
                    </Grid>
                    <Footer />
                </Box>
            </div>



        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    auth: state.auth
})

PostDetails = connect(
    mapStateToProps
)(PostDetails)

export default PostDetails = reduxForm({
    form: "postReduxForm",
    fields: ['email', "tags", 'title', "description", "link"],
    clearErrors,
})(PostDetails)