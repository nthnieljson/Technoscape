import React, { useContext } from "react";
import { QUESTION_DATA } from "../../constants/Question";
import { COLOR } from "../../constants/Style";
import { DataContext } from "../../context/data";
import { findById } from "../../utils/helper";
import AnswerList from "./AnswerList";

const Question = () => {
  const { questionData } = useContext(DataContext);
  const data = findById(QUESTION_DATA, questionData.currentQuestionId);

  return (
    <>
      <div>
        <div className="text-center">
          <p
            className="question-statement"
            style={{
              fontSize: "1rem",
              color: COLOR.DARK,
              fontWeight: "normal",
            }}
          >
            {data.question}
          </p>
        </div>
        <AnswerList data={data} />
      </div>
      <style>
        {`

                `}
      </style>
    </>
  );
};

export default Question;
