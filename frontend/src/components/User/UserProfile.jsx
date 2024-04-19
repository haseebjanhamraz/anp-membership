import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Nav from "../../components/partials/Nav";
import Logout from "../../utils/Logout";
import { IoLogOut } from "react-icons/io5";

const UserProfile = () => {
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

  return (
    <>
      <Nav />
      <div>
        <div className="h-screen w-full bg-gray-50 flex justify-center items-center">
          <div className="h-56 w-72 absolute flex justify-center items-center">
            <img
              className="object-cover h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt=""
            />
          </div>

          <div
            className="
    h-56
    mx-4
    w-5/6
    bg-blue-400
    rounded-3xl
    shadow-md
    sm:w-80 sm:mx-0
  "
          >
            <div className="h-1/2 w-full flex justify-between items-baseline px-3 py-5">
              <h1 className="text-white">Profile</h1>

              <a
                href="#"
                className="cursor-pointer"
                onClick={() => {
                  Logout();
                }}
              >
                <IoLogOut className="text-white text-2xl" />
              </a>
            </div>

            <div
              className="
      bg-white
      h-1/2
      w-full
      rounded-3xl
      flex flex-col
      justify-around
      items-center
    "
            >
              <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2"></div>
              {loading && <p>Loading...</p>}
              {userData && (
                <div className="w-full h-auto flex flex-col justify-center items-center">
                  <h1 className="text-gray-700 font-bold">
                    {userData.FullName}
                  </h1>
                  <h1 className="text-gray-500 text-sm">{userData.Username}</h1>
                  <h1 className="text-gray-500 text-sm">{userData.Email}</h1>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserProfile;
