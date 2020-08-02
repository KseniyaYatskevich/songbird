import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './AnswersListView.module.scss';

const AnswersListView = ({
  currentAnswer,
  question,
  cathegoriesData,
  handleAnswerClick,
  isRightAnswer,
  isFalseAnswer,
  prevAnswers,
}) => {
  console.log(isRightAnswer, isFalseAnswer, prevAnswers, question)
  const styleItem = (item) => classNames(
    'answer-list__item',
    { 'answer-list__item_false': (isFalseAnswer || isRightAnswer) && (item.id !== question.id) && (Array.from(prevAnswers).includes(item.id)) },
    { 'answer-list__item_right': (isRightAnswer) && (currentAnswer.id === item.id) && (currentAnswer.id === question.id) },
  );
  return (
    <ul className="answer-list__container">
      {cathegoriesData.map((item, index) => (
          <li
            className={styleItem(item)}
            key={index}
            onClick={() => handleAnswerClick(item)}
          >
            <span></span>{item.name}
          </li>
      ))}
    </ul>
  );
};

AnswersListView.propTypes = {
  currentAnswer: PropTypes.object,
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
  isFalseAnswer: PropTypes.bool,
  cathegoriesData: PropTypes.array,
  handleAnswerClick: PropTypes.func,
  prevAnswers: PropTypes.array,
};

export default AnswersListView;
