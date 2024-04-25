import { Link } from "react-router-dom";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { FaCircleDot } from "react-icons/fa6";

import { IoQrCodeOutline } from "react-icons/io5";
import { FaLandmark } from "react-icons/fa";
import AuthCheck from "../../utils/AuthCheck";

import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="content-center justify-between space-y-2 flex flex-col w-auto border-2 rounded-lg px-2 py-2 m-2 relative hover:shadow-xl"
    >
      <img
        src={
          book.imagePath
            ? `http://localhost:8080/${book.imagePath}`
            : "placeholder.webp"
        }
        className="w-auto h-[150px] rounded-lg "
        alt=""
      />
      <h1 className="text-rose-700  text-2xl font-bold uppercase">
        {book.name}
      </h1>

      {book.status === "true" ? (
        <p className="text-gray-400 text-sm">
          Membership Status:{" "}
          <span className="w-fit inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">
            Active
          </span>
        </p>
      ) : (
        <p className="text-gray-400 text-sm">
          Membership Status:{" "}
          <span className="w-fit inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">
            Inactive
          </span>
        </p>
      )}

      <div className="flex justify-start items-center gap-x-2 ">
        <IoQrCodeOutline className="text-gray-500 text-2xl " />
        <h2 className="my-1 text-gray-500 text-sm">{book._id}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2 ">
        <FaLandmark className="text-gray-500 text-2xl " />
        <h2 className="my-1 font-bold text-gray-600">{book.district}</h2>
      </div>

      {AuthCheck() ? (
        <h2 className=" text-white uppercase absoulte top-1 right-2 px-4 py-1 w-auto mt-3 bg-red-600 rounded-lg">
          Serial# {book.serial}
        </h2>
      ) : null}

      {AuthCheck() ? (
        <>
          <div className="flex justify-between items-center gap-x-2 mt-4 p-4 ">
            <BiShow
              className="text-3xl text-blue-800 hover:text-black cursor-pointer "
              onClick={() => setShowModal(true)}
            />
            <Link to={`/books/details/${book._id}`}>
              <BsInfoCircle className="text-green-800 hover:text-black text-2xl " />
            </Link>
            <Link to={`/books/edit/${book._id}`}>
              <AiOutlineEdit className="text-yellow-600 text-2xl hover:text-black" />
            </Link>
            <Link to={`/books/delete/${book._id}`}>
              <MdOutlineDelete className="text-red-600 text-2xl hover:text-black" />
            </Link>
          </div>
          {showModal && (
            <BookModal book={book} onClose={() => setShowModal(false)} />
          )}
        </>
      ) : null}
    </div>
  );
};

export default BookSingleCard;
