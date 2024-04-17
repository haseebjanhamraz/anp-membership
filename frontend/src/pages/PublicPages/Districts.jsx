import { useEffect, useState } from "react";
import axios from "axios";
import Nav from "../../components/partials/Nav";
const Districts = () => {
  const [loading, setLoading] = useState(false);
  const [books, setBooks] = useState([]);
  const districts = [...new Set(books.map((book) => book.district))];
  useEffect(() => {
    setLoading(true);
    axios
      .get("http://localhost:8080/books")
      .then((res) => {
        setBooks(res.data.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <Nav />
      <ul>
        <li key={districts.id}>{districts}</li>
      </ul>
    </>
  );
};

export default Districts;
