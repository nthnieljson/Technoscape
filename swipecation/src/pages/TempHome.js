import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { DataContext } from "../context/data";

import StaycationDetail from "../components/Staycation/StaycationDetail";

const TempHome = () => {
  const { setProcessNo } = useContext(DataContext);
  return (
    <>
      <div>
        <button onClick={() => setProcessNo(0)}>
          <Link to="/booking/create">Create Booking</Link>
        </button>

        <StaycationDetail />
      </div>
    </>
  );
};

export default TempHome;
