import { Helmet } from 'react-helmet-async';
import React, { useState, useEffect } from "react";
import { useTheme } from '@mui/material/styles';
import { Grid, Container, Typography } from '@mui/material';
// sections
import {
  AppWidgetSummary,
} from '../sections/@dashboard/app';


export default function DashboardAppPage() {
  const theme = useTheme();
  const [certificateCount, setCertificateCount] = useState(0);
  const [acceptedCount, setAcceptedCount] = useState(0);
  const [rejectedCount, setRejectedCount] = useState(0);
  const [badgeCount, setBadgeCount] = useState(0);
  const [acceptedBadgesCount, setAcceptedBadgesCount] = useState(0);
  const [rejectedBadgesCount, setRejectedBadgesCount] = useState(0);
  const [coursCount, setCoursCount] = useState(0);
  const [acceptedCoursCount, setAcceptedCoursCount] = useState(0);
  const [rejectedCoursCount, setRejectedCoursCount] = useState(0);


  useEffect(() => {
    // Fetch the certificate counts
    fetch("https://edunode.herokuapp.com/api/validCertificate/count")
      .then((response) => response.json())
      .then((data) => setCertificateCount(data.count))
      .catch((error) => console.error(error));

    fetch("https://edunode.herokuapp.com/api/validCertificate/acceptedCount")
      .then((response) => response.json())
      .then((data) => setAcceptedCount(data.count))
      .catch((error) => console.error(error));

    fetch("https://edunode.herokuapp.com/api/validCertificate/rejectedCount")
      .then((response) => response.json())
      .then((data) => setRejectedCount(data.count))
      .catch((error) => console.error(error));
    // Fetch the badge counts
    fetch("https://edunode.herokuapp.com/api/badge/count")
      .then((response) => response.json())
      .then((data) => setBadgeCount(data.count))
      .catch((error) => console.error(error));

    fetch("https://edunode.herokuapp.com/api/badge/acceptedCount")
      .then((response) => response.json())
      .then((data) => setAcceptedBadgesCount(data.count))
      .catch((error) => console.error(error));

    fetch("https://edunode.herokuapp.com/api/badge/rejectedCount")
      .then((response) => response.json())
      .then((data) => setRejectedBadgesCount(data.count))
      .catch((error) => console.error(error));
       // Fetch the Courses counts
    fetch("https://edunode.herokuapp.com/api/addedcours/count")
    .then((response) => response.json())
    .then((data) => setCoursCount(data.count))
    .catch((error) => console.error(error));

  fetch("https://edunode.herokuapp.com/api/addedcours/acceptedCount")
    .then((response) => response.json())
    .then((data) => setAcceptedCoursCount(data.count))
    .catch((error) => console.error(error));

  fetch("https://edunode.herokuapp.com/api/addedcours/rejectedCount")
    .then((response) => response.json())
    .then((data) => setRejectedCoursCount(data.count))
    .catch((error) => console.error(error));
  }, []);
  return (
    <>
      <Helmet>
        <title> Dashboard</title>
      </Helmet>

      <Container maxWidth="xl">
        <Typography variant="h4" sx={{ mb: 5 }}>
          Hi, Welcome back
        </Typography>

        <Grid container spacing={3}>
          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Certificate Verification Requests" total={certificateCount} icon={'bi:pass-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Approved Certificates" total={acceptedCount} color="success" icon={'bi:check-circle-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Rejected Certificates" total={rejectedCount} color="error" icon={'bi:x-circle-fill'} />
          </Grid>
        </Grid>
        <br></br>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Badge Verification Requests" total={badgeCount} icon={'bi:pass-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Approved Badge Requests " total={acceptedBadgesCount} color="success" icon={'bi:check-circle-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Rejected Badge Requests" total={rejectedBadgesCount} color="error" icon={'bi:x-circle-fill'} />
          </Grid>
          </Grid>
          <br></br>
        <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Course Verification Requests" total={coursCount} icon={'bi:pass-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Approved Course Requests " total={acceptedCoursCount} color="success" icon={'bi:check-circle-fill'} />
          </Grid>

          <Grid item xs={12} sm={6} md={3}>
            <AppWidgetSummary title="Number of Rejected Course Requests" total={rejectedCoursCount} color="error" icon={'bi:x-circle-fill'} />
          </Grid>


          {/**   <Grid item xs={12} md={6} lg={8}>
            <AppWebsiteVisits
              title="Website Visits"
              subheader="(+43%) than last year"
              chartLabels={[
                '01/01/2003',
                '02/01/2003',
                '03/01/2003',
                '04/01/2003',
                '05/01/2003',
                '06/01/2003',
                '07/01/2003',
                '08/01/2003',
                '09/01/2003',
                '10/01/2003',
                '11/01/2003',
              ]}
              chartData={[
                {
                  name: 'Team A',
                  type: 'column',
                  fill: 'solid',
                  data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30],
                },
                {
                  name: 'Team B',
                  type: 'area',
                  fill: 'gradient',
                  data: [44, 55, 41, 67, 22, 43, 21, 41, 56, 27, 43],
                },
                {
                  name: 'Team C',
                  type: 'line',
                  fill: 'solid',
                  data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39],
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentVisits
              title="Current Visits"
              chartData={[
                { label: 'America', value: 4344 },
                { label: 'Asia', value: 5435 },
                { label: 'Europe', value: 1443 },
                { label: 'Africa', value: 4443 },
              ]}
              chartColors={[
                theme.palette.primary.main,
                theme.palette.info.main,
                theme.palette.warning.main,
                theme.palette.error.main,
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppConversionRates
              title="Conversion Rates"
              subheader="(+43%) than last year"
              chartData={[
                { label: 'Italy', value: 400 },
                { label: 'Japan', value: 430 },
                { label: 'China', value: 448 },
                { label: 'Canada', value: 470 },
                { label: 'France', value: 540 },
                { label: 'Germany', value: 580 },
                { label: 'South Korea', value: 690 },
                { label: 'Netherlands', value: 1100 },
                { label: 'United States', value: 1200 },
                { label: 'United Kingdom', value: 1380 },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppCurrentSubject
              title="Current Subject"
              chartLabels={['English', 'History', 'Physics', 'Geography', 'Chinese', 'Math']}
              chartData={[
                { name: 'Series 1', data: [80, 50, 30, 40, 100, 20] },
                { name: 'Series 2', data: [20, 30, 40, 80, 20, 80] },
                { name: 'Series 3', data: [44, 76, 78, 13, 43, 10] },
              ]}
              chartColors={[...Array(6)].map(() => theme.palette.text.secondary)}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppNewsUpdate
              title="News Update"
              list={[...Array(5)].map((_, index) => ({
                id: faker.string.uuid(),
                title: faker.person.jobTitle(),
                description: faker.person.jobTitle(),
                image: `/assets/images/covers/cover_${index + 1}.jpg`,
                postedAt: faker.date.recent(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppOrderTimeline
              title="Order Timeline"
              list={[...Array(5)].map((_, index) => ({
                id: faker.string.uuid(),
                title: [
                  '1983, orders, $4220',
                  '12 Invoices have been paid',
                  'Order #37745 from September',
                  'New order placed #XF-2356',
                  'New order placed #XF-2346',
                ][index],
                type: `order${index + 1}`,
                time: faker.date.past(),
              }))}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <AppTrafficBySite
              title="Traffic by Site"
              list={[
                {
                  name: 'FaceBook',
                  value: 323234,
                  icon: <Iconify icon={'eva:facebook-fill'} color="#1877F2" width={32} />,
                },
                {
                  name: 'Google',
                  value: 341212,
                  icon: <Iconify icon={'eva:google-fill'} color="#DF3E30" width={32} />,
                },
                {
                  name: 'Linkedin',
                  value: 411213,
                  icon: <Iconify icon={'eva:linkedin-fill'} color="#006097" width={32} />,
                },
                {
                  name: 'Twitter',
                  value: 443232,
                  icon: <Iconify icon={'eva:twitter-fill'} color="#1C9CEA" width={32} />,
                },
              ]}
            />
          </Grid>

          <Grid item xs={12} md={6} lg={8}>
            <AppTasks
              title="Tasks"
              list={[
                { id: '1', label: 'Create FireStone Logo' },
                { id: '2', label: 'Add SCSS and JS files if required' },
                { id: '3', label: 'Stakeholder Meeting' },
                { id: '4', label: 'Scoping & Estimations' },
                { id: '5', label: 'Sprint Showcase' },
              ]}
            />
          </Grid>*/}
        </Grid>
      </Container>
    </>
  );
}
