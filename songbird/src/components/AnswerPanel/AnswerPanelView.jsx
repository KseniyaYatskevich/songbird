import React from 'react';
import PropTypes from 'prop-types';

import AnswersList from '../AnswersList';
import AnswerInfo from '../AnswerInfo';

const AnswerPanelView = ({
  categoriesData,
  handleAnswerClick,
  currentAnswer,
  question,
  prevAnswers,
  isAnsweredQuestion,
}) => {
  console.log(isAnsweredQuestion, 1)
  return (
    <div className="answer-panel__container">
      <AnswersList
        isAnsweredQuestion={isAnsweredQuestion}
        categoriesData={categoriesData}
        handleAnswerClick={handleAnswerClick}
        currentAnswer={currentAnswer}
        question={question}
        prevAnswers={prevAnswers}
      />
      <AnswerInfo
        currentAnswer={currentAnswer}
      />
    </div>
  );
};

AnswerPanelView.propTypes = {
  isAnsweredQuestion: PropTypes.bool,
  categoriesData: PropTypes.array,
  handleAnswerClick: PropTypes.func,
  currentAnswer: PropTypes.object,
  question: PropTypes.object,
  prevAnswers: PropTypes.array,
};

export default AnswerPanelView;
