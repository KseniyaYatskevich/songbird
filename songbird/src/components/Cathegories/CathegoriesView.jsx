import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import style from './CathegoriesView.module.scss';
import { cathegories } from '../../helpers/constants';

const CathegoriesView = ({
  currentLevel,
}) => {
  const itemStyle = (index) => (classNames(style.item, (currentLevel === index) ? style.active : 'none'));
  return (
    <ul className={style.container}>
      {cathegories.map((item, index) => {
          return (
              <li className={itemStyle(index)} key={index}>{item}</li>
          )
      })}     
    </ul>
  );
}

export default CathegoriesView;