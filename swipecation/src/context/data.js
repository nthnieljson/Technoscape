import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [processNo, setProcessNo] = useState(0);
  const [questionData, setQuestionData] = useState({
    currentQuestionId: 0,
    answers: [],
  });

  return (
    <DataContext.Provider
      value={{
        processNo,
        setProcessNo,
        questionData,
        setQuestionData,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
