import React from "react";
import AnswerOption from "./AnswerOption";

const AnswerListDisplayVertical = (props) => {
  const { data } = props;

  return (
    <>
      <div>
        {data.options.map((option, idx) => {
          return (
            <div style={{ margin: ".75rem 0" }} key={idx}>
              <AnswerOption data={option} padding={"2rem 3rem"} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnswerListDisplayVertical;
