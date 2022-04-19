import React, { createContext, useState } from "react";

export const CardContext = createContext();

export const initialValues = {
  id: "",
  title: "",
  image: "",
  text: "",
  email: "",
  date: "",
};

const ContextProvider = ({ children }) => {
  const [addCard, setAddCard] = useState(initialValues);
  const [cards, setCards] = useState(addCard);
  console.log(setAddCard);

  return (
    <CardContext.Provider value={{ addCard, setAddCard, cards, setCards }}>
      {children}
    </CardContext.Provider>
  );
};
export default ContextProvider;
