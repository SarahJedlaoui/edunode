import React, { useState, useEffect, useContext } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import Grid from "@mui/material/Grid";
import Footer from "../Footer";
import Box from "@mui/material/Box";
import { EditorState } from "draft-js";
import PropTypes from "prop-types";
import { useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import Navbar from '../Dashboard/Navbar1';
import TextField from '@mui/material/TextField'
import { makeStyles } from "@mui/styles";
import UserContext from './UserContext';


const useStyles = makeStyles((theme) => ({
  postContainer: {
    padding: theme.spacing(2),
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
  },
  postTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "36px",
  },
  postDescription: {
    marginBottom: theme.spacing(4),
    fontSize: "20px",
  },
  postLink: {
    fontSize: "20px",
  },
  commentsContainer: {
    marginTop: theme.spacing(4),
  },
  commentInput: {
    marginRight: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
  commentButton: {
    marginTop: theme.spacing(2),
  },
}));






function PostDetails(props) {
  
  let userDetails = JSON.parse(localStorage.getItem('user'));
  if (!userDetails) {
    userDetails = [];
  }
  const [email, setEmail] = useState(userDetails?.email ?? 'anonymous');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [post, setPost] = useState({});

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };
  
  console.log('userDetails', userDetails)
  console.log('userDetails', userDetails.email)
  

  const { _id } = useParams();
  console.log('id :', _id)

  useEffect(() => {
    const getPost = async () => {
      try {
        const res = await axios.get(`https://edunode.herokuapp.com/api/post/posts/${_id}`);
        setPost(res.data);
        console.log('post')
        console.log(post)
      } catch (err) {
        console.error(err);
      }
    };
    getPost();
  }, [_id]);


  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(
          `https://edunode.herokuapp.com/api/post/comments/${_id}`
        );
        setComments(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getComments();
  }, [_id]);


  const handleSubmit = async (event) => {

    console.log('submit email : ',userDetails.email)
    event.preventDefault();
    const userEmaill = userDetails?.email ?? 'anonymous';
    const comment = {
      text: newComment,
      email: userEmaill
    };

    try {
      const res = await axios.post(`https://edunode.herokuapp.com/api/post/comments/${_id}`, comment);
      setComments([...comments, comment]);
      setNewComment("");
    } catch (err) {
      console.error(err);
    }
  };



  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={8} md={20}>
            <Navbar />
           
            <br></br>
            <div style={{ padding: "10px" }}>
              <div className="post">
              <h1 style={{fontSize: '20px', fontWeight: 'bold'}} >Title:</h1>
                <h2>{post.title}</h2>
                <br></br>
                <h1 style={{fontSize: '20px', fontWeight: 'bold'}}>Description :</h1>
                <p>{post.description}</p>
                <br></br>
                <h1 style={{fontSize: '20px', fontWeight: 'bold'}}>Link :</h1>
                <a href={post.link}>{post.link}</a>
                <br></br>
                <div className="comments">
                <h3 style={{fontSize: '20px', fontWeight: 'bold'}}>Comments</h3>

                  <form onSubmit={handleSubmit}>
                    <TextField
                      value={newComment}
                      onChange={handleCommentChange}
                    />
                    <button type="submit">Add Comment</button>
                  </form>
                  {comments.map((comment, index) => (
                    <div key={index}>
                      <p>{comment.text}</p>
                      <p>Comment by: {comment.email}</p>
                    </div>
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
};

PostDetails.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});

export default (PostDetails = connect(mapStateToProps)(
  reduxForm({
    form: "postReduxForm",
    fields: ["email", "tags", "title", "description", "link"],
    clearErrors,
  })(PostDetails)
));
