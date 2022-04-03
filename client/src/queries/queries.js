import { gql } from "@apollo/client";

export const getBooksQuery = gql`
  query getBooks {
    books {
      name
      genre
      id
    }
  }
`;
export const getAuthorQuery = gql`
  query getAuthor {
    authors {
      name
      age
      id
    }
  }
`;
