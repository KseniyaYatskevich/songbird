import React from 'react';
import PropTypes from 'prop-types';

import Main from '../Main';
import Header from '../Header';
import FinishPage from '../FinishPage';

const AppView = ({
  score,
  currentLevel,
  currentAnswer,
  handleClickNextLevel,
  question,
  isAnsweredQuestion,
  categoriesData,
  handleAnswerClick,
  prevAnswers,
  isEndGame,
  startNewGame,
}) => {
  if (!isAnsweredQuestion) {
    console.log((question) ? `Ответ: ${question.name}` : null);    
  }
  return (
    <div className="app__container">
      <Header
        score={score}
        currentLevel={currentLevel}
      />
    {!isEndGame
      ? <Main
          isAnsweredQuestion={isAnsweredQuestion}
          prevAnswers={prevAnswers}
          currentAnswer={currentAnswer}
          categoriesData={categoriesData}
          question={question}
          handleClickNextLevel={handleClickNextLevel}
          handleAnswerClick={handleAnswerClick}
        />
      : <FinishPage
        score={score}
        startNewGame={startNewGame}
        />}
    </div>
  );
};

AppView.propTypes = {
  isEndGame: PropTypes.bool,
  isAnsweredQuestion: PropTypes.bool,
  score: PropTypes.number,
  currentLevel: PropTypes.number,
  handleClickNextLevel: PropTypes.func,
  handleAnswerClick: PropTypes.func,
  question: PropTypes.object,
  categoriesData: PropTypes.array,
  currentAnswer: PropTypes.object,
  prevAnswers: PropTypes.array,
  startNewGame: PropTypes.func,
};

export default AppView;
