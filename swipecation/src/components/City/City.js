import React, { useContext } from "react";
import { DataContext } from "../../context/data";

const City = () => {
  const { handleChangeProcess } = useContext(DataContext);
  const handleSelectCity = () => {
    handleChangeProcess(2);
  };
  return (
    <>
      <div>
        <button onClick={handleSelectCity}>Submit City</button>
      </div>
    </>
  );
};

export default City;
