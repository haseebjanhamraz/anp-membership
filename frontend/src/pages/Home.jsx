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

const Home = () => {
  const [books, setBooks] = useState([]);
  const districts = [...new Set(books.map((book) => book.district))];
  const [loading, setLoading] = useState(false);
  const [showType, setShowType] = useState("card");

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

  // Get all books from the server.
  return (
    <>
      <Nav />
      <MembersCount totalCount={books.length} districts={districts} />
      <div className="p-4">
        {AuthCheck() ? (
          <div className="flex justify-end space-x-4 mx-5 items-center gap-x-4 ">
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
          <BooksCard books={books} />
        )}
        ,
      </div>
    </>
  );
};

export default Home;
