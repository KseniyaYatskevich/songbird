import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const FinishPageView = ({ score, startNewGame }) => {
  const winner = score === 30;
  const finishStyles = classNames('finish-page__container');
  return (
    <div className={finishStyles}>
      <h2 className="finish-page__title">Поздравляем!</h2>
      {winner
        ? <>
            <h3 className="finish-page__subtitle">Игра окончена! Вы победили!</h3>
            <img src="./assets/img/goldCup.png" alt="" className="finish-page__picture"/>
          </>
        : <h3 className="finish-page__subtitle">Игра окончена!</h3>
      }
      <p className="finish-page__text">Вы набрали <span>{score}</span> очков из <span>30</span>.</p>
      <button className="button button_active" onClick={() => startNewGame()}>Начать новую игру</button>
    </div>
  );
};

FinishPageView.propTypes = {
  score: PropTypes.number,
  startNewGame: PropTypes.func,
};

export default FinishPageView;
