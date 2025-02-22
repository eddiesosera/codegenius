import { React, useEffect } from 'react';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const loggedIn = localStorage.getItem("loggedIn")

    useEffect(() => {
    }, [loggedIn])

    return (
        loggedIn === "true" ? children : <Navigate to="/onboarding" />
        // children
    )
};

export default PrivateRoute;