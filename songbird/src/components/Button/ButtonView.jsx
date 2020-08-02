import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonView = ({
  handleClickNextLevel,
  isRightAnswer,
}) => {
  const buttonStyle = classNames('button', { button_active: isRightAnswer });
  return (
    <button className={buttonStyle} onClick={() => handleClickNextLevel()}>Next Level</button>
  );
};

ButtonView.propTypes = {
  handleClickNextLevel: PropTypes.func,
  isRightAnswer: PropTypes.bool,
};

export default ButtonView;
