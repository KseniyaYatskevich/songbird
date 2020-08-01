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
}) => (
  <div className={style.container}>
    <Question
      question={question}
      isRightAnswer={isRightAnswer}
    />
    <AnswerPanel />
    <Button
      handleClickNextLevel={handleClickNextLevel}
    />
  </div>
);

MainView.propTypes = {
  handleClickNextLevel: PropTypes.func,
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
};

export default MainView;
