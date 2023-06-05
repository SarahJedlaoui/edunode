import React from 'react';
import Navbar1 from '../Dashboard/Navbar1';
function EduNodeGuide() {
  return (
<>
<Navbar1 />
<br>
</br>
<br></br>
    <div style={containerStyle}>

      <div style={contentStyle}>
        <h1 style={titleStyle}>Leveraging EduNode for Educators: A Comprehensive Guide</h1>
        <p>Welcome teachers! We understand that navigating a new educational platform might seem daunting, so we've put together a comprehensive guide to help you effectively utilize EduNode. EduNode is a revolutionary platform that enables teachers like yourself to connect with students across the globe, expand your teaching resources, and achieve your pedagogical goals.</p>

        <h2 style={sectionTitleStyle}>1. Expanding Your Reach</h2>
        <p>With EduNode, you have the unique opportunity to extend your teaching beyond the four walls of a classroom. You can create and publish online courses, reaching students from different regions and backgrounds. This way, you are not only contributing to making education more accessible, but you're also expanding your influence as an educator.</p>
        
        {/* Add other sections here */}

        <h2 style={sectionTitleStyle}>2. Easy Tracking and Assessment</h2>
        <p>EduNode provides robust tracking and assessment tools. You can easily monitor students' progress, identify areas where they're struggling, and adjust your teaching accordingly. EduNode's analytical tools also provide insights into the effectiveness of your teaching methods and course materials, helping you continually improve your practice.</p>
        <p>To get started, sign up on the EduNode platform, set up your profile, and familiarize yourself with its features. There's also a detailed help section and a responsive customer support team if you need assistance.</p>
        <p>Remember, teaching is a journey. As you embrace EduNode, you're embarking on a new adventure to reshape and enhance how you connect with and inspire your students. Enjoy the journey!</p>
      </div>
    </div>
    </>
  );
}

// Styling
const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '80vh',
  background: '#f2f2f2',
};

const contentStyle = {
  maxWidth: '800px',
  padding: '20px',
  background: '#fff',
  borderRadius: '8px',
  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
};

const titleStyle = {
  fontSize: '2rem',
  marginBottom: '20px',
};

const sectionTitleStyle = {
  fontSize: '1.5rem',
  marginTop: '30px',
};

export default EduNodeGuide;
