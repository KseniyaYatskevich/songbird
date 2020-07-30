import React from 'react';
import style from './CathegoriesView.module.scss';
import { cathegories } from '../../helpers/constants';

function CathegoriesView() {
  return (
    <ul className={style.container}>
      {cathegories.map((item, index) => {
          return (
              <li key={index}>{item}</li>
          )
      })}     
    </ul>
  );
}

export default CathegoriesView;