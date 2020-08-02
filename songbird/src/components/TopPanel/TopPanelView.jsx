import React from 'react';
import PropTypes from 'prop-types';
import style from './TopPanelView.module.scss';

const TopPanelView = ({
  score,
}) => {
  return (
    <div className="top-panel__container">
      <h1 className="logo">Song<span>bird</span></h1>
      <div className="score">Score: <span>{score}</span></div>
    </div>
  );
};

TopPanelView.propTypes = {
  score: PropTypes.number,
};

export default TopPanelView;
