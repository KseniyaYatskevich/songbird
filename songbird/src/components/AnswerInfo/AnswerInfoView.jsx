import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';

const AnswerInfoView = ({
  currentAnswer,
}) => (
  (Object.keys(currentAnswer).length !== 0)
    ? <div className="answer-info__container">
        <div className="answer-info__item">
          <img className="picture" src={currentAnswer.image} alt=""/>
          <ul className="answer-info__list">
            <li>
              <h3 className="answer-info__title">{currentAnswer.name}</h3>
            </li>
            <li>
              <p className="answer-info__subtitle">{currentAnswer.year}</p>
            </li>
            <li>
            <audio src={currentAnswer.audio} className="audio" controls></audio>
            </li>
          </ul>
        </div>
        <div className="answer-info__item">
          <p className="answer-info__text">{currentAnswer.description}</p>
        </div>
      </div>
    : <div className="answer-info__container">
        <p className="answer-info__text">Прослушайте мелодию</p>
      </div>
);

AnswerInfoView.propTypes = {
  currentAnswer: PropTypes.object,
};

export default AnswerInfoView;
