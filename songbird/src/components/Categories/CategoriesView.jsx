import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textContent } from '../../helpers/constants';

const CategoriesView = ({
  currentLevel,
}) => {
  const { categories } = textContent;
  const itemStyle = (index) => (classNames('categories__item', { categories__item_active: currentLevel === index }));
  return (
    <ul className="categories__container">
      {categories.map((item, index) => (
        <li className={itemStyle(index)} key={index}>{item}</li>
      ))}
    </ul>
  );
};

CategoriesView.propTypes = {
  currentLevel: PropTypes.number,
};

export default CategoriesView;
