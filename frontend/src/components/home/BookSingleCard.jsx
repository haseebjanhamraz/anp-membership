import { Link } from "react-router-dom";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle, BiShow } from "react-icons/bi";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";
import { IoLanguage } from "react-icons/io5";

import { useState } from "react";
import BookModal from "./BookModal";

const BookSingleCard = ({ book }) => {
  const [showModal, setShowModal] = useState(false);
  return (
    <div
      key={book._id}
      className="content-center flex flex-col w-auto border-2 rounded-lg px-2 py-2 m-2 relative hover:shadow-xl"
    >
      <img
        // src={`http://localhost:8080/${book.imagePath}`}
        src={
          book.imagePath
            ? `http://localhost:8080/${book.imagePath}`
            : "placeholder.webp"
        }
        className="w-auto h-[300px] rounded-lg "
        alt=""
      />
      <div className=" bg-yellow-200 w-30 text-center rounded-lg m-4 p-2">
        <h1 className="text-red-600 px-2 text-2xl font-bold uppercase">
          {book.name}
        </h1>
      </div>
      <div className="flex justify-start items-center gap-x-2 ">
        <PiBookOpenTextLight className="text-red-300 text-2xl " />
        <h2 className="my-1 ">{book._id}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2 ">
        <BiUserCircle className="text-red-300 text-2xl " />
        <h2 className="my-1 ">{book.name}</h2>
      </div>
      <div className="flex justify-start items-center gap-x-2 ">
        <IoLanguage className="text-red-300 text-2xl " />
        <h2 className="my-1 ">{book.address}</h2>
      </div>
      <h2 className="text-white uppercase absoulte top-1 right-2 px-4 py-1 w-auto mt-3 bg-red-600 rounded-lg">
        Serial#: {book.serial}
      </h2>
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
    </div>
  );
};

export default BookSingleCard;
