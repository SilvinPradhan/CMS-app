const { ApolloError, ApolloServer } = require("apollo-server");
require("dotenv").config();

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

// Port
apolloServer.listen(process.env.PORT, function () {
  console.log(
    `server is up and running at http://localhost:${process.env.PORT}`
  );
});
