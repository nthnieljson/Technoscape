import React, { createContext, useState } from "react";

export const DataContext = createContext();

export const DataProvider = (props) => {
  const [processNo, setProcessNo] = useState(-1);
  const [maxProcessNo, setMaxProcessNo] = useState(-1);
  const [chosenDestination, setChosenDestination] = useState([]);
  const [questionData, setQuestionData] = useState({
    currentQuestionId: 0,
    answers: [],
  });

  const handleChangeProcess = (newProcessNo) => {
    setProcessNo(newProcessNo);
    setMaxProcessNo(Math.max(maxProcessNo, newProcessNo));
  };

  const handleAddChosenDestination = (newDestination) => {
    setChosenDestination(newDestination);
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
        chosenDestination,
        setChosenDestination,
        handleAddChosenDestination,
      }}
    >
      {props.children}
    </DataContext.Provider>
  );
};
