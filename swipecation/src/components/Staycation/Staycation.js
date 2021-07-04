import React, { useContext } from "react";
import { DataContext } from "../../context/data";

const Staycation = () => {
  const { handleChangeProcess } = useContext(DataContext);
  const handleSelectStaycation = () => {
    handleChangeProcess(3);
  };
  return (
    <>
      <div>
        <button onClick={handleSelectStaycation}>Submit Staycation</button>
      </div>
    </>
  );
};

export default Staycation;
