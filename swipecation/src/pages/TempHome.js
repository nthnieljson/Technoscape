import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/data";

const TempHome = () => {
  const { setProcessNo } = useContext(DataContext);
  return (
    <>
      <div>
        <button onClick={() => setProcessNo(0)}>
          <Link to="/booking/create">Create Booking</Link>
        </button>
      </div>
    </>
  );
};

export default TempHome;
