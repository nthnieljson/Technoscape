import React from "react";
import { QUESTION_DISPLAY_FORMATS } from "../../constants/Question";
import AnswerListDisplayVertical from "./AnswerListDisplayVertical";
import AnswerListDisplayWindow from "./AnswerListDisplayWindow";
import AnswerOption from "./AnswerOption";

const AnswerList = (props) => {
  const { data } = props;
  const getAnswerListDisplay = (displayFormat) => {
    switch (displayFormat) {
      case QUESTION_DISPLAY_FORMATS.WINDOW:
        return <AnswerListDisplayWindow data={data} />;
      case QUESTION_DISPLAY_FORMATS.VERTICAL:
        return <AnswerListDisplayVertical data={data} />;
    }
  };
  return (
    <>
      <div>{getAnswerListDisplay(data.display)}</div>
    </>
  );
};

export default AnswerList;
