import React from 'react';
import PropTypes from 'prop-types';

import Question from '../Question';
import AnswerPanel from '../AnswerPanel';
import Button from '../Button';

const MainView = ({
  handleClickNextLevel,
  question,
  categoriesData,
  handleAnswerClick,
  currentAnswer,
  prevAnswers,
  isAnsweredQuestion,
}) => (
  <div>
    {question && <Question
      question={question}
      isAnsweredQuestion={isAnsweredQuestion}
    />}
    <AnswerPanel
      isAnsweredQuestion={isAnsweredQuestion}
      prevAnswers={prevAnswers}
      currentAnswer={currentAnswer}
      question={question}
      handleAnswerClick={handleAnswerClick}
      categoriesData={categoriesData}
    />
    <Button
      isAnsweredQuestion={isAnsweredQuestion}
      handleClickNextLevel={handleClickNextLevel}
    />
  </div>
);

MainView.propTypes = {
  isAnsweredQuestion: PropTypes.bool,
  handleClickNextLevel: PropTypes.func,
  handleAnswerClick: PropTypes.func,
  question: PropTypes.object,
  categoriesData: PropTypes.array,
  currentAnswer: PropTypes.object,
  prevAnswers: PropTypes.array,
};

export default MainView;
