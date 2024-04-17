import { useState } from "react";
import BookSingleCard from "./BookSingleCard";

const BooksCard = ({ books }) => {
  const [displayCount, setDisplayCount] = useState(12); // State to track the number of items to display

  const handleShowMore = () => {
    setDisplayCount(displayCount + 12); // Incrementally increase the number of items to display
  };

  return (
    <>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-5">
        {books.slice(0, displayCount).map(
          (
            item // Use slice to limit the displayed items based on the displayCount state
          ) => (
            <BookSingleCard key={item._id} book={item} />
          )
        )}
      </div>
      {books.length > displayCount && ( // Render the "Show More" button if there are more items to display
        <div className="flex justify-center mt-4">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={handleShowMore}
          >
            Show More
          </button>
        </div>
      )}
    </>
  );
};

export default BooksCard;
