import React from 'react';
import PropTypes from 'prop-types';
import TopPanel from '../TopPanel';
import Categories from '../Categories';

const HeaderView = ({
  score,
  currentLevel,
}) => (
  <div className="header__container">
    <TopPanel
      score={score}
    />
    <Categories
      currentLevel={currentLevel}
    />
  </div>
);

HeaderView.propTypes = {
  score: PropTypes.number,
  currentLevel: PropTypes.number,
};

export default HeaderView;
