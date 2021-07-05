import React, { useContext } from "react";
import Checkout from "../components/Checkout/Checkout";
import City from "../components/City/City";
import Question from "../components/Question/Question";
import Staycation from "../components/Staycation/Staycation";
import { DataContext } from "../context/data";
import { COLOR } from "../constants/Style";

const CreateBooking = () => {
  const { processNo, maxProcessNo, setProcessNo } = useContext(DataContext);
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

  const handlePrev = () => {
    if (processNo !== 1) {
      setProcessNo(processNo - 1);
    } else {
      console.log("Are you sure ?");
    }
  };

  const handleNext = () => {
    setProcessNo(processNo + 1);
  };

  const getColorNextButton = () => {
    return processNo === maxProcessNo ? "#888888" : COLOR.TERTIARY;
  };
  return (
    <>
      <div>
        <div>
          {/* {processNo > 0 ? (
            <div>
              <div className="d-flex justify-content-between">
                <button
                  className="nav-button"
                  style={{
                    color: COLOR.TERTIARY,
                  }}
                  onClick={handlePrev}
                >
                  Prev
                </button>
                <button
                  className="nav-button"
                  style={{
                    color: getColorNextButton(),
                  }}
                  disabled={processNo === maxProcessNo}
                  onClick={handleNext}
                >
                  Next
                </button>
              </div>
              <Stepper
                steps={[
                  { title: "City" },
                  { title: "Staycation" },
                  { title: "Checkout" },
                ]}
                activeStep={processNo - 1}
                completeBarColor={COLOR.TERTIARY}
                defaultBorderColor={COLOR.TERTIARY}
                activeBorderColor={COLOR.TERTIARY}
                completeBorderColor={COLOR.TERTIARY}
                circleFontColor={COLOR.TERTIARY}
                activeColor={COLOR.PRIMARY}
                completeColor={COLOR.PRIMARY}
                completeTitleColor={COLOR.TERTIARY}
                activeTitleColor={COLOR.DARK}
                defaultTitleColor={COLOR.TERTIARY}
              />
            </div>
          ) : (
            ""
          )} */}
        </div>
        {getBookingProcessElement()}
      </div>
      <style>
        {`
            .nav-button {
                font-weight: 700;
                font-size: 1rem;
            }
          `}
      </style>
    </>
  );
};

export default CreateBooking;
