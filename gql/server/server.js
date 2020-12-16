const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http");
const path = require("path");
const mongoose = require("mongoose"); // From Nodejs Core, builds a separate http for the backend
const { makeExecutableSchema } = require("graphql-tools");
const { mergeTypeDefs, mergeResolvers } = require("@graphql-tools/merge");
const { loadFilesSync } = require("@graphql-tools/load-files");
require("dotenv").config(); // Able to use environment variable '.env' file

// Express server here
const app = express();

// db
const db = async () => {
  try {
    const success = await mongoose.connect(process.env.DATABASE_CLOUD, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log("DB connected");
  } catch (error) {
    console.log("DB connection ", error);
  }
};

// execute database connection
db();

// typeDefs
const typeDefs = mergeTypeDefs(
  loadFilesSync(path.join(__dirname, "./typeDefs"))
);

// resolvers
const resolvers = mergeResolvers(
  loadFilesSync(path.join(__dirname, "./resolvers"))
);

// graphql server
const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

// applyMiddleware method connects ApolloServer to a specific HTTP framework i.e, Express here.
apolloServer.applyMiddleware({
  app,
});

// server
const httpserver = http.createServer(app);

//  REST endpoint
app.get("/rest", function (req, res) {
  res.json({
    data: "You hit the rest endpoint!",
  });
});

// Port
app.listen(process.env.PORT, function () {
  console.log(
    `server is up and running at http://localhost:${process.env.PORT}`
  );
  console.log(
    `graphQL is up and running at http://localhost:${process.env.PORT}${apolloServer.graphqlPath}`
  );
});
