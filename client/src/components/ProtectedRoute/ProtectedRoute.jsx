import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { useAuth } from '../../utils/auth/';
//use from landing page to jobs

const ProtectedRoute = ({ onLoginFail = "/login", ...rest }) => {
    const { isLoggedIn } = useAuth();
    return isLoggedIn ? (
        <Route {...rest} />
    ) : (
        <Redirect to={onLoginFail} />
    );
};

export default ProtectedRoute;