import React from 'react';
import PropTypes from 'prop-types';
import style from './MainView.module.scss';

import Question from '../Question';
import AnswerPanel from '../AnswerPanel';
import Button from '../Button';

const MainView = ({
  handleClickNextLevel,
}) => {
  return (
    <div className={style.container}>
      <Question />   
      <AnswerPanel />
      <Button 
        handleClickNextLevel={handleClickNextLevel}
      />
    </div>
  );
}

MainView.propTypes = {
  handleClickNextLevel: PropTypes.func,
}



export default MainView;