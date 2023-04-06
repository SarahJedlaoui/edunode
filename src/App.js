import React from "react";
import { Route, Routes } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { store } from "./store";
import Home from "./components/Home";
import AboutUs from "./components/aboutus";
import Account from "./components/Account"
//import Dashboard from "./components/Dashboard";
import Resources from "./components/Resources";
import Community from "./components/Community";
import Milestones from "./components/Milestones"
import Courses from './components/Courses';
import SearchBox from "./components/SearchBox";
import SearchResultsPage from "./components/SearchBox/SearchResultsPage/index"
import Questions from './components/Courses/Questions';
import QuestionsTwo from './components/Courses/QuestionsTwo';
import QuestionsThree from './components/Courses/QuestionsThree';
import QuestionsFour from './components/Courses/QuestionsFour';
import QuestionsFive from './components/Courses/QuestionsFive';
import Intro from './components/Courses/One/Intro';
import Introi from './components/Courses/One/Introi';
import Introii from './components/Courses/One/Introii';
import Introiii from './components/Courses/One/Introiii';
import Introiiii from './components/Courses/One/Introiiii';
import Introiiiii from './components/Courses/One/Introiiiii';
import Coursedone from "./components/Courses/Coursedone"
import Keybase from "./components/Blog/Articles/Keybase";
import Issue from "./components/Blog/Articles/Issue";
import Register from "./components/Register";
import Login from "./components/Login";
import Chat from "./components/Chat";
import Blog from "./components/Blog";
import VerifyEmail from "./components/VerifyEmail";
import Stellarnomics from "./components/Blog/Articles/Stellarnomics";
import Projects from "./components/Projects";
import Seguridad from "./components/Blog/Articles/Seguridad";
import Blockchain from "./components/Blog/Articles/Blockchain";
import Contracts from './components/Blog/Articles/Contracts';
import Docker from './components/Blog/Articles/Docker';
import AMM from './components/Blog/Articles/AMM/AMM';
import Kelp from "./components/Blog/Articles/Kelp";
import Albedo from "./components/Blog/Articles/Albedo";
import Security from './components/Blog/Articles/Security';
import NFT from './components/Blog/Articles/NFT';
import Certificate from "./components/Certificate"
import Web3 from "./components/Blog/Articles/Web3"
import ChessBoard from "./components/Chess/";
import Feed from "./components/Feed";
import Gcallback from "./components/Gcallback";
import Hyperledger from "./components/Hyperledger"
import HyperledgerCourses from "./components/Hyperledger/Courses"
import CodeChallenge from "./components/CodeChallenge";
import CodeEditor from "./components/CodeEditor";
import ContactUs from "./components/contactus";
import Loggedout from "./components/Loggedout";
import Membership from "./components/Membership"
import Checkout from "./components/Membership/Checkout"
import NewPost from "./components/NewPost";
import Privacy from './components/Privacy';
import SubmitPost from "./components/SubmitPost"
import Dashboard from "./components/Dashboard";
import Main from "./components/Dashboard/Main";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Post from "./components/Posts/Post";
import Country from "./components/Account/contries"

function App(props) {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Provider store={store}>
      <Routes location={location} navigate={navigate}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs/>} />
        <Route exact path="/account" element={<Account/>} />
        <Route exact path="/resources" element={<Resources/>} />
        <Route exact path="/community" element={<Community/>} />
        <Route exact path="/milestones" element={<Milestones/>} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/search" element={<SearchBox/>} />
        <Route exact path="/search-results/:query" element={<SearchResultsPage/>} />
        <Route exact path="/search" element={<SearchBox/>} />
        <Route exact path="/courses/101/" element={<Intro/>} />
        <Route exact path="/courses/101/i" element={<Introi/>} />
        <Route exact path="/courses/101/ii" element={<Introii/>} />
        <Route exact path="/courses/101/iii" element={<Introiii/>} />
        <Route exact path="/courses/101/iiii" element={<Introiiii/>} />
        <Route exact path="/courses/101/iiiii" element={<Introiiiii/>} />
        <Route exact path="/courses/101/1" element={<Questions/>} />
        <Route exact path="/courses/101/2" element={<QuestionsTwo/>} />
        <Route exact path="/courses/101/3" element={<QuestionsThree/>} />
        <Route exact path="/courses/101/4" element={<QuestionsFour/>} />
        <Route exact path="/courses/101/5" element={<QuestionsFive/>} />
        <Route exact path="/courses/101/done" element={<Coursedone/>} />
        <Route exact path="/blog" element={<Blog/>} />
        <Route exact path="/blog/What-is-Keybase" element={<Keybase/>} />
        <Route exact path="/blog/How-to-issue" element={<Issue/>} />
        <Route exact path="/register" element={<Register/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/chat" element={<Chat/>} />
        <Route exact path="/certificate" element={<Certificate/>} />
        <Route exact path="/chat" element={<Chat/>} />
        <Route exact path="/blog/Stellarnomics" element={<Stellarnomics/>} />
        <Route exact path="/blog/minting-nfts" element={<NFT/>} />
        <Route exact path="/blog/security-tools" element={<Security/>} />
        <Route exact path="/blog/herramientas-de-seguridad" element={<Seguridad/>} />
        <Route exact path="/blog/smart-contracts" element={<Contracts/>} />
        <Route exact path="/blog/kelp" element={<Kelp/>} />
        <Route exact path="/blog/the-web3-revolution" element={<Web3/>} />
        <Route exact path="/blog/albedo" element={<Albedo/>} />
        <Route exact path="/blog/automated-market-maker" element={<AMM/>} />
        <Route exact path="/blog/learn-about-blockchain" element={<Blockchain/>} />
        <Route exact path="/projects" element={<Projects/>} />
        <Route exact path="/chess" element={<ChessBoard/>} />
        <Route exact path="/feed" element={<Feed/>} />
        <Route exact path="/gcallback" element={<Gcallback/>} />
        <Route exact path="/hyperledger" element={<Hyperledger/>} />
        <Route exact path="/hyperledger/courses" element={<HyperledgerCourses/>} />
        <Route exact path="/codechallenge" element={<CodeChallenge/>} />
        <Route exact path="/codeeditor" element={<CodeEditor/>} />
        <Route exact path="/contactus" element={<ContactUs/>} />
        <Route exact path="/loggedout" element={<Loggedout/>} />
        <Route exact path="/membership" element={<Membership/>} />
        <Route exact path="/membership/checkout" element={<Checkout/>} />
        <Route exact path="/dashboard/newpost" element={<NewPost/>} />
        <Route exact path="/privacy" element={<Privacy/>} />
        <Route exact path="/submitpost" element={<SubmitPost/>} />
        <Route exact path="/dashboard" element={<Dashboard/>} />
        <Route exact path="/VerifyEmail" element={<VerifyEmail/>} />
        <Route exact path="/blog/docker" element={<Docker/>} />
        <Route exact path="/dashboard/settings" element={<Settings/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/post" element={<Post/>} />
        <Route exact path="/country" element={<Country/>} />

      </Routes>
    </Provider>
  );
}

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  error: state.error,
  auth: state.auth,
});

export default connect(mapStateToProps)(App);
