import React, { useState, useRef } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import API from "../../utils/axios/API";
import './LandingPage.css';
import { signup, useAuth } from "../../utils/auth/";
//import Navbar from './components/Navbar';
//import Footer from './components/Footer';
//import Hero from './components/Hero';
import {
  AuthenticationContainer,
  AuthenticationForm,
} from "../../components/Authentication/";
{/*
import LoginForm from "./components/LoginForm";
import SignupForm from "./components/SignupForm";
*/}

// can insert code for signup and login - forms tether to state use useeffect and usestate use as template for landing page
const loginFields = [
  { name: "email", type: "text", placeholder: "email" },
  { name: "password", type: "password", placeholder: "password" },
];
const signUpFields = [
  { name: "name", type: "text", placeholder: "name" },
  { name: "email", type: "text", placeholder: "JohnSmith@gmail.com" },
  { name: "password1", type: "password", placeholder: "password" },
  { name: "phone", type: "text", placeholder: "phone" },
  { name: "city", type: "text", placeholder: "city" },
  { name: "zip", type: "text", placeholder: "zip code" },
  { name: "start date", type: "text", placeholder: "start date" },
  { name: "salary", type: "password", placeholder: "salary" },  
  { name: "job type", type: "text", placeholder: "ft/pt/contract" },
  { name: "experience", type: "text", placeholder: "entry/mid-level/senior" },
  { name: "tech education", type: "password",  placeholder: "school name" },
];

const LandingPage = () => {
  const [isLeft, setIsLeft] = useState(false);
  const [formData, setFormData] = useState();
  const [currentForm, setCurrentForm] = useState("LoginForm");
  const sliderRef = useRef();
  const topLayerRef = useRef();
  const { login, isPending, isLoggedIn, error } = useAuth();

  const handleChange = formObj => {
    setFormData({ ...formData, ...formObj });
  };

  const handleClick = e => {
    e.preventDefault();
    if (!isLeft) {
      setIsLeft(true);
      setFormData();
      setCurrentForm("Signup");
      sliderRef.current.style.marginLeft = "0";
      topLayerRef.current.style.marginLeft = "100%";
      loginFields.forEach(login => document.getElementById(login.name).value = "");
    }

    if (isLeft) {
      setIsLeft(false);
      setFormData();
      setCurrentForm("LoginForm");
      sliderRef.current.style.marginLeft = "50%";
      topLayerRef.current.style.marginLeft = "0";
      signUpFields.forEach(login => document.getElementById(login.name).value = "");
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    if(currentForm === "LoginForm") {
        login(formData);
    } else {
        signup(formData);
        const { username1, password1 } = formData;
        login({username: username1, password: password1});
    }
  };

  if(isLoggedIn) return <Redirect to="/" />;
  if(isPending) return <h1>Loading...</h1>;

  return (
    <>
      <div id='back'>
        <div className='backRight'></div>
        <div className='backLeft'></div>
      </div>
      <div id='slideBox' ref={sliderRef}>
        <div className='topLayer' ref={topLayerRef}>
          <AuthenticationContainer direction='right'>
            <AuthenticationForm
              formData={loginFields}
              title={"Login"}
              handleChange={handleChange}
              formState={formData}
            />
            <button onClick={handleClick}>Sign Up</button>
            <button onClick={handleSubmit}>Login</button>
          </AuthenticationContainer>
          <AuthenticationContainer direction='left'>
            <AuthenticationForm
              formData={signUpFields}
              title={"Sign Up"}
              handleChange={handleChange}
              formState={formData}
            />
            <button onClick={handleSubmit}>Sign Up</button>
            <button onClick={handleClick}>Login</button>
          </AuthenticationContainer>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
