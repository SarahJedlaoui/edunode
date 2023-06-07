import React from 'react';
import { Box, Typography, Paper, Container } from '@mui/material';
import Navbar1 from '../Dashboard/Navbar1';

function EduNodeGuide() {
  return (
    <>
      <Navbar1 />
      <Box mt={4}> {/* For margin top */}
        <Container maxWidth="md">
          <Paper elevation={3} sx={{ p: 4, borderRadius: 2 }}>
            <Typography variant="h3" gutterBottom>
              Leveraging EduNode for Educators: A Comprehensive Guide
            </Typography>
            <Typography variant="body1" paragraph>
              Welcome teachers! We understand that navigating a new educational platform might seem daunting, so we've put together a comprehensive guide to help you effectively utilize EduNode. EduNode is a revolutionary platform that enables teachers like yourself to connect with students across the globe, expand your teaching resources, and achieve your pedagogical goals.
            </Typography>

            <Typography variant="h5" gutterBottom mt={4}>
              1. Expanding Your Reach
            </Typography>
            <Typography variant="body1" paragraph>
              With EduNode, you have the unique opportunity to extend your teaching beyond the four walls of a classroom. You can create and publish online courses, reaching students from different regions and backgrounds. This way, you are not only contributing to making education more accessible, but you're also expanding your influence as an educator.
            </Typography>

            {/* Add other sections here */}

            
            <Typography variant="h5" gutterBottom mt={4}>
              2. Tools and Resources
            </Typography>
            <Typography variant="body1" paragraph>
           <p>Here you can find some tools that you can leverage:</p>  
           <p>Here you can create a new course: <a href="https://edunode.org/course">https://edunode.org/course</a> </p> 
           <p>Here you can create a new post: <a href="https://edunode.org/post">https://edunode.org/post</a> </p> 
           Additionally, feel free to use our Chat Feature if you need support creating new courses: <a href="https://edunode.org/chat">https://edunode.org/chat</a>

            </Typography>
            <Typography variant="h5" gutterBottom mt={4}>
              3. Easy Tracking and Assessment
            </Typography>
            <Typography variant="body1" paragraph>
              EduNode provides robust tracking and assessment tools. You can easily monitor students' progress, identify areas where they're struggling, and adjust your teaching accordingly. EduNode's analytical tools also provide insights into the effectiveness of your teaching methods and course materials, helping you continually improve your practice.
            </Typography>
            <Typography variant="body1" paragraph>
              To get started, sign up on the EduNode platform, set up your profile, and familiarize yourself with its features. There's also a detailed help section and a responsive customer support team if you need assistance.
            </Typography>
            <Typography variant="body1" paragraph>
              Remember, teaching is a journey. As you embrace EduNode, you're embarking on a new adventure to reshape and enhance how you connect with and inspire your students. Enjoy the journey!
            </Typography>
          </Paper>
        </Container>
      </Box>
    </>
  );
}

export default EduNodeGuide;
