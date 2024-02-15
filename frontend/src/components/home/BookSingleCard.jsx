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
      className="content-center border-2 border-gray-500 rounded-lg px-4 py-2 m-4 relative hover:shadow-xl"
    >
      <img
        // src={`http://localhost:8080/${book.imagePath}`}
        src={
          book.imagePath
            ? `http://localhost:8080/${book.imagePath}`
            : "placeholder.webp"
        }
        height="100px"
        width="300px"
        alt=""
      />
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

      <h2 className="uppercase absoulte top-1 right-2 px-4 py-1 w-[200px] mt-3 bg-red-300 rounded-lg">
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
