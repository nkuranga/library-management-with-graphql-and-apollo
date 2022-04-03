import { useQuery } from "@apollo/client";
import { getBooksQuery } from "../queries/queries";

const BookList = () => {
  const { loading, error, data } = useQuery(getBooksQuery);
  if (loading) return "Loading...";
  if (error) return `Error ${error.message}`;
  console.log(data);
  return (
    <>
      <ul>
        {data.books.map((book, key) => (
          <li key={key}>{book.name}</li>
        ))}
      </ul>
    </>
  );
};

export default BookList;
