import React, { Component } from "react";
import { Navigate } from "react-router-dom";
import { styled as muiStyled } from '@mui/material/styles';
import styled from 'styled-components';
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { connect } from 'react-redux'
import NavBar from "../NavBar"
import { clearErrors } from "../../actions/errorActions";
import { newPost } from "../../actions/authActions";
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Footer from '../Footer';
import Box from '@mui/material/Box';
import { EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import '../../../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import { convertToHTML } from 'draft-convert';
import Switch from '@mui/material/Switch';
import FormControlLabel from '@mui/material/FormControlLabel';
import Navbar1 from '../Dashboard/Navbar1';
import home from './homework.png'
import Modal from 'react-modal';
import Alert from '@mui/material/Alert';
import UserContext from './UserContext';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;
  width: 100%; // Set the width to 100% or a specific width, e.g., 600px
  max-width: 600px; // Add a max-width to keep the form from becoming too wide
  height: auto; // Set the height to auto to adjust according to its content
  margin: 0 auto; // Center the form within its parent container
  border: 1px solid #ccc;
  border-radius: 5px;
  box-sizing: border-box; // Include padding and border in the form's dimensions
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%; // Set the width to 100% to align form fields to the left
  margin-bottom: 1rem;
`;

const Label = styled.label`
  margin-bottom: 0.5rem;
  font-weight: bold;
`;

const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Textarea = styled.textarea`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
`;

const Select = styled.select`
  padding: 0.5rem;
  font-size: 1rem;
  border-radius: 5px;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
`;


const SelectedTagsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 0.5rem;
`;

const SelectedTag = styled.div`
  display: flex;
  align-items: center;
  margin-right: 0.5rem;
  background-color: #f5f5f5;
  color: #333;
  padding: 0.5rem;
  border-radius: 5px;
  font-size: 0.9rem;
`;

const RemoveTagButton = styled.button`
  background-color: transparent;
  color: #333;
  border: none;
  font-size: 0.9rem;
  margin-left: 0.5rem;
  cursor: pointer;
`;

const SubmitButton = styled.button`
  background-color: #0070f3;
  color: #fff;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  &:hover {
    background-color: #0061c9;
  }
`;

const tagsList = [
    "Web3",
    "Blockchain",
    "Crypto",
    "Smart Contracts",
    "NFTs",
    "Soroban",
    "Solidity",
    "IT",
    "Dev",
    "E-learning",
    "Programming",
    "Javascript",
    "Nodejs",
    "Reactjs",
    "Other",
];

class Badge extends Component {
    constructor(props) {
        super(props);
        this.state = {
            tags: [],
            title: "",
            link: "",
            description: '',
            criteria: '',
            expiration: new Date(2999, 2, 3),
            email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "anonymous",
            success: false,
            isLoading: false,
            editorState: EditorState.createEmpty(),
            errors: {},
            privatee: false,
            showPopup: false,
            image: ''
        };

        this.onEditorStateChange = this.onEditorStateChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleTagSelect = this.handleTagSelect.bind(this);
        this.handleTagRemove = this.handleTagRemove.bind(this);
        this.handleSwitchChange = this.handleSwitchChange.bind(this);
    }
    handleSwitchChange(event) {
        this.setState({ privatee: event.target.checked });
    }

    componentDidUpdate(prevProps) {
        const { error } = this.props;
        if (error !== prevProps.error) {
            if (error.id === 'LOGIN_FAIL') {
                this.setState({ msg: error.msg.msg });
            } else {
                this.setState({ msg: null });
            }
        }
    }
    static propTypes = {
        isAuthenticated: PropTypes.bool,
        error: PropTypes.object.isRequired,
        clearErrors: PropTypes.func.isRequired
    }

    async handleSubmit(e) {
        e.preventDefault();
        // Validate the form fields
        const errors = {};
        if (this.state.title.trim() === "") {
            errors.title = "Title is required.";
        }
        if (this.state.criteria.trim() === "") {
            errors.criteria = "Title is required.";
        }
        if (this.state.editorState.getCurrentContent() === "") {
            errors.description = "Description is required.";
        }
        if (this.state.tags.length === 0) {
            errors.tags = "At least one tag must be selected.";
        }
        if (Object.keys(errors).length > 0) {
            // Display error messages and return if there are validation errors
            this.setState({ errors });
            return;
        }
        this.setState({ showPopup: true });

        const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "anonymous";
        const data = {
            email: this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "anonymous", // this.props.auth.user.email
            title: this.state.title,
            tags: this.state.tags,
            link: this.state.link,
            description: convertToHTML(this.state.editorState.getCurrentContent()),
            privatee: this.state.privatee,
            image: this.state.image,
            criteria: this.state.criteria,
            expiration: this.state.expiration
            
        };
        try {
            const response = await fetch('https://edunode.herokuapp.com/api/badge/add', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(data),
            });
        
            
            if (response.ok) {
              
              this.setState({ success: true });
            } else {
             
              console.error('Error submitting badge:', response.statusText);
            }
          } catch (error) {
            console.error('Error submitting badge:', error);
          }
          
          
          this.setState({ errors: {} });
        }
    onChangeImage = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        reader.readAsDataURL(file);
        reader.onload = () => {
            const imageString = reader.result;
            this.setState({ image: imageString });
        };
    };

    handleClosePopup = () => {
        this.setState({ showPopup: false });
    };


    handleTagSelect(e) {
        const selectedTag = e.target.value;
        if (!this.state.tags.includes(selectedTag)) {
            this.setState({ tags: [...this.state.tags, selectedTag] });
        }
    }

    handleTagRemove(removedTag) {
        this.setState({
            tags: this.state.tags.filter((tag) => tag !== removedTag),

        });
    }


    onEditorStateChange(editorState) {
        this.setState({
            editorState,
            description: this.state.description,
        });
    };


    render() {
        const { editorState } = this.state;

        const { tags, title, link, description, success, showPopup, criteria, expiration } = this.state;
        const email = this.props.auth && this.props.auth.user && this.props.auth.user.email ? this.props.auth.user.email : "";
        const { errors } = this.state;
        return (
            <UserContext.Provider value={this.state.email}>
                <div>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={8} md={20}>
                                <Navbar1 />
                             
                                <div style={{ padding: '10px' }}>
                                    <Form onSubmit={this.handleSubmit}>
                                        <h4 style={{ fontSize: "2em", textAlign: "center" }}>Add Badge</h4>

                                        <FormGroup>
                                            <Label htmlFor="tags">Tags:</Label>
                                            <Select id="tags" onChange={this.handleTagSelect}>
                                                <option value="">Select a tag</option>

                                                {tagsList.map((tag) => (
                                                    <option key={tag} value={tag}>
                                                        {tag}
                                                    </option>
                                                ))}
                                            </Select>
                                            {errors.tags && <Alert severity="error">{errors.tags}</Alert>}
                                            <SelectedTagsContainer>
                                                {tags.map((tag) => (
                                                    <SelectedTag key={tag}>
                                                        {tag}
                                                        <RemoveTagButton onClick={() => this.handleTagRemove(tag)}>
                                                            X
                                                        </RemoveTagButton>
                                                    </SelectedTag>
                                                ))}
                                            </SelectedTagsContainer>
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="title">Badge Name:</Label>
                                            <Input
                                                type="text"
                                                id="title"
                                                value={title}
                                                onChange={(e) => this.setState({ title: e.target.value })}
                                            />
                                            {errors.title && <Alert severity="error">{errors.title}</Alert>}

                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="link">URL (optional):</Label>
                                            <Input
                                                type="text"
                                                id="link"
                                                value={link}
                                                onChange={(e) => this.setState({ link: e.target.value })}
                                            />
                                        </FormGroup>

                                        <FormGroup>
                                            <Label htmlFor="image">Image:</Label>
                                            <Input
                                                type="file"
                                                id="image"
                                                onChange={this.onChangeImage}
                                            />
                                        </FormGroup>
                                        <FormGroup>
                                            <Label htmlFor="description">Description:</Label>

                                        </FormGroup>

                                        <Editor
                                            editorState={editorState}
                                            toolbarClassName="toolbarClassName"
                                            wrapperClassName="wrapperClassName"
                                            editorClassName="editorClassName"
                                            onEditorStateChange={this.onEditorStateChange}
                                        />
                                        <FormGroup>
                                            <Label htmlFor="expiration">Expiration Date:</Label>
                                            <div
                                                style={{
                                                    border: '1px solid #ccc',
                                                    borderRadius: '4px',
                                                    padding: '6px',
                                                }}
                                            >
                                                <DatePicker
                                                    selected={expiration}
                                                    onChange={(date) => this.setState({ expiration: date })}
                                                    minDate={new Date()}
                                                />
                                            </div>
                                        </FormGroup>

                                        <FormGroup>
                                            <Label htmlFor="title">What is required to earn this badge? (earning criteria):</Label>
                                            <Input
                                                name="criteria"
                                                multiline
                                                id="criteria"
                                                rows={4}
                                                placeholder="criteria"
                                                fullWidth
                                                value={criteria}
                                                onChange={(e) => this.setState({ criteria: e.target.value })}
                                            />
                                            {errors.criteria && <Alert severity="error">{errors.criteria}</Alert>}
                                        </FormGroup>

                                        <FormControlLabel
                                            value="private"
                                            control={<Switch color="primary" checked={this.state.privatee} onChange={this.handleSwitchChange} />}
                                            label="Private"
                                            labelPlacement="start"
                                        />


                                        {errors.description && <Alert severity="error">{errors.description}</Alert>}
                                        <SubmitButton type="submit">Submit</SubmitButton>
                                        {success && (
                                            <div style={{ backgroundColor: 'green', color: 'white', padding: '10px' }}>
                                                Success! Your badge has been submitted.
                                            </div>
                                        )}
                                    </Form>
                                    <hr />
                                    <Modal
                                        isOpen={showPopup}
                                        onRequestClose={this.handleClosePopup}
                                        contentLabel="Congratulations"
                                        style={{
                                            overlay: {
                                                backgroundColor: 'rgba(0, 0, 0, 0.5)'
                                            },
                                            content: {
                                                width: '400px',
                                                height: '400px',
                                                margin: '0 auto',
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'center',
                                                alignItems: 'center',
                                                padding: '20px',
                                                borderRadius: '8px'
                                            }
                                        }}
                                    >
                                        <h2 style={{ marginBottom: '20px' }}>Congratulations!</h2>
                                        <p style={{ marginBottom: '20px', textAlign: 'center' }}>
                                            Thank you for adding new badge!.
                                        </p>
                                        <img
                                            src={home}
                                            alt="Trophy"
                                            style={{ width: '150px', marginBottom: '20px' }}
                                        />
                                        <button onClick={this.handleClosePopup}>Close</button>
                                    </Modal>
                                </div>
                            </Grid>
                        </Grid>

                    </Box>
                </div>

            </UserContext.Provider>

        );
    }
}

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated,
    error: state.error,
    auth: state.auth
})

Badge = connect(
    mapStateToProps, { newPost }
)(Badge)

export default Badge = reduxForm({
    form: "postReduxForm",
    fields: ['email', "tags", 'title', "description", "link"],
    newPost,
    clearErrors,
})(Badge)