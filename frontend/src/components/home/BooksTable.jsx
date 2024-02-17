import React, { useState } from "react";
import SearchInput from "../SearchInput";
import ItemsPerPageDropdown from "../ItemsPerPageDropdown";
import DistrictDropdown from "../DistrictDropdown";
import TableRow from "../TableRow";
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
    const value = parseInt(event.target.value);
    setItemsPerPage(value);
    setCurrentPage(1); // Reset page number when items per page changes
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
      <MembersCount totalCount={books.length} />
      <div className="container md:container md:mx-auto">
        <div className="flex justify-around align-middle mt-4">
          <div>
            <h4>Search by name or author</h4>
            <SearchInput value={searchQuery} onChange={handleSearchChange} />
          </div>
          <div>
            <DistrictDropdown
              districts={districts}
              value={selectedDistrict}
              onChange={handleDistrictChange}
            />
          </div>
        </div>
        <h1
          className={`text-xl text-gray-500 m-2 py-2 ${
            selectedDistrict || searchQuery ? "" : "hidden"
          }`}
        >
          {selectedDistrict} has total of{" "}
          <span className="font-bold">{filteredItems.length}</span> memberships
        </h1>
        <h1 className="text-4xl m-2 py-2">Membership Detailed Table</h1>
        <table className="w-full border-separate border-spacing-2">
          <thead>
            <tr>
              <th className="w-10 border border-slate-600 rounded-md">No</th>
              <th className="w-10 border border-slate-600 rounded-md">Ref#</th>
              <th className="border border-slate-600 rounded-md">Name</th>
              <th className="border border-slate-600 rounded-md">
                Father Name
              </th>
              <th className="w-10 border border-slate-600 rounded-md">
                District
              </th>
              <th className="border border-slate-600 rounded-md max-md:hidden">
                Contact#
              </th>
              <th className="w-10">Operations</th>
            </tr>
          </thead>
          <tbody>
            {filteredItems.map((book, index) => (
              <TableRow
                key={book._id}
                book={book}
                index={index}
                generateQRCode={generateQRCode}
              />
            ))}
          </tbody>
        </table>
        <div className="flex justify-between items-center mt-4">
          <div>
            <ItemsPerPageDropdown
              value={itemsPerPage}
              onChange={handleItemsPerPageChange}
            />
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
      </div>
    </>
  );
};

export default BooksTable;
