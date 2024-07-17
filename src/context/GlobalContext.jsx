import React, { createContext, useState } from "react";

export const GlobalContext = createContext(null);
function GlobalState({ children }) {
  const [formData, setFormData] = useState({
    type: "income",
    amount: 0,
    description: "",
  });

  const [value, setValue] = useState("expense");
  const [totalExpense, setTotalExpense] = useState(0);
  const [totalIncome, setTotalIncome] = useState(0);
  const [allTransaction, setAllTransaction] = useState([]);

  const handleFormSubmit = (currentFormData) => {
    console.log(currentFormData);
  };

  return (
    <GlobalContext.Provider
      value={
        (formData,
        setFormData,
        value,
        setValue,
        totalIncome,
        setTotalIncome,
        totalExpense,
        setTotalExpense,
        allTransaction,
        setAllTransaction,
        handleFormSubmit)
      }
    >
      {children}
    </GlobalContext.Provider>
  );
}

export default GlobalState;
