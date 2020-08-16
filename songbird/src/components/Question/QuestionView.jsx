import React from 'react';
import PropTypes from 'prop-types';

const QuestionView = ({
  question,
  isAnsweredQuestion,
}) => {
  return (
    <div className="question__container">
      <img className="picture" src={isAnsweredQuestion ? question.image : 'assets/img/sicretFilm.png'} alt=""/>
      <ul className="question__description">
        <li>
          <h3 className="question__text">{isAnsweredQuestion ? question.name : '*****'}</h3>
        </li>
        <li>
          <audio src={question.audio} className="audio" controls></audio>
        </li>
      </ul>
    </div>
  );
};

QuestionView.propTypes = {
  question: PropTypes.object,
  isAnsweredQuestion: PropTypes.bool,
};

export default QuestionView;
