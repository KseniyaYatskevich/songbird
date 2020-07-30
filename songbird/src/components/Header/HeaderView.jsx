import React from 'react';
import style from './HeaderView.module.scss';
import TopPanel from '../TopPanel';
import Cathegories from '../Cathegories';

function HeaderView() {
  return (
    <div className={style.container}>
      <TopPanel />
      <Cathegories />
    </div>
  );
}

export default HeaderView;