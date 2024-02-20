// TableRow.jsx
import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineQrcode } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineDelete } from "react-icons/md";

const TableRow = ({ book, index, generateQRCode }) => {
  return (
    <tr key={book._id} className="h-8">
      <td className="border border-slate-600 rounded-md text-center">
        {index + 1}
      </td>
      <td className="border border-slate-600 rounded-md text-center">
        {book.serial}
      </td>
      <td className="border border-slate-600 rounded-md text-center">
        {book.name}
      </td>
      <td className="border border-slate-600 rounded-md text-center">
        {book.fatherName}
      </td>
      <td className="border border-slate-600 rounded-md text-center">
        {book.nicNumber}
      </td>
      <td className="border border-slate-600 rounded-md text-center">
        {book.district}
      </td>
      <td className="border border-slate-600 rounded-md max-md:hidden text-center">
        {book.address}
      </td>
      <td className="border border-slate-600 rounded-md max-md:hidden text-center">
        {book.contactNumber}
      </td>
      <td className="flex justify-center gap-x-4">
        <Link to={`/books/details/${book._id}`}>
          <BsInfoCircle className="text-green-800 text-2xl" />
        </Link>
        <Link to={`/books/edit/${book._id}`}>
          <AiOutlineEdit className="text-yellow-600 text-2xl" />
        </Link>

        <Link to={`/books/delete/${book._id}`}>
          <MdOutlineDelete className="text-red-600 text-2xl" />
        </Link>
        <AiOutlineQrcode
          className="text-blue-600 text-2xl cursor-pointer"
          onClick={() => generateQRCode(book._id)}
        />
      </td>
    </tr>
  );
};

export default TableRow;
