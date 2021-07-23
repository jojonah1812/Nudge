import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './utils/auth';
import LandingPage from './pages/LandingPage/LandingPage';
import UserProfile from './pages/UserProfile/UserProfile';
import JobBoardPage from './pages/JobBoardPage/JobBoardPage';
import JobPostsPage from './pages/JobPostsPage/JobPostsPage';
import JobDetailPage from './pages/JobDetailPage/JobDetailPage';
import UserProfileList from './pages/UserProfile/UserProfileList';
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
          <Route exact path="/post"  component={JobPostsPage} />
          <Route exact path="/jobs"  component={JobBoardPage} />
          <Route exact path="/user" component={UserProfile} />
          <Route exact path="/jobs/detail" component={JobDetailPage} />
          <Route exact path="/user/list" component={UserProfileList} />
  
                </Switch>
        <Footer/>
        </div> 
      </Router>
    </AuthProvider>
    
  )};


export default App;
