import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import Main from './components/Main';
import Header from './components/Header';

const AppView = ({
  score,
  currentLevel,
  handleClickNextLevel,
  question,
  isRightAnswer,
}) => (
  <div className="App">
    <Header
      score={score}
      currentLevel={currentLevel}
    />
    <Main
      isRightAnswer={isRightAnswer}
      question={question}
      handleClickNextLevel={handleClickNextLevel}
    />
  </div>
);

AppView.propTypes = {
  score: PropTypes.number,
  currentLevel: PropTypes.number,
  handleClickNextLevel: PropTypes.func,
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
};

export default AppView;
