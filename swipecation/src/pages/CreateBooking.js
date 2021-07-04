import React, { useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import City from "../components/City/City";
import Question from "../components/Question/Question";
import Staycation from "../components/Staycation/Staycation";
import { DataContext } from "../context/data";

const CreateBooking = () => {
  const { processNo } = useContext(DataContext);
  const getBookingProcessElement = () => {
    switch (processNo) {
      case 0:
        return <Question />;
      case 1:
        return <City />;
      case 2:
        return <Staycation />;
      case 3:
        return <Checkout />;
    }
  };
  return getBookingProcessElement();
};

export default CreateBooking;
