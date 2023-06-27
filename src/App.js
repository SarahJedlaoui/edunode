import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { Provider, connect } from "react-redux";
import { BrowserRouter } from 'react-router-dom';
import { useEffect } from "react";
import axios from "axios";
import Footer from './components/Footer/Footer';
import { useLocation, useNavigate } from "react-router-dom";
import { store } from "./store";
import './App.css';
import { StyledChart } from './admin/src/components/chart';
import ScrollToTop from './admin/src/components/scroll-to-top';
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
//import SearchBox from "./components/SearchBox";
//import SearchResultsPage from "./components/SearchBox/SearchResultsPage/index"
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
import Questions5 from './components/Courses5/Questions';
import QuestionsTwo5 from './components/Courses5/QuestionsTwo';
import QuestionsThree5 from './components/Courses5/QuestionsThree';
import QuestionsFour5 from './components/Courses5/QuestionsFour';
import QuestionsFive5 from './components/Courses5/QuestionsFive';
import Questions6 from './components/Courses6/Questions';
import QuestionsTwo6 from './components/Courses6/QuestionsTwo';
import QuestionsThree6 from './components/Courses6/QuestionsThree';
import QuestionsFour6 from './components/Courses6/QuestionsFour';
import QuestionsFive6 from './components/Courses6/QuestionsFive';
import Questions7 from './components/Courses7/Questions';
import QuestionsTwo7 from './components/Courses7/QuestionsTwo';
import QuestionsThree7 from './components/Courses7/QuestionsThree';
import QuestionsFour7 from './components/Courses7/QuestionsFour';
import QuestionsFive7 from './components/Courses7/QuestionsFive';
import Questions8 from './components/Courses8/Questions';
import QuestionsTwo8 from './components/Courses8/QuestionsTwo';
import QuestionsThree8 from './components/Courses8/QuestionsThree';
import QuestionsFour8 from './components/Courses8/QuestionsFour';
import QuestionsFive8 from './components/Courses8/QuestionsFive';
import Questions9 from './components/Courses9/Questions';
import QuestionsTwo9 from './components/Courses9/QuestionsTwo';
import QuestionsThree9 from './components/Courses9/QuestionsThree';
import QuestionsFour9 from './components/Courses9/QuestionsFour';
import QuestionsFive9 from './components/Courses9/QuestionsFive';
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
import Intro5 from './components/Courses5/One/Intro';
import Introi5 from './components/Courses5/One/Introi';
import Introii5 from './components/Courses5/One/Introii';
import Introiii5 from './components/Courses5/One/Introiii';
import Introiiii5 from './components/Courses5/One/Introiiii';
import Introiiiii5 from './components/Courses5/One/Introiiiii';
import Intro6 from './components/Courses6/One/Intro';
import Intro7 from './components/Courses7/One/Intro';
import Intro8 from './components/Courses8/One/Intro';
import Intro9 from './components/Courses9/One/Intro';
import Coursedone from "./components/Courses/Coursedone"
import Coursedone1 from "./components/Courses1/Coursedone"
import Coursedone2 from "./components/Courses2/Coursedone"
import Coursedone3 from "./components/Courses3/Coursedone"
import Coursedone4 from "./components/Courses4/Coursedone"
import Coursedone5 from "./components/Courses5/Coursedone"
import Coursedone6 from "./components/Courses6/Coursedone"
import Coursedone7 from "./components/Courses7/Coursedone"
import Coursedone8 from "./components/Courses8/Coursedone"
import Coursedone9 from "./components/Courses9/Coursedone"
import Challengedone from "./components/Challenges/Challenge/Coursedone"
import Keybase from "./components/Blog/Articles/Keybase";
import Issue from "./components/Blog/Articles/Issue";
import Register from "./components/Register";
import Login from "./components/Login";
import Chat from "./components/Chat";
import History from "./components/Chat/history";
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
import PostgreSQL from "./components/Blog/Articles/Postgresql";
import Albedo from "./components/Blog/Articles/Albedo";
import Security from './components/Blog/Articles/Security';
import NFT from './components/Blog/Articles/NFT';
import Certificate from "./components/Certificate"
import Web3 from "./components/Blog/Articles/Web3"
import ChessBoardEditor from "./components/Chess/";
import Feed from "./components/Feed";
import Gcallback from "./components/Gcallback";
import Hyperledger from "./components/Hyperledger"
import HyperledgerCourses from "./components/Hyperledger/Courses"
import Challenge from "./components/Challenges/Challenge";
import ChallengeQ from './components/Challenges/Challenge/One/Intro.js';
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
import ValidCertificate from "./components/Teach/validCertificate";
import Certificat from "./components/Certificate/certificat";
import Notification from './components/Notifications/Notification';
import Search from "./components/Search/Search";
import Sep from './components/Sep/sep'
import AiPlugin from './components/AiPlugin'
import PostDetails from './components/Posts/postDetails'
import CourseDetails from './components/Courses/courseDetails'
import { useState } from 'react';
import Loginn from './components/authentif'
import Signup from "./components/signup";
import Glossary from "./components/Glossary";
import Badge from './components/Badges'
import EduNodeGuide from './components/teacher'
import StudentsPage from "./components/student"
import PasswordPage from './components/Login/password'
import ResetPasswordPage from './components/Login/reset_password'
import WithParams from './components/Profile/profile'
import CertificatePage from './components/Certificate/about'
import ChallengeDetails from './components/Challenges/Challenge/challengeDetails'
import Routerrr from './admin/routes'
import ThemeProvider from './admin/src/theme';
import DashboardLayout from './admin/src/layouts/dashboard';
import SimpleLayout from './admin/src/layouts/simple';
//
import BlogPage from './admin/src/pages/BlogPage';
import UserPage from './admin/src/pages/UserPage';
import LoginPage from './admin/src/pages/LoginPage';
import Page404 from './admin/src/pages/Page404';
import ProductsPage from './admin/src/pages/ProductsPage';
import DashboardAppPage from './admin/src/pages/DashboardAppPage';
import Messages from './components/Profile/messages'


