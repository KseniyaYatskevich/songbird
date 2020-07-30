import React from 'react';
import PropTypes from 'prop-types';
import style from './ButtonView.module.scss';

const ButtonView = ({
  handleClickNextLevel,
}) => {
  return(
    <button className={style.button} onClick={() => handleClickNextLevel()}>Next Level</button>
  )
}

ButtonView.propTypes = {
  handleClickNextLevel: PropTypes.func,
}

export default ButtonView;