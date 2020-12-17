import React, { useState } from "react";
import ApolloClient, { gql } from "apollo-boost";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const App = () => {
  const [post, setPosts] = useState([]);
  client
    .query({
      query: gql`
        {
          allPosts {
            id
            title
            description
          }
        }
      `,
    })
    .then((result) => setPosts(result.data.allPosts));
  return (
    <>
      <div className="container">
        <div className="row p-5">
          {post.map((posts) => (
            <div className="col-md-4" key={posts.id}>
              <div className="card">
                <div className="card-body">
                  <div className="card-title">
                    <h4>{posts.title}</h4>
                  </div>
                  <p className="card-text">{posts.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default App;
