import React from "react";
import { useQuery } from "@apollo/client";
import { getAuthorQuery } from "./queries";

export const displayAuthor = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { loading, error, data } = useQuery(getAuthorQuery);

  if (error) return `Error! ${error}`;
  if (loading) {
    return <option disabled> Author Loading..</option>;
  } else {
    return data.authors.map((author, key) => (
      <option key={key} value={author.id}>
        {author.name}
      </option>
    ));
  }
};
