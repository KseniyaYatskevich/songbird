import React from 'react';
import PropTypes from 'prop-types';
import style from './MainView.module.scss';

import Question from '../Question';
import AnswerPanel from '../AnswerPanel';
import Button from '../Button';

const MainView = ({
  handleClickNextLevel,
  question,
  isRightAnswer,
  cathegoriesData,
  handleAnswerClick,
  currentAnswer,
}) => (
  <div className={style.container}>
    <Question
      question={question}
      isRightAnswer={isRightAnswer}
    />
    <AnswerPanel
      currentAnswer={currentAnswer}
      handleAnswerClick={handleAnswerClick}
      cathegoriesData={cathegoriesData}
    />
    <Button
      handleClickNextLevel={handleClickNextLevel}
    />
  </div>
);

MainView.propTypes = {
  handleClickNextLevel: PropTypes.func,
  handleAnswerClick: PropTypes.func,
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
  cathegoriesData: PropTypes.array,
  currentAnswer: PropTypes.object,
};

export default MainView;
