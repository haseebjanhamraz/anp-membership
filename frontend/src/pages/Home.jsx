// pages/Home.jsx
import React, { useEffect, useState } from "react";
import axios from "axios";
import Spinner from "../components/Spinner";
import { Link, useNavigate } from "react-router-dom";
import { MdOutlineAddBox } from "react-icons/md";
import BooksCard from "../components/home/BooksCard";
import BooksTable from "../components/home/BooksTable";
import Nav from "../components/partials/Nav";
import AuthCheck from "../utils/AuthCheck";
import MembersCount from "../components/MembersCount";
import NoEntries from "../components/home/NoEntries";

const Home = () => {
  const [books, setBooks] = useState([]);
  const districts = [...new Set(books.map((book) => book.district))];
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("");

  // Get all books from the server.
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setBooks(res.data.data);
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
        <MembersCount totalCount={books.length} districts={districts} />
        {AuthCheck() ? (
          <div className="flex justify-start space-x-4 m-10 bg-gray-50 p-10 rounded-lg shadow-xl mx-5 items-center gap-x-4 ">
            <h4>View type:</h4>
            <button
              className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg "
              onClick={() => setShowType("table")}
            >
              Table
            </button>
            <button
              className="bg-sky-300 hover:bg-sky-600 px-4 py-1 rounded-lg "
              onClick={() => setShowType("card")}
            >
              Card
            </button>
            <div className="flex justify-between items-center ">
              <Link to="/books/create">
                <MdOutlineAddBox className="text-sky-800 text-4xl" />
              </Link>
            </div>
          </div>
        ) : null}
        {loading ? (
          <Spinner />
        ) : showType === "table" ? (
          <BooksTable books={books} />
        ) : (
          <div className="bg-gray-100 p-40 m-11 xsm:m-1 xsm:p-2 sm:p-1 sm:m-1 md:m-1 md:p-1 lg:p-4 lg:m-1 xl:p-5 xl:m-1 2xl:p-10">
            {books.length > 0 ? <BooksCard books={books} /> : <NoEntries />}
          </div>
        )}
      </div>
    </>
  );
};

export default Home;
