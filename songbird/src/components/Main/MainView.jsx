import React from 'react';
import PropTypes from 'prop-types';

import Question from '../Question';
import AnswerPanel from '../AnswerPanel';
import Button from '../Button';

const MainView = ({
  handleClickNextLevel,
  question,
  isRightAnswer,
  isFalseAnswer,
  cathegoriesData,
  handleAnswerClick,
  currentAnswer,
  prevAnswers,
}) => (
  <div>
    <Question
      question={question}
      isRightAnswer={isRightAnswer}
    />
    <AnswerPanel
      prevAnswers={prevAnswers}
      isRightAnswer={isRightAnswer}
      isFalseAnswer={isFalseAnswer}
      currentAnswer={currentAnswer}
      question={question}
      handleAnswerClick={handleAnswerClick}
      cathegoriesData={cathegoriesData}
    />
    <Button
      isRightAnswer={isRightAnswer}
      handleClickNextLevel={handleClickNextLevel}
    />
  </div>
);

MainView.propTypes = {
  handleClickNextLevel: PropTypes.func,
  handleAnswerClick: PropTypes.func,
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
  isFalseAnswer: PropTypes.bool,
  cathegoriesData: PropTypes.array,
  currentAnswer: PropTypes.object,
  prevAnswers: PropTypes.array,
};

export default MainView;
