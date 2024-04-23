import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";

const UserData = () => {
  const [userData, setUserData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        // Get JWT token from local storage
        const token = localStorage.getItem("token");

        // Decode the JWT token to extract user ID
        const decodedToken = jwtDecode(token);
        const userId = decodedToken.userId;

        // Fetch user data using the user ID
        const response = await axios.get(
          `http://localhost:8080/user/${userId}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        // Set user data and loading state
        setUserData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching user data:", error);
        setLoading(false);
      }
    };

    fetchUserData();
  }, []); // Run once on component mount

  return { userData, loading };
};

export default UserData;
