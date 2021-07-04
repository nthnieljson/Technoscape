import React from "react";
import AnswerOption from "./AnswerOption";

const AnswerListDisplayWindow = (props) => {
  const { data } = props;

  return (
    <>
      <div className="row">
        {data.options.map((option, idx) => {
          return (
            <div style={{ margin: ".75rem 0" }} key={idx} className="col-6">
              <AnswerOption data={option} padding={"4rem 1rem"} />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AnswerListDisplayWindow;
