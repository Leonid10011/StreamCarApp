import { useUserData } from 'context/useUserData';
import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { getUserIdFromToken } from 'utils/decodeToken';

const AuthenticatedRoute = ({ children }) => {
    const { loggedIn, token, loading } = useUserData();

    useEffect(() => {
        console.log("Logged In:", loggedIn);
        if (loggedIn) {
            const userId = getUserIdFromToken(token);
            console.log("UserID:", userId);
        }
    }, [token, loggedIn]);

    if (loading) {
        return <div>Loading...</div>; // Show a loading indicator while loading
    }

    if (!loggedIn) {
        console.log("Not logged in");
        return <Navigate to="/login" />;
    }

    console.log("Logged in");

    return children;
};

export default AuthenticatedRoute;
