import React from 'react';
import PropTypes from 'prop-types';
import style from './QuestionView.module.scss';

const QuestionView = ({
  question,
  isRightAnswer,
}) => {
  if (question) {
    if (isRightAnswer) {
      return (
        <div className={style.container}>
          <img className={style.picture} src={question.image} alt=""/>
          <ul className={style.description}>
            <li>
              <h3 className={style.text}>{question.name}</h3>
            </li>
            <li>
              <audio src={question.audio} controls></audio>
            </li>
          </ul>
        </div>
      );
    } return (
      <div className={style.container}>
        <img className={style.picture} src="assets/img/sicretBird.jpg" alt=""/>
        <ul className={style.description}>
          <li>
            <h3 className={style.text}>*****</h3>
          </li>
          <li>
            <audio src={question.audio} controls></audio>
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
