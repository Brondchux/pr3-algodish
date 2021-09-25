const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const path = require("path");
const app = express();
const { typeDefs, resolvers } = require("./schemas");

const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use("/images", express.static(path.join(__dirname, "../client/images")));
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../client/build")));
}
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

app.listen(PORT, (err) => {
  console.log("Listening on port:", PORT);
});
