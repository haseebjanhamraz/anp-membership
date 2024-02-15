import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";
import { BiBarcodeReader } from "react-icons/bi";
import { MdOutlinePublishedWithChanges } from "react-icons/md";
import { IoIosPaper } from "react-icons/io";
import { FaBarcode } from "react-icons/fa";
import { IoLanguage } from "react-icons/io5";

const BookModal = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(event) => event.stopPropagation()}
        className="w-[600px] max-w-full h-[800px] bg-white rounded-xl p-4 flex flex-col relative "
      >
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 cursor-pointer "
          onClick={onClose}
        />
        <img
          src={`http://localhost:8080/${book.imagePath}`}
          alt={book.name}
          className="w-auto h-[500px]"
        />
        <h1 className="text-3xl mt-3 mb-1 font-bold text-bold  text-red-400">
          {book.name} s/o {book.fatherName}
        </h1>
        <h2 className="w-fit px-4 py-1 bg-red-300 rounded-lg">
          Serial# {book.serial}
        </h2>
        <div className="flex justify-start items-center gap-x-2 ">
          <BiUserCircle className="text-red-300 text-2xl " />
          <h2 className="my-1 ">{book.nicNumber}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 ">
          <IoLanguage className="text-red-300 text-2xl " />
          <h2 className="my-1 ">{book.contactNumber}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 ">
          <IoIosPaper className="text-red-300 text-2xl " />
          <h2 className="my-1 ">{book.email}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 ">
          <FaBarcode className="text-red-300 text-2xl " />
          <h2 className="my-1 ">{book._id}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2 ">
          <MdOutlinePublishedWithChanges className="text-red-300 text-2xl " />
          <h2 className="my-1 ">{book.address}</h2>
        </div>
      </div>
    </div>
  );
};

export default BookModal;
