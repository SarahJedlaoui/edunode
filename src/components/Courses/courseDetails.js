import React, { useState, useEffect, useContext } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { clearErrors } from "../../actions/errorActions";
import Grid from "@mui/material/Grid";
import { Button } from '@mui/material';
import Box from "@mui/material/Box";
import { EditorState } from "draft-js";
import PropTypes from "prop-types";
import { useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import Navbar1 from '../Dashboard/Navbar1';
import TextField from '@mui/material/TextField'
import { makeStyles } from "@mui/styles";



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






function CourseDetails(props) {

  let userDetails = JSON.parse(localStorage.getItem('user'));
  if (!userDetails) {
    userDetails = [];
  }
  const [email, setEmail] = useState(userDetails?.email ?? 'anonymous');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [course, setCourse] = useState({});
  const [commentImages, setCommentImages] = useState({});
  const [commentId, setCommentId] = useState({});
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  console.log('userDetails', userDetails)
  console.log('userDetails', userDetails.email)


  const { _id } = useParams();
  console.log('id :', _id)

  useEffect(() => {
    const getCourse = async () => {
      try {
        const res = await axios.get(`https://edunode.herokuapp.com/api/cours/course/${_id}`);
        setCourse(res.data);
        console.log('course')
        console.log(course)
      } catch (err) {
        console.error(err);
      }
    };
    getCourse();
  }, [_id]);


  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(
          `https://edunode.herokuapp.com/api/cours/comments/${_id}`
        );
        setComments(res.data);
        const uniqueEmails = Array.from(new Set(res.data.map(comment => comment.email)));

        // Fetch user details for each email
        const userImages = {};
        const userId= {};
        for (const email of uniqueEmails) {
          const res = await axios.get(`https://edunode.herokuapp.com/api/users/user/${email}`);

          const user = res.data;
          userImages[email] = user.user.images;
          userId[email] = user.user._id;
          console.log('image', userImages)
          console.log('user', res.data)
        }

        setCommentImages(userImages);
        setCommentId(userId);

      } catch (err) {
        console.error(err);
      }
    };
    getComments();
  }, [_id]);

  const handleSubmit = async (event) => {

    console.log('submit email : ', userDetails.email)
    event.preventDefault();
    const userEmaill = userDetails?.email ?? 'anonymous';
    const comment = {
      text: newComment,
      email: userEmaill
    };

    try {
      const res = await axios.post(`https://edunode.herokuapp.com/api/cours/comments/${_id}`, comment);
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
            <Navbar1 />
            <br></br>
            <br></br>
            <div style={{ padding: "10px" }}>
              <div className="post">
                <h1 style={{ fontSize: '20px', fontWeight: 'bold' }} >Title :</h1>

                <h2>{course.title}</h2>
                <br></br>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Description :</h1>
                <p>{course.description}</p>
                <br></br>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Link :</h1>
                <a href={course.link}>{course.link}</a>
                <br></br>
                {course.mit && (
                  <div>
                    <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>MIT terms of use:</h1>
                    <a href={course.mit}>{course.mit}</a>
                  </div>
                )}
                <br></br>
                <div className="comments">
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Comments</h3>
                  <form onSubmit={handleSubmit}>
                    <TextField
                      value={newComment}
                      onChange={handleCommentChange}
                    />
                    <br></br>
                    <Button  variant="contained" type="submit">Add Comment</Button>
                  </form>
                  <br></br>
                  {comments.map((comment, index) => (
                    <div key={index} style={{ display: 'flex', alignItems: 'center' }}>
                      {comment.email in commentImages &&   (
                        <button>
                        <img
                          src={commentImages[comment.email]}
                          alt="User Profile"
                          style={{ width: '50px', height: '50px', marginRight: '10px', borderRadius: '50%' }}
                          onClick={() => {
                            window.location.href = `/profile/${commentId[comment.email]}`;
                          }}
                        />
                        </button>
                      )}
                      <div>
                        <p>Comment by: {comment.email}</p>
                        <p>{comment.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Grid>
        </Grid>

      </Box>
    </div>
  );
};

CourseDetails.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});

export default (CourseDetails = connect(mapStateToProps)(
  reduxForm({
    form: "postReduxForm",
    fields: ["email", "tags", "title", "description", "link"],
    clearErrors,
  })(CourseDetails)
));
