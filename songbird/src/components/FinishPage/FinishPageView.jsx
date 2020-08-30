import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { textContent, maxScore } from '../../helpers/constants';

const FinishPageView = ({ score, startNewGame }) => {
  const winner = score === maxScore;
  const finishStyles = classNames('finish-page__container');
  const { buttons: { newGame } } = textContent;
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
      <p className="finish-page__text">Вы набрали <span>{score}</span> очков из <span>{maxScore}</span>.</p>
      <button className="button button_active" onClick={() => startNewGame()}>{newGame}</button>
    </div>
  );
};

FinishPageView.propTypes = {
  score: PropTypes.number,
  startNewGame: PropTypes.func,
};

export default FinishPageView;