const ThemedRoutes = () => (
  <ThemeProvider>
    <Routes>
     
      <Route path="/AdminDashboard" element={<DashboardLayout />}>
        <Route index element={<Navigate to="/AdminDashboard/app" />} />
        <Route path="app" element={<DashboardAppPage />} />
        <Route path="user" element={<UserPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="blog" element={<BlogPage />} />
      </Route>

      <Route exact path="/Adminlogin" element={<LoginPage />} />
      <Route path="*" element={<Navigate to="/404" replace />} />
    </Routes>
  </ThemeProvider>
);


function App(props) {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const shouldShowFooter = window.location.pathname !== '/certificates/:certificateNumber';
  return (
    <Provider store={store}>
      <Routes location={location} navigate={navigate}>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<AboutUs />} />
        <Route exact path="/account" element={<Account />} />
        <Route exact path="/resources" element={<Resources />} />
        <Route exact path="/community" element={<Community />} />
        <Route exact path="/community/project" element={<Project />} />
        <Route exact path="/milestones" element={<Milestones />} />
        <Route exact path="/courses" element={<Courses />} />
        <Route exact path="/courses/101/" element={<Intro />} />
        <Route exact path="/courses/102/" element={<Intro1 />} />
        <Route exact path="/courses/103/" element={<Intro2 />} />
        <Route exact path="/courses/104/" element={<Intro3 />} />
        <Route exact path="/courses/105/" element={<Intro4 />} />
        <Route exact path="/courses/106/" element={<Intro5 />} />
        <Route exact path="/courses/101/i" element={<Introi />} />
        <Route exact path="/courses/101/ii" element={<Introii />} />
        <Route exact path="/courses/101/iii" element={<Introiii />} />
        <Route exact path="/courses/101/iiii" element={<Introiiii />} />
        <Route exact path="/courses/101/iiiii" element={<Introiiiii />} />
        <Route exact path="/courses/102/i" element={<Introi1 />} />
        <Route exact path="/courses/102/ii" element={<Introii1 />} />
        <Route exact path="/courses/102/iii" element={<Introiii1 />} />
        <Route exact path="/courses/102/iiii" element={<Introiiii1 />} />
        <Route exact path="/courses/102/iiiii" element={<Introiiiii1 />} />
        <Route exact path="/courses/103/i" element={<Introi2 />} />
        <Route exact path="/courses/103/ii" element={<Introii2 />} />
        <Route exact path="/courses/103/iii" element={<Introiii2 />} />
        <Route exact path="/courses/103/iiii" element={<Introiiii2 />} />
        <Route exact path="/courses/103/iiiii" element={<Introiiiii2 />} />
        <Route exact path="/courses/104/i" element={<Introi3 />} />
        <Route exact path="/courses/104/ii" element={<Introii3 />} />
        <Route exact path="/courses/104/iii" element={<Introiii3 />} />
        <Route exact path="/courses/104/iiii" element={<Introiiii3 />} />
        <Route exact path="/courses/104/iiiii" element={<Introiiiii3 />} />
        <Route exact path="/courses/105/i" element={<Introi4 />} />
        <Route exact path="/courses/105/ii" element={<Introii4 />} />
        <Route exact path="/courses/105/iii" element={<Introiii4 />} />
        <Route exact path="/courses/105/iiii" element={<Introiiii4 />} />
        <Route exact path="/courses/105/iiiii" element={<Introiiiii4 />} />
        <Route exact path="/courses/106/i" element={<Introi5 />} />
        <Route exact path="/courses/106/ii" element={<Introii5 />} />
        <Route exact path="/courses/106/iii" element={<Introiii5 />} />
        <Route exact path="/courses/106/iiii" element={<Introiiii5 />} />
        <Route exact path="/courses/106/iiiii" element={<Introiiiii5 />} />
        <Route exact path="/courses/107" element={<Intro6 />} />
        <Route exact path="/courses/108" element={<Intro7 />} />
        <Route exact path="/courses/109" element={<Intro8 />} />
        <Route exact path="/courses/110" element={<Intro9 />} />
        <Route exact path="/courses/101/1" element={<Questions />} />
        <Route exact path="/courses/101/2" element={<QuestionsTwo />} />
        <Route exact path="/courses/101/3" element={<QuestionsThree />} />
        <Route exact path="/courses/101/4" element={<QuestionsFour />} />
        <Route exact path="/courses/101/5" element={<QuestionsFive />} />
        <Route exact path="/courses/101/done" element={<Coursedone />} />
        <Route exact path="/courses/102/1" element={<Questions1 />} />
        <Route exact path="/courses/102/2" element={<QuestionsTwo1 />} />
        <Route exact path="/courses/102/3" element={<QuestionsThree1 />} />
        <Route exact path="/courses/102/4" element={<QuestionsFour1 />} />
        <Route exact path="/courses/102/5" element={<QuestionsFive1 />} />
        <Route exact path="/courses/102/6" element={<QuestionsSix1 />} />
        <Route exact path="/courses/102/done" element={<Coursedone1 />} />
        <Route exact path="/courses/103/1" element={<Questions2 />} />
        <Route exact path="/courses/103/2" element={<QuestionsTwo2 />} />
        <Route exact path="/courses/103/3" element={<QuestionsThree2 />} />
        <Route exact path="/courses/103/4" element={<QuestionsFour2 />} />
        <Route exact path="/courses/103/5" element={<QuestionsFive2 />} />
        <Route exact path="/courses/103/done" element={<Coursedone2 />} />
        <Route exact path="/courses/104/1" element={<Questions3 />} />
        <Route exact path="/courses/104/2" element={<QuestionsTwo3 />} />
        <Route exact path="/courses/104/3" element={<QuestionsThree3 />} />
        <Route exact path="/courses/104/4" element={<QuestionsFour3 />} />
        <Route exact path="/courses/104/5" element={<QuestionsFive3 />} />
        <Route exact path="/courses/104/done" element={<Coursedone3 />} />
        <Route exact path="/courses/105/1" element={<Questions4 />} />
        <Route exact path="/courses/105/2" element={<QuestionsTwo4 />} />
        <Route exact path="/courses/105/3" element={<QuestionsThree4 />} />
        <Route exact path="/courses/105/4" element={<QuestionsFour4 />} />
        <Route exact path="/courses/105/5" element={<QuestionsFive4 />} />
        <Route exact path="/courses/105/done" element={<Coursedone4 />} />
        <Route exact path="/courses/106/1" element={<Questions5 />} />
        <Route exact path="/courses/106/2" element={<QuestionsTwo5 />} />
        <Route exact path="/courses/106/3" element={<QuestionsThree5 />} />
        <Route exact path="/courses/106/4" element={<QuestionsFour5 />} />
        <Route exact path="/courses/106/5" element={<QuestionsFive5 />} />
        <Route exact path="/courses/106/done" element={<Coursedone5 />} />
        <Route exact path="/courses/107/1" element={<Questions6 />} />
        <Route exact path="/courses/107/2" element={<QuestionsTwo6 />} />
        <Route exact path="/courses/107/3" element={<QuestionsThree6 />} />
        <Route exact path="/courses/107/4" element={<QuestionsFour6 />} />
        <Route exact path="/courses/107/5" element={<QuestionsFive6 />} />
        <Route exact path="/courses/107/done" element={<Coursedone6 />} />
        <Route exact path="/courses/108/1" element={<Questions7 />} />
        <Route exact path="/courses/108/2" element={<QuestionsTwo7 />} />
        <Route exact path="/courses/108/3" element={<QuestionsThree7 />} />
        <Route exact path="/courses/108/4" element={<QuestionsFour7 />} />
        <Route exact path="/courses/108/5" element={<QuestionsFive7 />} />
        <Route exact path="/courses/108/done" element={<Coursedone7 />} />
        <Route exact path="/courses/109/1" element={<Questions8 />} />
        <Route exact path="/courses/109/2" element={<QuestionsTwo8 />} />
        <Route exact path="/courses/109/3" element={<QuestionsThree8 />} />
        <Route exact path="/courses/109/4" element={<QuestionsFour8 />} />
        <Route exact path="/courses/109/5" element={<QuestionsFive8 />} />
        <Route exact path="/courses/109/done" element={<Coursedone8 />} />
        <Route exact path="/courses/110/1" element={<Questions9 />} />
        <Route exact path="/courses/110/2" element={<QuestionsTwo9 />} />
        <Route exact path="/courses/110/3" element={<QuestionsThree9 />} />
        <Route exact path="/courses/110/4" element={<QuestionsFour9 />} />
        <Route exact path="/courses/110/5" element={<QuestionsFive9 />} />
        <Route exact path="/courses/110/done" element={<Coursedone9 />} />
        <Route exact path="/blog" element={<Blog />} />
        <Route exact path="/blog/What-is-Keybase" element={<Keybase />} />
        <Route exact path="/blog/How-to-issue" element={<Issue />} />
        <Route exact path="/register" element={<Register />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/certificate" element={<Certificate />} />
        <Route exact path="/chat" element={<Chat />} />
        <Route exact path="/blog/Stellarnomics" element={<Stellarnomics />} />
        <Route exact path="/blog/minting-nfts" element={<NFT />} />
        <Route exact path="/blog/security-tools" element={<Security />} />
        <Route exact path="/blog/herramientas-de-seguridad" element={<Seguridad />} />
        <Route exact path="/blog/smart-contracts" element={<Contracts />} />
        <Route exact path="/blog/kelp" element={<Kelp />} />
        <Route exact path="/blog/postgresql" element={<PostgreSQL />} />

        <Route exact path="/blog/the-web3-revolution" element={<Web3 />} />
        <Route exact path="/blog/albedo" element={<Albedo />} />
        <Route exact path="/blog/automated-market-maker" element={<AMM />} />
        <Route exact path="/blog/learn-about-blockchain" element={<Blockchain />} />
        <Route exact path="/projects" element={<Projects />} />
        <Route exact path="/chess" element={<ChessBoardEditor />} />
        <Route exact path="/feed" element={<Feed />} />
        <Route exact path="/gcallback" element={<Gcallback />} />
        <Route exact path="/hyperledger" element={<Hyperledger />} />
        <Route exact path="/hyperledger/courses" element={<HyperledgerCourses />} />
        <Route exact path="/challenges" element={<Challenge />} />
        <Route exact path="/codeeditor" element={<CodeEditor />} />
        <Route exact path="/contactus" element={<ContactUs />} />
        <Route exact path="/loggedout" element={<Loggedout />} />
        <Route exact path="/membership" element={<Membership />} />
        <Route exact path="/membership/checkout" element={<Checkout />} />
        <Route exact path="/dashboard/newpost" element={<NewPost />} />
        <Route exact path="/privacy" element={<Privacy />} />
        <Route exact path="/submitpost" element={<SubmitPost />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/VerifyEmail" element={<VerifyEmail />} />
        <Route exact path="/blog/docker" element={<Docker />} />
        <Route exact path="/blog/ipfs" element={<Ipfs />} />
        <Route exact path="/blog/soroban" element={<soroban />} />
        <Route exact path="/dashboard/settings" element={<Settings />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route exact path="/post" element={<Post />} />
        <Route exact path="/notification" element={<Notification />} />
        <Route exact path="/Course" element={<Cours />} />
        <Route exact path="/terms" element={<TermsAndConditions />} />
        <Route exact path="/search" element={<Search />} />
        <Route exact path="/certificates/:certificateNumber" element={<Certificat />} />
        <Route exact path="/historyChat" element={<History />} />
        <Route exact path="/.well-known/stellar.toml" element={<Sep />} />
        <Route exact path="/.well-known/ai-plugin.json" element={<AiPlugin />} />
        <Route exact path="/postDetails/:_id" element={<PostDetails />} />
        <Route exact path="/courseDetails/:_id" element={<CourseDetails />} />
        <Route exact path="/profile/:id" element={<WithParams />} />
        <Route exact path="/validCertificate" element={<ValidCertificate />} />
        <Route exact path="/messages" element={<Messages />} />

        <Route
          exact
          path="/loginn"
          element={user ? <Navigate to="/" /> : <Loginn />}
        />
        <Route
          path="/signup"
          element={user ? <Navigate to="/" /> : <Signup />}
        />
        <Route exact path="/glossary" element={<Glossary />} />
        <Route exact path="/Badges" element={<Badge />} />
        <Route exact path="/challenges/101" element={<ChallengeQ />} />
        <Route exact path="/challenges/101/done" element={<Challengedone />} />
        <Route exact path="/for-teachers" element={<EduNodeGuide />} />
        <Route exact path="/for-students" element={<StudentsPage />} />
        <Route exact path="/forgot_password" element={<PasswordPage />} />
        <Route exact path="/reset-password" element={<ResetPasswordPage />} />
        <Route exact path="/about-certificates" element={<CertificatePage />} />
        <Route exact path="/challengeDetails/:_id" element={<ChallengeDetails />} />
        <Route path="/*" element={<ThemedRoutes />} />
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
