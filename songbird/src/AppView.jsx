import React from 'react';
import PropTypes from 'prop-types';
import './App.scss';

import Main from './components/Main';
import Header from './components/Header';

const AppView = ({
  score,
  currentLevel,
  handleClickNextLevel,
}) => {
  console.log(score, 123)
  return (
    <div className="App">
      <Header 
        score={score}
        currentLevel={currentLevel}
      />
      <Main 
        handleClickNextLevel={handleClickNextLevel}
      />
    </div>
  );
}

AppView.propTypes = {
  score: PropTypes.number,
  currentLevel: PropTypes.number,
  handleClickNextLevel: PropTypes.func,
}

export default AppView;
