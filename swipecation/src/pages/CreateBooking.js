import React, { useContext } from "react";
import Question from "../components/Question/Question";
import { DataContext } from "../context/data";

const CreateBooking = () => {
  const { processNo } = useContext(DataContext);
  const getBookingProcessElement = () => {
    switch (processNo) {
      case 0:
        return <Question />;
      case 1:
        return <h1>City</h1>;
    }
  };
  return getBookingProcessElement();
};

export default CreateBooking;
