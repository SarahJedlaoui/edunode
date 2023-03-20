import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from 'tss-react/mui';
import { Container } from '@mui/material';
import { Typography } from '@mui/material';
import { Link } from '@mui/material';
import CookieConsent from 'react-cookie-consent';

function Copyright() {
return (
<>
<Typography variant="body2" color="textSecondary" align="center">
{'Copyright © '}
<Link color="inherit">
EduNode is developed by OG Technologies EU -
</Link>{' '}
{new Date().getFullYear()}
{'.'}
</Typography>
<div className="text-center">
<Link color="inherit" href="/blog">Our Blog</Link> |
<Link color="inherit" href="/terms">Terms and Conditions</Link> |
<Link color="inherit" href="/privacy">Privacy Policy</Link> |
<Link color="inherit" href="/resources">Resources</Link> |
<Link color="inherit" href="/community">Community</Link> |
<Link color="inherit" href="https://discord.gg/p9cRmdz8jr">Discord</Link> |
<Link color="inherit" href="/courses">Courses</Link> |
<Link color="inherit" href="/about">About</Link> |
<Link color="inherit" href="/milestones">Milestones</Link>
</div>
{/* <Alert className="text-center" severity="info">
Welcome to EduNode! Please have in mind that we are currently in beta. Your feedback will be highly appreciated.
</Alert> /}
{/ <a href="/privacy">Privacy</a> */}
<CookieConsent>
This website uses cookies to enhance the user experience.
</CookieConsent>
</>
);
}

const useStyles = makeStyles((theme) => ({
footer: {
backgroundColor: theme.palette.background.paper,
// marginTop: theme.spacing(8),
padding: theme.spacing(6, 0),
},
}));

export default function Footer(props) {
const classes = useStyles();
const { description, title } = props;

return (
<footer className={classes.footer}>
<Container maxWidth="lg">
<Typography variant="h6" align="center" gutterBottom>
{title}
</Typography>
<Typography variant="subtitle1" align="center" color="textSecondary" component="p">
{description}
</Typography>
<Copyright />
</Container>
</footer>
);
}

Footer.propTypes = {
description: PropTypes.string,
title: PropTypes.string,
};