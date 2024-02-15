import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import BackButton from "../components/BackButton";
import Spinner from "../components/Spinner";
import Nav from "../components/partials/Nav";

const ShowBook = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`http://localhost:8080/books/${id}`)
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
          Member Details:{" "}
          <span className="shadow-xl m-2 p-3 rounded-md">{book.serial}</span>{" "}
        </h1>
        {loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4 w-50 justify-center items-center flex flex-row">
              <img
                src={`http://localhost:8080/${book.imagePath}`}
                alt="Image not loaded"
                className="w-[550px] rounded-xl"
              />
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500 ">Name</span>
              <span>{book.name}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500 ">Father Name</span>
              <span>{book.fatherName}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500 ">Address</span>
              <span>{book.address}</span>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ShowBook;
