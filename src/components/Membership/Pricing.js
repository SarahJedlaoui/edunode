import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import StarIcon from '@mui/icons-material/StarBorder';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Link from '@mui/material/Link';
import GlobalStyles from '@mui/material/GlobalStyles';
import Container from '@mui/material/Container';
//import { Redirect, BrowserRouter } from "react-router-dom";
import LinkButton from "./Button"
import { PayPalButton } from "react-paypal-button-v2";
import Rec from "./recurring";

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      
      'Up to 1 User',
      'Access to FREE educational content and courses.',
      'Email support',
    ],
    buttonText: null,
    buttonVariant: null,
    buttonLink: "/"
  },
  {
    title: 'Pro',
    subheader: 'Most popular',
    price: '29',
    description: [
     
      'All of Free tier',
      'NFT certification for course completion',
      'Priority email support',
      'Discord Role',
    ],
    buttonText: 'Buy Now',
    buttonVariant: 'contained',
    buttonLink: "/membership/checkout"
  },
 
];

// const footers = [
//   {
//     title: 'Company',
//     description: ['Team', 'History', 'Contact us', 'Locations'],
//   },
//   {
//     title: 'Features',
//     description: [
//       'Cool stuff',
//       'Random feature',
//       'Team feature',
//       'Developer stuff',
//       'Another one',
//     ],
//   },
//   {
//     title: 'Resources',
//     description: ['Resource', 'Resource name', 'Another resource', 'Final resource'],
//   },
//   {
//     title: 'Legal',
//     description: ['Privacy policy', 'Terms of use'],
//   },
// ];

const CheckoutButton = () => {


  // history.push("/dashboard")
}

function PricingContent() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <AppBar
        position="static"
        color="default"
        elevation={0}
        sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
      >
        
      </AppBar>
      {/* Hero unit */}
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Typography
          component="h1"
          variant="h3"
          align="center"
          color="text.primary"
          gutterBottom
        >
          Memberships
        </Typography>
        <Typography variant="h5" align="center" color="text.secondary" component="p">
        We offer flexible pricing for individuals and companies of all types and sizes.
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main" style={{ display: 'flex', flexDirection: 'column', alignItems:"flex-end" }}>
        <Grid container spacing={5} alignItems="flex-end">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid
              item
              key={tier.title}
              xs={12}
              sm={tier.title === 'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                    €{tier.price}
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        key={line}
                      >
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
               <Button href='/membership/checkout'
                  fullWidth variant={tier.buttonVariant}>
                   {tier.buttonText} 
                 </Button> 
                 {/* <Rec /> */}
                 {/* <PayPalButton
        options={{                   
        //   clientId: "ASqYFNJJ3gVy1CkJchOI1sAzqOjtlvnX1777MIxh7OEBRJislI51R-MzqPZ0mGJgqquxTpHlprJe4vSD",
        // currency: "EUR",
        vault: true
      }}
      amount="0.01"
        createSubscription={(data, actions) => {
          return actions.subscription.create({
            plan_id: 'P-8HR49030NU824513AMJPMQFI'
          });
        }}
        onApprove={(data, actions) => {
          // Capture the funds from the transaction
          return actions.subscription.get().then(function(details) {
            // Show a success message to your buyer
            alert("Subscription completed");

            // OPTIONAL: Call your server to save the subscription
            // return fetch("/paypal-subscription-complete", {
            //   method: "post",
            //   body: JSON.stringify({
            //     orderID: data.orderID,
            //     subscriptionID: data.subscriptionID
            //   })
            // });
          });
        }}
      /> */}
                 {/* <PayPalButton
                 options={{
                   clientId: "ASqYFNJJ3gVy1CkJchOI1sAzqOjtlvnX1777MIxh7OEBRJislI51R-MzqPZ0mGJgqquxTpHlprJe4vSD",
                   currency: "EUR",
                   vault: true
                 }}
                   amount="0.01"
                   onSuccess={(details, data) => {
                   alert("Transaction completed by " + details.payer.name.given_name);
console.log({details, data})
        }}
      /> */}
                </CardActions>
              </Card>
            </Grid>
          ))}



<Grid
              item
              key='Enterprise'
              xs={12}
              sm={'Enterprise' ? 12 : 6}
              md={4}
            >
              <Card>
                <CardHeader
                  title='Enterprise'
                  subheader= ''
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{
                    align: 'center',
                  }}
                  sx={{
                    backgroundColor: (theme) =>
                      theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[700],
                  }}
                />
                <CardContent>
                  <Box
                    sx={{
                      display: 'flex',
                      justifyContent: 'center',
                      alignItems: 'baseline',
                      mb: 2,
                    }}
                  >
                    <Typography component="h2" variant="h3" color="text.primary">
                    €-
                    </Typography>
                    <Typography variant="h6" color="text.secondary">
                      /mo
                    </Typography>
                  </Box>
                  <ul>
                    
                      <Typography
                        component="li"
                        variant="subtitle1"
                        align="center"
                        
                      >
                        'Tailored Courses for employees',
      'Tailored NFT Certification for course completion',
      'Help center access',
      'Phone & email support',
                      </Typography>
                    
                  </ul>
                </CardContent>
                <CardActions>
               <Button onClick={
                 () => {
                  window.location.href = 'mailto:hi@ogtechnologies.co?subject=Enterprise Membership Inquiry';
                  
                }} 
                  fullWidth variant='outlined'>
          
         
          Get in touch
                 </Button> 
          
                </CardActions>
              </Card>
            </Grid>





        </Grid>














      </Container>
      {/* Footer */}
      <Container
        maxWidth="md"
        component="footer"
        sx={{
          borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          mt: 8,
          py: [3, 6],
        }}
      >
        {/* <Grid container spacing={4} justifyContent="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={3} key={footer.title}>
              <Typography variant="h6" color="text.primary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="text.secondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Copyright sx={{ mt: 5 }} /> */}
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}

export default function Pricing() {
  return <PricingContent />;
}