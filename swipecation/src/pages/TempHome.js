import React from "react";
import { Link } from "react-router-dom";

const TempHome = () => {
  return (
    <>
      <div>
        <Link to="/booking/create">Create Booking</Link>
      </div>
    </>
  );
};

export default TempHome;
