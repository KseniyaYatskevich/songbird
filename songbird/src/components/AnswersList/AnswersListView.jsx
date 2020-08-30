import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const AnswersListView = ({
  question,
  categoriesData,
  handleAnswerClick,
  prevAnswers,
}) => {
  const styleItem = (answerId) => classNames(
    'answer-list__item',
    { 'answer-list__item_false': prevAnswers.includes(answerId) && answerId !== question.id },
    { 'answer-list__item_right': prevAnswers.includes(answerId) && answerId === question.id },
  );
  return (
    <ul className="answer-list__container">
      {categoriesData.map((item, index) => (
        <li
          className={styleItem(item.id)}
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
  question: PropTypes.object,
  categoriesData: PropTypes.array,
  handleAnswerClick: PropTypes.func,
  prevAnswers: PropTypes.array,
};

export default AnswersListView;
