import { createContext, useContext, useEffect, useState } from "react";
import { getUserIdFromToken } from "utils/decodeToken";
import { isTokenValid } from "services/apiUtils";

export const UserDataContext = createContext();

export const useUserData = () => useContext(UserDataContext);

export const UserDataProvider = ({ children }) => {
  const [userId, setUserId] = useState("");
  const [loggedIn, setLoggedIn] = useState(false);
  const [notifications, setNotifications] = useState([]);
  const [token, setToken] = useState("");
  const [loading, setLoading] = useState(true);

  const isDevelopment = process.env.NODE_ENV === "development";
  const isProduction = process.env.NODE_ENV === "production";

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    console.log("Stored Token:", storedToken);
    if (storedToken) {
      setToken(storedToken);
    }
    const isLoggedIn = isTokenValid(storedToken);

    if (isLoggedIn) {
      console.log("User is logged in");
      setLoggedIn(true);
      const decodedUserId = getUserIdFromToken(storedToken);
      setUserId(decodedUserId);
    } else {
      setLoggedIn(false);
      setUserId("");
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    if (token) {
      const isLoggedIn = isTokenValid(token);
      setLoggedIn(isLoggedIn);
      if (isLoggedIn) {
        const decodedUserId = getUserIdFromToken(token);
        setUserId(decodedUserId);
      } else {
        setUserId("");
      }
    }
  }, [token]);

  return (
    <UserDataContext.Provider
      value={{
        userId,
        loggedIn,
        isDevelopment,
        isProduction,
        notifications,
        setNotifications,
        token,
        setToken,
        loading,
      }}
    >
      {children}
    </UserDataContext.Provider>
  );
};
