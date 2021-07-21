import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './utils/auth';
import LandingPage from './pages/LandingPage/LandingPage';
import UserProfile from './pages/UserProfile/UserProfile';
import JobBoardPage from './pages/JobBoardPage/JobBoardPage';
import JobPostsPage from './pages/JobPostsPage/JobPostsPage';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';

import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';

function App() {
  return (
    <AuthProvider>
      <Router>
      <div>
        <Nav />
        <Hero />
        <Switch>
          <ProtectedRoute exact path="/" onLoginFail="/login" component={LandingPage} />
          <Route exact path="/login" component={LandingPage} />
          <Route exact path="/signup" component={LandingPage} />
        {/*  <Route exact path="/jobsposts" component={JobBoardForm} />
          <Route exact path="/jobboard" component={JobBoardPage} />
          <Route exact path="/userprofile" component={UserProfile} />
      */}
        </Switch>
        <Footer/>
        </div> 
      </Router>
    </AuthProvider>


    // <div className="App">
    //   {/* <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header> */}

    // <Login />
    // </div>
  );
}

export default App;
