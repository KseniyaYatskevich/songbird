import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import Main from './components/Main';
import Header from './components/Header';

const AppView = ({
  score,
  currentLevel,
  currentAnswer,
  handleClickNextLevel,
  question,
  isRightAnswer,
  cathegoriesData,
  handleAnswerClick,
}) => (
  <div className="App">
    <Header
      score={score}
      currentLevel={currentLevel}
    />
    <Main
      currentAnswer={currentAnswer}
      cathegoriesData={cathegoriesData}
      isRightAnswer={isRightAnswer}
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
  cathegoriesData: PropTypes.array,
  currentAnswer: PropTypes.object,
};

export default AppView;
