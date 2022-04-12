import { useState, useEffect } from "react";
import { useMutation, gql } from "@apollo/client";
// import { ADD_BOOK } from "../mutation/addBook";
import { displayAuthor } from "../queries/fecthAuthors";
const AddBooks = () => {
  const [book, setBook] = useState({
    name: "",
    genre: "",
    authorId: "",
  });

  //onChange Handle for inputs
  //count and validate inputs
const validateCharacters = (e) => {
    const countInitial = 100;
    //store value to states
    setInputs({ ...inputs, description: e.target.value });
    setCountCharacters(e.target.value.length);
    if (countCharacters >= countInitial) {
      return setErrMsg(true);
    } else {
      return setErrMsg(false);
    }
  };
  useEffect(() => {}, [countCharacters, inputs.description, errMsg]);
  // const onChangeHandler = (e) => {
  //   setBook({ ...book, [e.target.name]: [e.target.value] });
  // };

  //Mutation
  const ADD_BOOK = gql`
    mutation AddBook($name: String, $genre: String, $authorId: ID) {
      addBook(name: $name, genre: $genre, authorId: $authorId) {
        name
        genre
        authorId
      }
    }
  `;

  const [addBook, { loading, error, data }] = useMutation(ADD_BOOK);
  if (loading) return "Loading...!";
  if (error) return `Error: ${error}`;

  const submitHandle = (e) => {
    addBook({
      variables: {
        name: book.name,
        genre: book.genre,
        authorId: book.authorId,
      },
    });
    setBook({
      name: "",
      genre: "",
      authorId: "",
    });
    e.preventDefault();
  };

  return (
    <div className="container">
      <form id="addBook" onSubmit={submitHandle}>
        <label htmlFor="book-name">Book Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => setBook({ ...book, name: e.target.value })}
          autoComplete="off"
        />
        <label htmlFor="genre"> Genre:</label>
        <input
          type="text"
          id="genre"
          name="genre"
          onChange={(e) => setBook({ ...book, genre: e.target.value })}
          autoComplete="off"
        />
        <select
          id="authorId"
          name="authorId"
          onChange={(e) => setBook({ ...book, authorId: e.target.value })}
        >
          <option disabled>Select Author</option>
          {displayAuthor()}
        </select>
        <button type="submit">Add Book</button>
      </form>
    </div>
  );
};

export default AddBooks;
