import { Link } from "react-router-dom";
import { AiOutlineEdit } from "react-icons/ai";
import { BsInfoCircle } from "react-icons/bs";
import { MdOutlineAddBox, MdOutlineDelete } from "react-icons/md";

const BooksTable = ({ books }) => {
  return (
    <>
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
              <td className="border border-slate-600 rounded-md max-md:hidden text-center">
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

                <Link to={`/books/delete/${book._id}`}>
                  <MdOutlineDelete className="text-red-600 text-2xl" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default BooksTable;
