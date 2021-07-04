import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [processNo, setProcessNo] = useState(-1);
  const [maxProcessNo, setMaxProcessNo] = useState(-1);
  const [questionData, setQuestionData] = useState({
    currentQuestionId: 0,
    answers: [],
  });

  const handleChangeProcess = (newProcessNo) => {
    setProcessNo(newProcessNo);
    setMaxProcessNo(Math.max(maxProcessNo, newProcessNo));
  };

  return (
    <DataContext.Provider
      value={{
        processNo,
        setProcessNo,
        maxProcessNo,
        setMaxProcessNo,
        questionData,
        setQuestionData,
        handleChangeProcess,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
