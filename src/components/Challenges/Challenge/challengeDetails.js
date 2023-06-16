import React, { useState, useEffect, useContext } from "react";
import { Field, reduxForm } from "redux-form";
import { connect } from "react-redux";
import { clearErrors } from "../../../actions/errorActions";
import Grid from "@mui/material/Grid";
import Footer from "../../Footer/Footer";
import Box from "@mui/material/Box";
import { EditorState } from "draft-js";
import PropTypes from "prop-types";
import { useLocation, useParams } from 'react-router-dom';
import axios from "axios";
import Navbar from '../../Dashboard/Navbar1';
import TextField from '@mui/material/TextField'
import { makeStyles } from "@mui/styles";


const useStyles = makeStyles((theme) => ({
  challengeContainer: {
    padding: theme.spacing(2),
    backgroundColor: "#F5F5F5",
    borderRadius: "10px",
  },
  challengeTitle: {
    marginBottom: theme.spacing(2),
    fontWeight: "bold",
    fontSize: "36px",
  },
  challengeDescription: {
    marginBottom: theme.spacing(4),
    fontSize: "20px",
  },
  challengeLink: {
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






function ChallengeDetails(props) {

  let userDetails = JSON.parse(localStorage.getItem('user'));
  if (!userDetails) {
    userDetails = [];
  }
  const [email, setEmail] = useState(userDetails?.email ?? 'anonymous');
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState("");
  const [challenge, setChallenge] = useState({});
  const [commentImages, setCommentImages] = useState({});
  const [commentId, setCommentId] = useState({});
  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const { _id } = useParams();

  useEffect(() => {
    const getChallenge= async () => {
      try {
        const res = await axios.get(`https://edunode.herokuapp.com/api/challenge/challenges/${_id}`);
        setChallenge(res.data);
      } catch (err) {
        console.error(err);
      }
    };
    getChallenge();
  }, [_id]);


  useEffect(() => {
    const getComments = async () => {
      try {
        const res = await axios.get(
          `https://edunode.herokuapp.com/api/challenge/comments/${_id}`
        );
        setComments(res.data);

        // Extract unique emails from comments
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
      const res = await axios.post(`https://edunode.herokuapp.com/api/challenge/comments/${_id}`, comment);
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
              <div className="challenge">
                <h1 style={{ fontSize: '20px', fontWeight: 'bold' }} >Title:</h1>
                <h2>{challenge.title}</h2>
                <br></br>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Description :</h1>
                <p dangerouslySetInnerHTML={{ __html: challenge.description }} ></p>
                <br></br>
                <h1 style={{ fontSize: '20px', fontWeight: 'bold' }}>Link :</h1>
                <a href={challenge.link}>{challenge.link}</a>
                <br></br>
                <div className="comments">
                  <h3 style={{ fontSize: '20px', fontWeight: 'bold' }}>Comments:</h3>

                  <form onSubmit={handleSubmit}>
                    <TextField
                      value={newComment}
                      onChange={handleCommentChange}
                    />
                    <button type="submit">Add Comment</button>
                  </form>
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

ChallengeDetails.propTypes = {
  isAuthenticated: PropTypes.bool,
  error: PropTypes.object.isRequired,
  clearErrors: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});

export default (ChallengeDetails = connect(mapStateToProps)(
  reduxForm({
    fields: ["email", "tags", "title", "description", "link"],
    clearErrors,
  })(ChallengeDetails)
));
