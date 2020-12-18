import React from "react";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import { Route, Switch } from "react-router-dom";
// Components
import Header from "../src/components/Header/Header";
// Pages
import Home from "../../client/src/pages/home/home.components";
import Login from "../src/pages/auth/Login";
import Register from "../src/pages/auth/Register";

const client = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT,
});

const App = () => {
  return (
    // Provide "client", pass the "client" as props below
    <ApolloProvider client={client}>
      <Header />
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/login" component={Login}></Route>
        <Route exact path="/register" component={Register}></Route>
      </Switch>
    </ApolloProvider>
  );
};

export default App;
