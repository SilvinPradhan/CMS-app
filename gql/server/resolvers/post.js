const { gql } = require("apollo-server-express");

const totalPosts = () => 42;
// resolvers : Objects
module.exports = {
  Query: {
    totalPosts,
  },
};

module.exports;
 