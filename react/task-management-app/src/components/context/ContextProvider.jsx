import { createContext, useContext, useState } from "react";

// Provisional Set Value for the User Authentication
const StateContext = createContext({
  user: null,
  // token: null,
  token: "123", // To bypass the login phase
  setUser: () => {},
  setToken: () => {},
});

export const ContextProvider = ({ children }) => {
  const [user, setUser] = useState({}); // Define User Information
  const [token, _setToken] = useState(localStorage.getItem("ACCESS_TOKEN")); // Store authentication token information

  const setToken = (token) => {
    _setToken(token);
    if (token) {
      localStorage.setItem("ACCESS_TOKEN", token);
    } else {
      localStorage.removeItem("ACCESS_TOKEN");
    }
  };

  return (
    <StateContext.Provider
      value={{
        user,
        token,
        setUser,
        setToken,
      }}
    >
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
