const express = require("express");
const { graphqlHTTP } = require("express-graphql");
const schema = require("./schema/schema");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");

app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://admin:12345@cluster0.6uily.mongodb.net/Graphql?retryWrites=true&w=majority";

mongoose.connect(CONNECTION_URL);
mongoose.connection.once("open", () => {
  console.log("Connected");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server Runing on${PORT}`);
});
