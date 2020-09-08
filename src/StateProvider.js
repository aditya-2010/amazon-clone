// setup the data layer
// we need this to track the basket

import React, { createContext, useContext, useReducer } from "react";

// initialize data layer
export const StateContext = createContext();

// build a provider
export const StateProvider = ({ reducer, initialState, children }) => {
  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

// how to use it inside a component
export const useStateValue = () => useContext(StateContext);
