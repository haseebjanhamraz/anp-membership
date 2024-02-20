// TableRow.jsx
import React from "react";

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
        {book.district}
      </td>
    </tr>
  );
};

export default TableRow;
