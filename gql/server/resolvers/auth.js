const { gql } = require("apollo-server-express");

const me = () => "Silvin";

// resolvers : Objects
module.exports = {
  Query: {
    me,
  },
};
