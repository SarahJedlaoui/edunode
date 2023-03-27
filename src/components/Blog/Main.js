import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Article from "./Article"



export default function Main(props) {
  const { posts, title } = props;

  // const articleList = posts.map((post, i) => {
  //   console.log(post)
  //   return(
  //   <div key={post.id}><Article /></div>

  //   )
  // }
  // )



  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
      </Typography>
      <Divider />
      {/* <Article /> */}
    
    </Grid>
  );
}

Main.propTypes = {
  posts: PropTypes.array,
  title: PropTypes.string,
};