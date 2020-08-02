import React from 'react';
import PropTypes from 'prop-types';
import style from './HeaderView.module.scss';
import TopPanel from '../TopPanel';
import Cathegories from '../Cathegories';

const HeaderView = ({
  score,
  currentLevel,
}) => {
  return (
    <div className="header__container">
      <TopPanel
        score={score}
      />
      <Cathegories
        currentLevel={currentLevel}
      />
    </div>
  );
};

HeaderView.propTypes = {
  score: PropTypes.number,
  currentLevel: PropTypes.number,
}

export default HeaderView;