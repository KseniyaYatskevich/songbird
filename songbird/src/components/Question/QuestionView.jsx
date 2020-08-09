import React from 'react';
import PropTypes from 'prop-types';

const QuestionView = ({
  question,
  isRightAnswer,
}) => {
  if (question) {
    if (isRightAnswer) {
      return (
        <div className="question__container">
          <img className="picture" src={question.image} alt=""/>
          <ul className="question__description">
            <li>
              <h3 className="question__text">{question.name}</h3>
            </li>
            <li>
              <audio src={question.audio} className="audio" controls></audio>
            </li>
          </ul>
        </div>
      );
    } return (
      <div className="question__container">
        <img className="picture" src="assets/img/sicretFilm.png" alt=""/>
        <ul className="question__description">
          <li>
            <h3 className="question__text">*****</h3>
          </li>
          <li>
            <audio src={question.audio} className="audio" controls></audio>
          </li>
        </ul>
      </div>
    );
  } return 'none';
};

QuestionView.propTypes = {
  question: PropTypes.object,
  isRightAnswer: PropTypes.bool,
};

export default QuestionView;
