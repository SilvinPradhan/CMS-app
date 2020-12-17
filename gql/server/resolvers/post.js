const { gql } = require("apollo-server-express");
const { posts } = require("../temp");

// Queries
const totalPosts = () => posts.length;
const allPosts = () => posts;

// Mutation
const newPost = (_, args, context) => {
  console.log(args);
  // create a new post object
  const post = {
    id: posts.length + 1,
    title: args.input.title,
    description: args.input.description,
  };
  // push new post object to posts array
  posts.push(post);
  return post;
};

// resolvers : Objects
module.exports = {
  Query: {
    totalPosts,
    allPosts,
  },
  Mutation: {
    newPost,
  },
};

module.exports;
