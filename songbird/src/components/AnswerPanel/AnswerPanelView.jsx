import React from 'react';
import PropTypes from 'prop-types';
import style from './AnswerPanelView.module.scss';

import AnswersList from '../AnswersList';
import AnswerInfo from '../AnswerInfo';

const AnswerPanelView = ({
  cathegoriesData,
  handleAnswerClick,
  currentAnswer,
  isRightAnswer,
  isFalseAnswer,
  question,
  prevAnswers,
}) => {
  return (
    <div className="answer-panel__container">
      <AnswersList
        isRightAnswer={isRightAnswer}
        isFalseAnswer={isFalseAnswer}
        cathegoriesData={cathegoriesData}
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
  isRightAnswer: PropTypes.bool,
  isFalseAnswer: PropTypes.bool,
  cathegoriesData: PropTypes.array,
  handleAnswerClick: PropTypes.func,
  currentAnswer: PropTypes.object,
  question: PropTypes.object,
  prevAnswers: PropTypes.array,
};

export default AnswerPanelView;
