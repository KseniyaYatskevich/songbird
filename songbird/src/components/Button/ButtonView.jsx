import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const ButtonView = ({
  handleClickNextLevel,
  isAnsweredQuestion,
}) => {
  const buttonStyle = classNames('button', { button_active: isAnsweredQuestion });
  return (
    <button className={buttonStyle} onClick={() => handleClickNextLevel()}>Next Level</button>
  );
};

ButtonView.propTypes = {
  handleClickNextLevel: PropTypes.func,
  isAnsweredQuestion: PropTypes.bool,
};

export default ButtonView;
