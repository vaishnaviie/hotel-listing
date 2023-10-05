import React, { createContext, useContext, useReducer } from "react";
import { Reducer } from "../reducer/Reducer";
import { initialState } from "../constant/Constant";

const Context = createContext();
export const useData = () => useContext(Context);

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initialState);

  return (
    <div>
      <Context.Provider value={{ state, dispatch }}>
        {children}
      </Context.Provider>
    </div>
  );
};

export default ContextProvider;
