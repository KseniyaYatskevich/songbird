import React from 'react';
import PropTypes from 'prop-types';
import style from './TopPanelView.module.scss';

const  TopPanelView = ({
  score,
}) => {
  console.log(score, 4)
  return (
    <div className={style.container}>
      <h1>Songbird</h1>  
      <div>Score: {score}</div>  
    </div>
  );
}

TopPanelView.propTypes = {
  score: PropTypes.number,
}

export default TopPanelView;