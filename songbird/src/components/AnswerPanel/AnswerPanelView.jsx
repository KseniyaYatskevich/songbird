import React from 'react';
import PropTypes from 'prop-types';
import style from './AnswerPanelView.module.scss';

import AnswersList from '../AnswersList';
import AnswerInfo from '../AnswerInfo';

const AnswerPanelView = ({
  cathegoriesData,
  handleAnswerClick,
  currentAnswer,
}) => {
  return (
    <div className={style.container}>
      <AnswersList
        cathegoriesData={cathegoriesData}
        handleAnswerClick={handleAnswerClick}
      />
      <AnswerInfo
        currentAnswer={currentAnswer}
      />
    </div>
  );
};

AnswerPanelView.propTypes = {
  cathegoriesData: PropTypes.array,
  handleAnswerClick: PropTypes.func,
  currentAnswer: PropTypes.object,
};

export default AnswerPanelView;
