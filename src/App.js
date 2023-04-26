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
import Project from "./components/Community/project";
import Milestones from "./components/Milestones"
import TermsAndConditions from "./components/Terms";
import Courses from './components/Courses';
import SearchBox from "./components/SearchBox";
import SearchResultsPage from "./components/SearchBox/SearchResultsPage/index"
import Questions1 from './components/Courses1/Questions';
import Questions from './components/Courses/Questions';
import QuestionsTwo from './components/Courses/QuestionsTwo';
import QuestionsTwo1 from './components/Courses1/QuestionsTwo';
import QuestionsThree from './components/Courses/QuestionsThree';
import QuestionsThree1 from './components/Courses1/QuestionsThree';
import QuestionsFour from './components/Courses/QuestionsFour';
import QuestionsFive from './components/Courses/QuestionsFive';
import QuestionsFour1 from './components/Courses1/QuestionsFour';
import QuestionsFive1 from './components/Courses1/QuestionsFive';
import QuestionsSix1 from './components/Courses1/QuestionsSix';
import Questions2 from './components/Courses2/Questions';
import QuestionsTwo2 from './components/Courses2/QuestionsTwo';
import QuestionsThree2 from './components/Courses2/QuestionsThree';
import QuestionsFour2 from './components/Courses2/QuestionsFour';
import QuestionsFive2 from './components/Courses2/QuestionsFive';
import Questions3 from './components/Courses3/Questions';
import QuestionsTwo3 from './components/Courses3/QuestionsTwo';
import QuestionsThree3 from './components/Courses3/QuestionsThree';
import QuestionsFour3 from './components/Courses3/QuestionsFour';
import QuestionsFive3 from './components/Courses3/QuestionsFive';
import Questions4 from './components/Courses4/Questions';
import QuestionsTwo4 from './components/Courses4/QuestionsTwo';
import QuestionsThree4 from './components/Courses4/QuestionsThree';
import QuestionsFour4 from './components/Courses4/QuestionsFour';
import QuestionsFive4 from './components/Courses4/QuestionsFive';
import Intro from './components/Courses/One/Intro';
import Intro1 from './components/Courses1/One/Intro';
import Intro2 from './components/Courses2/One/Intro';
import Introi from './components/Courses/One/Introi';
import Introii from './components/Courses/One/Introii';
import Introiii from './components/Courses/One/Introiii';
import Introiiii from './components/Courses/One/Introiiii';
import Introiiiii from './components/Courses/One/Introiiiii';
import Introi1 from './components/Courses1/One/Introi';
import Introii1 from './components/Courses1/One/Introii';
import Introiii1 from './components/Courses1/One/Introiii';
import Introiiii1 from './components/Courses1/One/Introiiii';
import Introiiiii1 from './components/Courses1/One/Introiiiii';
import Introi2 from './components/Courses2/One/Introi';
import Introii2 from './components/Courses2/One/Introii';
import Introiii2 from './components/Courses2/One/Introiii';
import Introiiii2 from './components/Courses2/One/Introiiii';
import Introiiiii2 from './components/Courses2/One/Introiiiii';
import Intro3 from './components/Courses3/One/Intro';
import Introi3 from './components/Courses3/One/Introi';
import Introii3 from './components/Courses3/One/Introii';
import Introiii3 from './components/Courses3/One/Introiii';
import Introiiii3 from './components/Courses3/One/Introiiii';
import Introiiiii3 from './components/Courses3/One/Introiiiii';
import Intro4 from './components/Courses4/One/Intro';
import Introi4 from './components/Courses4/One/Introi';
import Introii4 from './components/Courses4/One/Introii';
import Introiii4 from './components/Courses4/One/Introiii';
import Introiiii4 from './components/Courses4/One/Introiiii';
import Introiiiii4 from './components/Courses4/One/Introiiiii';
import Coursedone from "./components/Courses/Coursedone"
import Coursedone1 from "./components/Courses1/Coursedone"
import Coursedone2 from "./components/Courses2/Coursedone"
import Coursedone3 from "./components/Courses3/Coursedone"
import Coursedone4 from "./components/Courses4/Coursedone"
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
import Ipfs from './components/Blog/Articles/Ipfs';
import Soroban from './components/Blog/Articles/Soroban';
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
//import Main from "./components/Dashboard/Main";
import Settings from "./components/Settings";
import Profile from "./components/Profile";
import Post from "./components/Posts/Post";
import Cours from "./components/Teach/teach";
import Certificat from "./components/Certificate/certificat";

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
        <Route exact path="/community/project" element={<Project/>} />
        <Route exact path="/milestones" element={<Milestones/>} />
        <Route exact path="/courses" element={<Courses/>} />
        <Route exact path="/search" element={<SearchBox/>} />
        <Route exact path="/search-results/:query" element={<SearchResultsPage/>} />
        <Route exact path="/search" element={<SearchBox/>} />
        <Route exact path="/courses/101/" element={<Intro/>} />
        <Route exact path="/courses/102/" element={<Intro1/>} />
        <Route exact path="/courses/103/" element={<Intro2/>} />
        <Route exact path="/courses/104/" element={<Intro3/>} />
        <Route exact path="/courses/105/" element={<Intro4/>} />
        <Route exact path="/courses/101/i" element={<Introi/>} />
        <Route exact path="/courses/101/ii" element={<Introii/>} />
        <Route exact path="/courses/101/iii" element={<Introiii/>} />
        <Route exact path="/courses/101/iiii" element={<Introiiii/>} />
        <Route exact path="/courses/101/iiiii" element={<Introiiiii/>} />
        <Route exact path="/courses/102/i" element={<Introi1/>} />
        <Route exact path="/courses/102/ii" element={<Introii1/>} />
        <Route exact path="/courses/102/iii" element={<Introiii1/>} />
        <Route exact path="/courses/102/iiii" element={<Introiiii1/>} />
        <Route exact path="/courses/102/iiiii" element={<Introiiiii1/>} />
        <Route exact path="/courses/103/i" element={<Introi2/>} />
        <Route exact path="/courses/103/ii" element={<Introii2/>} />
        <Route exact path="/courses/103/iii" element={<Introiii2/>} />
        <Route exact path="/courses/103/iiii" element={<Introiiii2/>} />
        <Route exact path="/courses/103/iiiii" element={<Introiiiii2/>} />
        <Route exact path="/courses/104/i" element={<Introi3/>} />
        <Route exact path="/courses/104/ii" element={<Introii3/>} />
        <Route exact path="/courses/104/iii" element={<Introiii3/>} />
        <Route exact path="/courses/104/iiii" element={<Introiiii3/>} />
        <Route exact path="/courses/104/iiiii" element={<Introiiiii3/>} />
        <Route exact path="/courses/105/i" element={<Introi4/>} />
        <Route exact path="/courses/105/ii" element={<Introii4/>} />
        <Route exact path="/courses/105/iii" element={<Introiii4/>} />
        <Route exact path="/courses/105/iiii" element={<Introiiii4/>} />
        <Route exact path="/courses/105/iiiii" element={<Introiiiii4/>} />
        <Route exact path="/courses/101/1" element={<Questions/>} />
        <Route exact path="/courses/101/2" element={<QuestionsTwo/>} />
        <Route exact path="/courses/101/3" element={<QuestionsThree/>} />
        <Route exact path="/courses/101/4" element={<QuestionsFour/>} />
        <Route exact path="/courses/101/5" element={<QuestionsFive/>} />
        <Route exact path="/courses/101/done" element={<Coursedone/>} />
        <Route exact path="/courses/102/1" element={<Questions1/>} />
        <Route exact path="/courses/102/2" element={<QuestionsTwo1/>} />
        <Route exact path="/courses/102/3" element={<QuestionsThree1/>} />
        <Route exact path="/courses/102/4" element={<QuestionsFour1/>} />
        <Route exact path="/courses/102/5" element={<QuestionsFive1/>} />
        <Route exact path="/courses/102/6" element={<QuestionsSix1/>} />
        <Route exact path="/courses/102/done" element={<Coursedone1/>} />
        <Route exact path="/courses/103/1" element={<Questions2/>} />
        <Route exact path="/courses/103/2" element={<QuestionsTwo2/>} />
        <Route exact path="/courses/103/3" element={<QuestionsThree2/>} />
        <Route exact path="/courses/103/4" element={<QuestionsFour2/>} />
        <Route exact path="/courses/103/5" element={<QuestionsFive2/>} />
        <Route exact path="/courses/103/done" element={<Coursedone2/>} />
        <Route exact path="/courses/104/1" element={<Questions3/>} />
        <Route exact path="/courses/104/2" element={<QuestionsTwo3/>} />
        <Route exact path="/courses/104/3" element={<QuestionsThree3/>} />
        <Route exact path="/courses/104/4" element={<QuestionsFour3/>} />
        <Route exact path="/courses/104/5" element={<QuestionsFive3/>} />
        <Route exact path="/courses/104/done" element={<Coursedone3/>} />
        <Route exact path="/courses/105/1" element={<Questions4/>} />
        <Route exact path="/courses/105/2" element={<QuestionsTwo4/>} />
        <Route exact path="/courses/105/3" element={<QuestionsThree4/>} />
        <Route exact path="/courses/105/4" element={<QuestionsFour4/>} />
        <Route exact path="/courses/105/5" element={<QuestionsFive4/>} />
        <Route exact path="/courses/105/done" element={<Coursedone4/>} />
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
        <Route exact path="/blog/ipfs" element={<Ipfs/>} />
        <Route exact path="/blog/soroban" element={<soroban/>} />
        <Route exact path="/dashboard/settings" element={<Settings/>} />
        <Route exact path="/profile" element={<Profile/>} />
        <Route exact path="/post" element={<Post/>} />
        <Route exact path="/Course" element={<Cours/>} />
        <Route exact path="/terms" element={<TermsAndConditions/>} />
        <Route exact path="/certificates/:certificateNumber" element={<Certificat/>} /> 
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
