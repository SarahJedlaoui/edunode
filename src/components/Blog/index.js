import React from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import Sidebar from './Sidebar';
import Footer from '../Footer';
import mb from "./mainblog.png"
import sa from "./stellarassets.png"
import ek from "./keybase_icon_132271.png"
import ec from "./economics.png"
import NavBar from "../NavBar"
import kelpword from "./img/kelpword.png"
import albedologo from "./albedologo.png"
import security from './cyber-security.png';
import nft from './newnft3.png';
import sc from "./smartcontract.png"
import amm from "./Articles/AMM/AMMs.png"
import suave from "./suave.gif"
import creator from "./Articles/Web3/creator.png"
import docker from "./docker1.png"
import ipfs from "./ipfss.png"
const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));


// const posts = [{
//   id: "3",
//   title: "titulo3",
//   body: "contenido de preba",
//   url: "url"
// }, {
//   id: "2",
//   title: "titulo2",
//   body: "contenido de preba",
//   url: "url"
// }, {
//   id: "1",
//   title: "titulo",
//   body: "contenido de preba",
//   url: "url"
// }];




const mainFeaturedPost = {
  title: 'EduNode: A decentralized E-learning platform ',
  description:
    "Join the increasing number of developers using revolutionary technology to build the best Web3 companies of the future.",
  image: mb,
  imgText: 'EduNode',
  linkText: 'Read more…',
  link: "EduNode-your-educational-platform-on-the-Stellar-Network"
};

const featuredPosts = [
  {
    title: 'How to issue an asset on Stellar',
    date: '14/05/2020',
    description:
      'Here you will learn how to issue an asset on the Stellar Network using the Stellar Laboratory.',
    image: sa,
    imageText: 'Image Text',
    link: '/blog/How-to-issue',
    tags:['Stellar']
  },
  {
    title: 'What is Keybase?',
    date: '23/05/2020',
    description:
      'Keybase is the best privacy-focused messaging app with a native integration of the Stellar network.',
    image: ek,
    imageText: 'Keybase',
    link: '/blog/What-is-Keybase',
    tags:['Keybase']
  },
  {
    title: 'Stellarnomics',
    date: '14/06/2020',
    description:
      'Monetary aspects of the Stellar Consensus Protocol and its steps towards decentralization',
    image: ec,
    imageText: 'Stellarnomics',
    link: '/blog/Stellarnomics',
    tags:['Stellarnomics','Stellar']
  },
  {
    title: 'Kelp: Setup your first trading bot',
    date: '03/09/2020',
    description:
      'Kelp is a free and open-source trading bot that supports the SDEX and 100+ centralized exchanges',
    image: kelpword,
    imageText: 'Kelp',
    link: '/blog/kelp',
    tags:['Kelp']
  },
  {
    title: 'Identity verification with Albedo',
    date: '09/10/2020',
    description:
      'Albedo allows other Stellar apps to request transaction signing or identity verification without ever exposing your secret key.',
    image: albedologo,
    imageText: 'Albedo',
    link: '/blog/albedo',
    tags:['Albedo']
  },
  {
    title: 'How to keep your lumens safe.',
    date: '08/12/2020',
    description:
      'Trying to keep your lumens safe is one of the challenges that cryptocurrencies face right now and the Stellar Ecosystem is not the exception.',
    image: security,
    imageText: 'Tips and Security tools',
    link: '/blog/security-tools',
    tags:['Stellar']
  },
  {
    title: 'What are NFTs and how to mint them using the Stellar Network?',
    date: '09/06/2021',
    description:
      'Have you ever of NFTs? I would say probably, it is right now all over the internet',
    image: nft,
    imageText: 'NFTs on Stellar',
    link: '/blog/minting-nfts',
    tags:['NFT']
  },
  {
    title: 'What are Smart Contracts?',
    date: '26/07/2021',
    description:
      'In the following blog post, we will talk about them, its early days, and how you can get started building SCs on Stellar.',
    image: sc,
    imageText: 'Smart Contracts',
    link: '/blog/smart-contracts',
    tags:['Smart Contracts']
  },
  {
    title: 'DeFi Explained: What is an Automated Market Maker?',
    date: '13/12/2021',
    description:
      'What are AMMs? Why are they useful? And how they are being used in decentralized finance.',
    image: amm,
    imageText: 'DeFi Explained: What is an Automated Market Maker?',
    link: '/blog/automated-market-maker',
    tags:['AMM']
  },
  {
    title: 'Learn about Blockchain',
    date: '17/05/2022',
    description:
      'Learn about Blockchain, what are the most popular applications, and how you can apply them to make your day-to-day activities easier.',
    image: suave,
    imageText: 'Learn about Blockchain and how to apply it to your day-to-day business life',
    link: '/blog/learn-about-blockchain',
    tags:['Blockchain']
  },
  {
    title: 'The Web3 Revolution And The New Creator Economy',
    date: '12/08/2022',
    description:
      'Before we can actually understand what Web3.0 means, it is essential to understand what Web1.0 and Web2.0 are.',
    image: creator,
    imageText: 'Learn about Blockchain and how to apply it to your day-to-day business life',
    link: '/blog/the-web3-revolution',
    tags:['Web3']
  },
  {
    title: 'Learn about Docker',
    date: '28/03/2023',
    description:
      'Learn about Docker, what are the most popular applications, and how you can apply it in Blockchain .',
    image: docker,
    imageText: 'Learn about Docker and how to apply it in Blockchain',
    link: '/blog/Docker',
    tags:['Doker']
  },
  {
    title: 'Learn about IPFS',
    date: '13/04/2023',
    description:
      'Learn about IPFS, what are the most popular applications, and how you can use it to store images .',
    image:ipfs,
    imageText: 'Learn about IPFS, what are the most popular applications, and how you can use it to store images',
    link: '/blog/ipfs',
    tags:['IPFS']
  },
  // {
  //   title: 'Learn about Soroban',
  //   date: '13/04/2023',
  //   description:
  //     'Learn about Soroban and how to build Smart Contracts on Stellar .',
  //   image:ipfs,
  //   imageText: 'Learn about Soroban and how to build Smart Contracts on Stellar .',
  //   link: '/blog/soroban',
  // }
];




const sidebar = {
  title: 'About',
  description:
    "Welcome to EduNode's blog.",
  social: [
    { name: "GitHub", icon: GitHubIcon, url: "https://github.com/edunodeorg" },
    { name: '    Twitter', icon: TwitterIcon, url: "https://twitter.com/edunodeorg"}
  ],
};



export default function Blog() {
  const classes = useStyles();

  return (
    <React.Fragment>
      <NavBar />
<br></br>
      <Container maxWidth="lg">
        <Header title="Welcome to EduNode's Blog" />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <Grid container spacing={4}>
            {featuredPosts.map((post) => (
              <FeaturedPost key={post.title} post={post} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}>
            {/* <Main title="" posts={posts} /> */}
            
            <Sidebar
              title={sidebar.title}
              description={sidebar.description}
              archives={sidebar.archives}
              social={sidebar.social}
              
            />
          </Grid>
        </main>
      </Container>
      <Footer />
    </React.Fragment>
  );
}