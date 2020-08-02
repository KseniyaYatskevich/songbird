import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { cathegories } from '../../helpers/constants';

const CathegoriesView = ({
  currentLevel,
}) => {
  const itemStyle = (index) => (classNames('cathegories__item', (currentLevel === index) ? 'cathegories__item_active' : 'none'));
  return (
    <ul className="cathegories__container">
      {cathegories.map((item, index) => (
        <li className={itemStyle(index)} key={index}>{item}</li>
      ))}
    </ul>
  );
};

CathegoriesView.propTypes = {
  currentLevel: PropTypes.number,
};

export default CathegoriesView;
