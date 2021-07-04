import React, { useContext } from "react";
import { DataContext } from "../../context/data";

const Staycation = () => {
  const { setProcessNo } = useContext(DataContext);
  const handleSelectStaycation = () => {
    setProcessNo(3);
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
