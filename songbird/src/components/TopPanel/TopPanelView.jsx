import React from 'react';
import style from './TopPanelView.module.scss';

function TopPanelView() {
  return (
    <div className={style.container}>
      <h1>Songbird</h1>  
      <div>Score</div>  
    </div>
  );
}

export default TopPanelView;