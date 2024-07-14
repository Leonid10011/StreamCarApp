import { jwtDecode } from "jwt-decode";
import axiosInstance from "./axiosInstance";

const handleRequest = async (method, endpoint, data = null) => {
  try {
    const res = await axiosInstance({ method, url: endpoint, data });
    console.log(`${method.toUpperCase()} API`, res.data);
    return res.data;
  } catch (err) {
    if (err.response.status === 403) throw new Error("Keine Berechtigung");
    if (err.response.status === 401)
      throw new Error("Authentifizierungsfehler");
    throw new Error(err.response.data.error.message.message);
  }
};

function isTokenValid(token) {
  if (!token) return false;

  try {
    const decoded = jwtDecode(token);
    const currentTime = Date.now() / 1000; // Current time in seconds
    return decoded.exp > currentTime;
  } catch (error) {
    return false;
  }
}

function removeLeadingNumberDot(str) {
  // Regular expression to match a number followed by a dot at the start of the string
  const regex = /^\d+\.\s*/;
  // Replace the matched pattern with an empty string
  return str.replace(regex, "");
}

export { handleRequest, isTokenValid, removeLeadingNumberDot };
