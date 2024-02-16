import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiOutlineEdit, AiOutlineQrcode } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";
import MembersCount from "../MembersCount";

const BooksTable = ({ books }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDistrict, setSelectedDistrict] = useState("");

  // Step 1: Define unique districts
  const districts = [...new Set(books.map((book) => book.district))];

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    setCurrentPage(1); // Reset page number when search query changes
  };

  const handleDistrictChange = (event) => {
    setSelectedDistrict(event.target.value);
    setCurrentPage(1); // Reset page number when district changes
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = books
    .filter((book) => !selectedDistrict || book.district === selectedDistrict)
    .slice(indexOfFirstItem, indexOfLastItem);

  const filteredItems = currentItems.filter((book) =>
    Object.values(book).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchQuery.toLowerCase())
    )
  );

  const totalPages = Math.ceil(filteredItems.length / itemsPerPage);

  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  const generateQRCode = (bookId) => {
    // Generate QR code URL using the book ID
    const newURL = `http://localhost:5173/books/details/${bookId}`;
    const qrCodeURL = `https://api.qrserver.com/v1/create-qr-code/?data=${newURL}&size=150x150`;

    // Open QR code in a new tab
    window.open(qrCodeURL);
  };

  return (
    <>
      <MembersCount totalCount={filteredItems.length} />
      <h1 className="text-4xl m-2 py-2">Membership Detailed Table</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
        />
      </div>
      {/* Step 2: Add dropdown for district filter */}
      <div className="mb-4">
        <select
          value={selectedDistrict}
          onChange={handleDistrictChange}
          className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
        >
          <option value="">All Districts</option>
          {districts.map((district) => (
            <option key={district} value={district}>
              {district}
            </option>
          ))}
        </select>
      </div>
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
              District
            </th>
            <th className="border border-slate-600 rounded-md">Operations</th>
          </tr>
        </thead>
        <tbody>
          {filteredItems.map((book, index) => (
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
                {book.district}
              </td>
              <td className="flex justify-center gap-x-4">
                <Link to={`/books/details/${book._id}`}>
                  <BsInfoCircle className="text-green-800 text-2xl" />
                </Link>
                <Link to={`/books/edit/${book._id}`}>
                  <AiOutlineEdit className="text-yellow-600 text-2xl" />
                </Link>
                <MdOutlineDelete className="text-red-600 text-2xl" />
                <AiOutlineQrcode
                  className="text-blue-600 text-2xl cursor-pointer"
                  onClick={() => generateQRCode(book._id)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="flex justify-between items-center mt-4">
        <div>
          <select
            value={itemsPerPage}
            onChange={handleItemsPerPageChange}
            className="border border-gray-300 rounded-md px-3 py-1 focus:outline-none focus:border-blue-500"
          >
            <option value={10}>10 per page</option>
            <option value={30}>30 per page</option>
            <option value={50}>50 per page</option>
          </select>
        </div>
        <div>
          <ul className="flex">
            {pageNumbers.map((number) => (
              <li key={number}>
                <button
                  className={`px-3 py-1 mx-1 border border-gray-300 rounded-md focus:outline-none ${
                    currentPage === number ? "bg-blue-500 text-white" : ""
                  }`}
                  onClick={() => handlePageChange(number)}
                >
                  {number}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};
export default BooksTable;
