import React, { useReducer, createContext, useState } from "react";

// reducer updates the state
const firebaseReducer = (state, action) => {
  switch (action.type) {
    case "LOGGED_IN_USER":
      return { ...state, user: action.payload };
    default:
      return state;
  }
};

// State
const initialState = {
  user: null,
};

// Context
const AuthContext = createContext();

// context provider wraps the application
const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(firebaseReducer, initialState);

  const value = { state, dispatch };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// export the context as well as the provider
export { AuthContext, AuthProvider };
