import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';
// import classNames from 'classnames';

const AnswerInfoView = ({
  currentAnswer,
}) => (
  <div className="answer-info__container">
    {
      currentAnswer
        ? <>
            <div className="answer-info__item">
              <img className="picture" src={currentAnswer.image} alt=""/>
              <ul className="answer-info__list">
                <li>
                  <h3 className="answer-info__title">{currentAnswer.name}</h3>
                </li>
                <li>
                  <p className="answer-info__subtitle">{currentAnswer.year}</p>
                </li>
                <li>
                  <AudioPlayer
                    src={currentAnswer.audio}
                    showSkipControls={false}
                    showJumpControls={false}
                    customAdditionalControls={[]}
                    layout="horizontal-reverse"
                    autoPlayAfterSrcChange={false}
                  />
                </li>
              </ul>
            </div>
            <div className="answer-info__item">
              <p className="answer-info__text">{currentAnswer.description}</p>
            </div>
          </>
        : <p className="answer-info__text">Прослушайте мелодию</p>
    }
    </div>
);

AnswerInfoView.propTypes = {
  currentAnswer: PropTypes.object,
};

export default AnswerInfoView;
