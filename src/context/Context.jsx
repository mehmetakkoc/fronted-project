import {
  createContext,
  useEffect,
  useState,
  useContext,
  useReducer,
} from "react";
import { userStateChecker } from "../auth/firebase";
import { reducer, initialState } from "./reducer";

const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const updateContact = (data) => {
    dispatch({ type: "UPDATE_CONTACT", payload: data });
  };

  const addContact = (data) => {
    dispatch({ type: "ADD_CONTACT", payload: data });
  };

  const deleteContact = (id) => {
    dispatch({ type: "DELETE_CONTACT", payload: id });
  };

  const [currentUser, setCurrentUser] = useState();

  useEffect(() => {
    userStateChecker(setCurrentUser);
  }, []);

  console.log(currentUser);

  return (
    <AppContext.Provider
      value={{
        ...state,
        currentUser,
        updateContact,
        addContact,
        deleteContact,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
