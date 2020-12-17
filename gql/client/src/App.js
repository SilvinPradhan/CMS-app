import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
// Components

// Pages
import Home from "../../client/src/pages/home/home.components";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const App = () => {
  return (
    // Provide "client", pass the "client" as props below
    <ApolloProvider client={client}>
      <Home />
    </ApolloProvider>
  );
};

export default App;
