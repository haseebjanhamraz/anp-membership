// pages/ShowBook.jsx

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import Nav from "../components/partials/Nav";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/books/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`, // Include the token in the request headers
        },
      })
      .then((res) => {
        setBook(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Nav />
      <div className="p-4">
        <BackButton />
        <h1 className="text-3xl my-4 ">
          Member ID:{" "}
          <span className="shadow-xl m-2 p-3 rounded-md">{book._id}</span>{" "}
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-grow">
            <div className="flex flex-col space-y-2 border-2 shadow-xl rounded-xl w-fit p-4">
              <div className="my-4 w-50 justify-center items-center flex flex-row">
                <img
                  src={`http://localhost:8080/${book.imagePath}`}
                  alt="Image not loaded"
                  className="w-[350px] rounded-xl"
                />
              </div>
              <div className="flex justify-center space-x-3">
                <span className="inline-flex items-center rounded-md bg-yellow-50 px-2 py-1 text-lg font-medium text-yellow-800 ring-1 ring-inset ring-yellow-600/20">
                  Serial# {book.serial}
                </span>

                <span className="inline-flex items-center rounded-md bg-indigo-50 px-2 py-1 text-lg font-medium text-indigo-700 ring-1 ring-inset ring-indigo-600/20">
                  {book.district}
                </span>
              </div>
              <div className="border-2 border-gray-300 border-dotted rounded-sm px-2 divide-solid">
                <span className="text-gray-500 text-xl mr-4 text-grey-500">
                  Name
                </span>
                <span className="text-xl uppercase font-bold">{book.name}</span>
              </div>
              <div className="border-2 border-gray-300 border-dotted rounded-sm px-2 divide-solid">
                <span className="text-gray-500 text-xl mr-4 text-grey-500">
                  Father Name
                </span>
                <span className="text-xl uppercase font-bold">
                  {book.fatherName}
                </span>
              </div>
              <div className="border-2 border-gray-300 border-dotted rounded-sm px-2 divide-solid">
                <span className="text-gray-500 text-xl mr-4 text-grey-500">
                  NIC#
                </span>
                <span className="text-xl uppercase font-bold">
                  {book.nicNumber}
                </span>
              </div>
              <div className="flex rounded-sm px-2">
                <span className="text-gray-500 text-xl mr-4 text-grey-500">
                  <FaPhoneAlt />
                </span>
                <span className="text-xl font-bold">{book.contactNumber}</span>
              </div>
              <div className="flex rounded-sm px-2">
                <span className="text-gray-500 text-xl mr-4 text-grey-500">
                  <FaRegEnvelope />
                </span>
                <span className="text-xl font-bold">{book.email}</span>
              </div>
              <div className="flex rounded-sm px-2">
                <span className="text-gray-500 text-xl mr-4 text-grey-500">
                  <FaLocationDot />
                </span>
                <span className="text-xl font-bold">{book.address}</span>
              </div>
            </div>
            <div className="flex flex-2 p-8">
              <div className="italic text-gray-500">
                <h3 className="text-lg">Entry Details</h3>
                <p>
                  Created By:{" "}
                  <span className="text-black font-bold">{book.createdBy}</span>{" "}
                </p>
                <p>Created At:{book.createdAt}</p>
                <p>Updated At:{book.updatedAt}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowBook;
