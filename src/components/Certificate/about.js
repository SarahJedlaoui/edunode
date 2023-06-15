import React from 'react';
import { Typography, Container, Box } from '@mui/material';

class CertificatePage extends React.Component {
    render() {
        return (
            <Container maxWidth="md">
                <Box my={4}>
                    <Typography variant="h4" component="h1" gutterBottom>
                        EduNode Certificates: Proving Competence in a Digital World
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        At EduNode, we understand that education is about more than just knowledge acquisition. It's about being able to demonstrate what you've learned and how it makes you more competent. That's why we offer EduNode Certificates, a unique feature of our learning platform.
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        What are EduNode Certificates?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        EduNode Certificates are digital proof of course completion. When you complete a course on EduNode, you receive a certificate that validates your newly acquired skills. Whether you're a freelancer seeking to showcase your expertise or an employee aiming to add value to your organization, these certificates help you demonstrate your learning achievements.
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        Why are EduNode Certificates special?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        Our certificates are not just digital files; they are immutable proofs of your accomplishment. Thanks to the innovative use of blockchain technology, every EduNode Certificate is stored on a public ledger, making it easy to audit and impossible to forge. This ensures that your achievement is secure, transparent, and verifiable at any time and from anywhere.
                    </Typography>
                    <Typography variant="h5" component="h2" gutterBottom>
                        How can EduNode Certificates benefit you?
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        1. Credibility: Our certificates lend credibility to your professional profile. They serve as an assurance to employers and clients about your expertise and dedication to continuous learning.<br/>
                        2. Career Advancement: Showcasing your EduNode Certificates can make you a more desirable candidate for promotions or new job opportunities.<br/>
                        3. Lifelong Learning: They serve as a tangible record of your commitment to lifelong learning and skill development.<br/>
                        4. Easy Verification: The immutable nature of our certificates on the blockchain allows for quick and easy verification of your accomplishments, eliminating any doubts about the legitimacy of your credentials.
                    </Typography>
                    <Typography variant="body1" gutterBottom>
                        EduNode Certificates are more than just a digital representation of your course completion; they are a testament to your dedication to continuous learning and professional development. They're your passport to success in the digital world. Enroll in an EduNode course today and start your journey towards achieving your career goals!
                    </Typography>
                </Box>
            </Container>
        );
    }
}

export default CertificatePage;
