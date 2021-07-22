import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './utils/auth';
import LandingPage from './pages/LandingPage/LandingPage';
//import UserProfile from './pages/UserProfile/UserProfile';
//import JobBoardPage from './pages/JobBoardPage/JobBoardPage';
//import JobPostsPage from './pages/JobPostsPage/JobPostsPage';
//import JobDetialPage from './pages/JobDetailPage/JobDetialPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div>
        <Navbar />
        <Hero />
        <Switch>
        {/*<ProtectedRoute exact path="/" onLoginFail="/login" component={JobBoardPage} />  create all routes as protected and use onLoginFail*/}
          <ProtectedRoute exact path="/" onLoginFail="/login" component={LandingPage} />
          <Route exact path="/login" component={LandingPage} />
          <Route exact path="/signup" component={LandingPage} />
          {/*  <ProtectedRoute exact path="/" onLoginFail="/signup" component={LandingPage} />
        <ProtectedRoute exact path="/" onLoginFail="/post" component={JobPostsPage} />
          <ProtectedRoute exact path="/" onLoginFail="/jobs" component={JobBoardPage} />
          <ProtectedRoute exact path="/" onLoginFail="/user" component={UserProfile} />
         <Route exact path="/jobs/detail" component={JobsDetailPage} />
  */}
                </Switch>
        <Footer/>
        </div> 
      </Router>
    </AuthProvider>
    
  )};


export default App;
