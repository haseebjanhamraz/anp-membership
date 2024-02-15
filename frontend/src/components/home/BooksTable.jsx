import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineQrcode } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import MembersCount from "../MembersCount";
import QRCode from "qrcode.react";

const BooksTable = ({ books }) => {
  const generateQRCode = (bookId) => {
    // Generate QR code URL using the book ID
    const newURL = `http://localhost:5173/books/details/${bookId}`;
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${newURL}&size=150x150`;

    // Open QR code in a new tab
    window.open(qrCodeURL);
  };

  return (
    <>
      <MembersCount totalCount={books.length} /> {}
      <h1 className="text-4xl m-2 py-2">Membership Detailed Table</h1>
      <table className="w-full border-separate border-spacing-2">
        <thead>
          <tr>
            <th className="border border-slate-600 rounded-md">No</th>
            <th className="border border-slate-600 rounded-md">Ref#</th>
            <th className="border border-slate-600 rounded-md">Name</th>
            <th className="border border-slate-600 rounded-md">Father Name</th>
            <th className="border border-slate-600 rounded-md">Email</th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Contact#
            </th>
            <th className="border border-slate-600 rounded-md max-md:hidden">
              Address
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {books.map((book, index) => (
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
                {book.email}
              </td>
              <td className="border border-slate-600 rounded-md max-md:hidden text-center">
                {book.contactNumber}
              </td>
              <td className="border border-slate-600 rounded-md max-md:hidden text-center">
                {book.address}
              </td>

              <td className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-green-800 text-2xl" />
                </Link>

                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-yellow-600 text-2xl" />
                </Link>

                <MdOutlineDelete className="text-red-600 text-2xl" />

                {/* QR Code Icon */}
                <AiOutlineQrcode
                  className="text-blue-600 text-2xl cursor-pointer"
                  onClick={() => generateQRCode(book._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksTable;
