import BookList from "./queries/BookList";
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import AddBook from "./components/addBooks";
import AddAuthor from "./components/addAuthor";
const client = new ApolloClient({
  uri: "http://localhost:5000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<BookList />}>
            Home
          </Route>
          <Route path="/addAuthor" element={<AddAuthor />}>
            Add Author
          </Route>
          <Route path="/addBook" element={<AddBook />}>
            Add Book
          </Route>
        </Routes>
      </BrowserRouter>
      <div>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
