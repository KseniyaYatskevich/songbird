import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './AnswersListView.module.scss';

const AnswersListView = ({
  cathegoriesData,
  handleAnswerClick,
}) => (
  <ul className={style.container}>
    {cathegoriesData.map((item, index) => (
        <li className={style.answer} key={index} onClick={() => handleAnswerClick(item)}>{item.name}</li>
    ))}
  </ul>
);

AnswersListView.propTypes = {
  cathegoriesData: PropTypes.array,
  handleAnswerClick: PropTypes.func,
};

export default AnswersListView;
