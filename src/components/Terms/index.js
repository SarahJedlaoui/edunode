import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@mui/material/Typography";
import Footer from "../Footer";
import NavBar from "../NavBar";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const TermsAndConditions = () => {
  const classes = useStyles();

  return (
    
   
    <div className={classes.root}>
         <NavBar />
      <Typography variant="h5">Terms and Conditions</Typography>
      <Typography variant="body1">
        1. Introduction
        <br />
        Welcome to the terms and conditions of EduNode.org a e-learning platform focused on Web3 Development (the "Platform"). The Platform is operated by OG Technologies EU, a company registered in Vienna, Austria ("we", "us" or "our"). Represented by Olvis E. Gil Ríos.
        <br />
        <br />
        2. Acceptance of Terms
        <br />
        By accessing or using the Platform, you agree to be bound by these terms and conditions ("Terms"). If you do not agree to these Terms, you must not use the Platform.
        <br />
        <br />
        3. Changes to Terms
        <br />
        We reserve the right to make changes to these Terms at any time. Your continued use of the Platform following any changes indicates your acceptance of the new Terms.
        <br />
        <br />
        4. Intellectual Property
        <br />
        All content on the Platform, including but not limited to text, graphics, logos, images, and software, is our property or the property of our licensors and is protected by copyright and other intellectual property laws.
        <br />
        <br />
        5. Disclaimer of Liability
        <br />
        To the maximum extent permitted by law, we will not be liable for any damages whatsoever, including but not limited to direct, indirect, special, punitive, or consequential damages, arising out of or in connection with your use of the Platform.
        <br />
        <br />
        6. Governing Law
        <br />
        These Terms and your use of the Platform will be governed by and construed in accordance with the laws of Austria, without giving effect to any principles of conflicts of law.
        <br />
        <br />
        7. Contact Us
        <br />
        If you have any questions about these Terms or the Platform, please contact us at hi@edunode.org.

      </Typography>
      
    </div>
  );
};

export default TermsAndConditions;