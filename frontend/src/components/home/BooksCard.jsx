import BookSingleCard from "./BookSingleCard";
import MembersCount from "../MembersCount";
const BooksCard = ({ books }) => {
  return (
    <>
      <MembersCount totalCount={books.length} /> {}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
        {books.map((item) => (
          <BookSingleCard key={item._id} book={item} />
        ))}
      </div>
    </>
  );
};

export default BooksCard;
