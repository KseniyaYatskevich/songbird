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
}) => (
  <div className="answer-panel__container">
    <AnswersList
      categoriesData={categoriesData}
      handleAnswerClick={handleAnswerClick}
      question={question}
      prevAnswers={prevAnswers}
    />
    <AnswerInfo
      currentAnswer={currentAnswer}
    />
  </div>
);

AnswerPanelView.propTypes = {
  categoriesData: PropTypes.array,
  handleAnswerClick: PropTypes.func,
  currentAnswer: PropTypes.object,
  question: PropTypes.object,
  prevAnswers: PropTypes.array,
};

export default AnswerPanelView;
