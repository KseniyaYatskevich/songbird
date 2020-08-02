import React from 'react';
import PropTypes from 'prop-types';
// import classNames from 'classnames';
import style from './AnswerInfoView.module.scss';

const AnswerInfoView = ({
  currentAnswer,
}) => (
  (Object.keys(currentAnswer).length !== 0)
    ? <div className={style.container}>
        <h3>{currentAnswer.name}</h3>
        <img src={currentAnswer.image} alt=""/>
      </div>
    : <div className={style.container}>
        <p>Прослушайте мелодию</p>
      </div>
);

AnswerInfoView.propTypes = {
  currentAnswer: PropTypes.object,
};

export default AnswerInfoView;
