const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const http = require("http"); // From Nodejs Core, builds a separate http for the backend

require("dotenv").config(); // Able to use environment variable '.env' file

// Express server here
const app = express();

// types: Query/Mutation/Subscription
// Int! indicates that it can not be null but integer
const typeDefs = `
    type Query {
        totalPosts: Int!
    }
`;
// resolvers : Objects
const resolvers = {
  Query: {
    totalPosts: () => 42,
  },
};

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
