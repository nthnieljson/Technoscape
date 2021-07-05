import React, { useContext } from "react";
import { COLOR } from "../../constants/Style";
import { DataContext } from "../../context/data";

const AnswerOption = (props) => {
  const { data, padding } = props;
  const { handleChangeProcess, questionData, setQuestionData } =
    useContext(DataContext);
  const handleAnswer = () => {
    const { currentQuestionId, answers } = questionData;
    const newAnswers = [
      ...answers,
      {
        questionId: currentQuestionId,
        answerId: data.id,
      },
    ];

    setQuestionData({
      ...questionData,
      currentQuestionId: data.nextQuestionId,
      answers: newAnswers,
    });

    if (data.nextQuestionId === -1) {
      handleChangeProcess(1);
    }
  };
  return (
    <>
      <div>
        <button
          style={{
            fontWeight: "700",
            color: COLOR.DARK,
            fontSize: "1rem",
            width: "100%",
            padding: padding,
            border: `2px solid rgba(255, 255, 255, 0.6)`,
            borderRadius: "12px",
            backgroundColor: "rgba(255, 185, 219, 0.3)",
          }}
          onClick={handleAnswer}
        >
          {data.option}
        </button>
      </div>
      <style>
        {`
                
                `}
      </style>
    </>
  );
};

export default AnswerOption;
