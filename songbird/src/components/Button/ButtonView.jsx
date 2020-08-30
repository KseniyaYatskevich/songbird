import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textContent } from '../../helpers/constants';

const ButtonView = ({
  handleClickNextLevel,
  isAnsweredQuestion,
}) => {
  const buttonStyle = classNames('button', { button_active: isAnsweredQuestion });
  const { buttons: { nextLevel } } = textContent;
  return (
    <button className={buttonStyle} onClick={() => handleClickNextLevel()}>{nextLevel}</button>
  );
};

ButtonView.propTypes = {
  handleClickNextLevel: PropTypes.func,
  isAnsweredQuestion: PropTypes.bool,
};

export default ButtonView;
