import React from 'react';
import PropTypes from 'prop-types';

import Main from './components/Main';
import Header from './components/Header';

const AppView = ({
  score,
  currentLevel,
  currentAnswer,
  handleClickNextLevel,
  question,
  isRightAnswer,
  isFalseAnswer,
  cathegoriesData,
  handleAnswerClick,
  prevAnswers,
}) => (
  <div className="app__container">
    <Header
      score={score}
      currentLevel={currentLevel}
    />
    <Main
      prevAnswers={prevAnswers}
      currentAnswer={currentAnswer}
      cathegoriesData={cathegoriesData}
      isRightAnswer={isRightAnswer}
      isFalseAnswer={isFalseAnswer}
      question={question}
      handleClickNextLevel={handleClickNextLevel}
      handleAnswerClick={handleAnswerClick}
    />
  </div>
);

AppView.propTypes = {
  score: PropTypes.number,
  currentLevel: PropTypes.number,
  handleClickNextLevel: PropTypes.func,
  handleAnswerClick: PropTypes.func,
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
  isFalseAnswer: PropTypes.bool,
  cathegoriesData: PropTypes.array,
  currentAnswer: PropTypes.object,
  prevAnswers: PropTypes.array,
};

export default AppView;
