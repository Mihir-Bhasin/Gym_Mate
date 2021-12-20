// data layer in construction

import React, { createContext, useContext, useReducer } from "react";


export const StateContext = createContext();

// Wrap app and providing the Data layer
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// Pull info from layer
export const useStateValue = () => useContext(StateContext);
