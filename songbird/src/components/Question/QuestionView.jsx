import React from 'react';
import PropTypes from 'prop-types';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/src/styles.scss';

class QuestionView extends React.Component {
  constructor(props) {
    super(props);
    this.props = props;
    this.audioRef = React.createRef();
  }

  render() {
    const { isAnsweredQuestion, question } = this.props;
    if (isAnsweredQuestion) {
      this.audioRef.current.audio.current.pause();
    }
    return (
      <div className="question__container">
        <img className="picture" src={isAnsweredQuestion ? question.image : 'assets/img/sicretFilm.png'} alt=""/>
        <ul className="question__description">
          <li>
            <h3 className="question__text">{isAnsweredQuestion ? question.name : '*****'}</h3>
          </li>
          <li>
            <AudioPlayer
              src={question.audio}
              showSkipControls={false}
              showJumpControls={false}
              customAdditionalControls={[]}
              layout="horizontal-reverse"
              ref={this.audioRef}
            />
          </li>
        </ul>
      </div>
    );
  }
};

QuestionView.propTypes = {
  question: PropTypes.object,
  isAnsweredQuestion: PropTypes.bool,
};

export default QuestionView;
