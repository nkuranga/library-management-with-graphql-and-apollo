import { gql } from "@apollo/client";

export const ADD_BOOK = gql`
  mutation AddBook($name: string, $genre: string, $authorId: string) {
    addBook(data: { name: $name, genre: $genre, authorId: $authorId }) {
      name
      genre
      authorId
    }
  }
`;
