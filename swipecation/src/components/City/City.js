import React, { useContext } from "react";
import { DataContext } from "../../context/data";

const City = () => {
  const { setProcessNo } = useContext(DataContext);
  const handleSelectCity = () => {
    setProcessNo(2);
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
