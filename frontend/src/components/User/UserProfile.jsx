import React, { useState, useEffect } from "react";
import axios from "axios";
import { jwtDecode } from "jwt-decode";
import Nav from "../../components/partials/Nav";
import Logout from "../../utils/Logout";
import { IoLogOut } from "react-icons/io5";
import UserData from "./UserData";
import LastEntries from "./LastEntries";

const UserProfile = () => {
  const { userData, loading } = UserData();
  return (
    <>
      <Nav />
      <div>
        <div className="h-screen w-full bg-gray-50 flex justify-center items-center">
          <div className="h-56 w-72 mb-4 absolute flex justify-center items-center">
            <img
              className="object-cover h-20 w-20 rounded-full"
              src="https://images.unsplash.com/photo-1484608856193-968d2be4080e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2134&q=80"
              alt=""
            />
          </div>

          <div
            className="
              h-56 mx-4 w-5/6 bg-red-400 rounded-3xl shadow-md sm:w-80 sm:mx-0"
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

            <div className="bg-white h-1/2 mt-5 w-full rounded-3xl flex flex-col justify-around items-center">
              <div className="w-full h-1/2 flex justify-between items-center px-3 pt-2"></div>
              {loading && <p>Loading...</p>}
              {userData && (
                <div className="w-full h-auto flex flex-col justify-center items-center">
                  <h4 className="text-red-700 font-bold text-xl uppercase">
                    {userData.FullName}
                  </h4>
                  <div className="justify-start">
                    <div className="Entry">
                      <p className="text-gray-400 font-bold">
                        Email:
                        <span className="ml-4 font-normal text-red-400 text-sm">
                          {userData.Email}
                        </span>
                      </p>
                    </div>
                    <div className="Entry">
                      <p className="text-gray-400 font-bold">
                        Username:
                        <span className="ml-4 font-normal text-red-400 text-sm">
                          {userData.Username}
                        </span>
                      </p>
                    </div>
                    <div className="Entry">
                      <p className="text-gray-400 font-bold">
                        Total Entries:
                        <span className="ml-4 text-red-400 text-sm">
                          {userData.TotalEntries}
                        </span>
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
            <div className="bg-white h-full mt-5 w-full rounded-3xl flex flex-col justify-around items-center">
              <div className="w-full flex justify-between items-center px-3 pt-2"></div>
              {loading && <p>Loading...</p>}
              {userData && (
                <div className="w-full h-full flex flex-col justify-center items-center">
                  <br />
                  <h4 className="text-slate-400 text-xl uppercase">
                    Last Entries
                  </h4>
                  <br />
                  <ul>
                    {userData.Entries.map((entry, index) => (
                      <li key={index} className="text-gray-400 text-sm">
                        Created{" "}
                        <span className="font-bold text-red-700/50">
                          {entry.name}
                        </span>{" "}
                        at {entry.createdAt.slice(0, -14)}{" "}
                      </li>
                    ))}
                  </ul>
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
