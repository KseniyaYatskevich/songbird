import React from 'react';
import data from './helpers/movieData';
// import PropTypes from 'prop-types';
import AppView from './AppView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentLevel: 0,
      cathegoriesData: data[0],
      isRightAnswer: false,
      isFalseAnswer: false,
      currentAnswer: {},
      prevAnswers: [],
    };
  }

  handleClickNextLevel = async () => {
    let { currentLevel } = this.state;
    const { isRightAnswer } = this.state;
    if (isRightAnswer) {
      this.setState({
        currentLevel: currentLevel += 1,
        currentAnswer: {},
        isFalseAnswer: false,
        isRightAnswer: false,
        prevAnswers: [],
      });
      await this.getLevelData(currentLevel);
    }
  }

  getLevelData = (currentLevel = 0) => {
    const cathegoriesData = data[currentLevel];
    const question = this.getQuestion(cathegoriesData);
    this.setState({
      cathegoriesData,
      question,
    });
  }

  getQuestion = (cathegoriesData) => {
    const questionNumber = Math.floor(Math.random() * cathegoriesData.length);
    return cathegoriesData[questionNumber];
  }

  handleAnswerClick = (answer) => {
    const { question, prevAnswers, isRightAnswer } = this.state;
    prevAnswers.push(answer.id);
    if (!isRightAnswer) {
      this.setState({
        currentAnswer: answer,
        prevAnswers,
        isFalseAnswer: (answer.id !== question.id),
        isRightAnswer: (answer.id === question.id),
      });
    }
  }

  componentDidMount() {
    const { currentLevel } = this.state;
    this.getLevelData(currentLevel);
  }

  render() {
    const {
      score,
      currentLevel,
      cathegoriesData,
      question,
      isRightAnswer,
      isFalseAnswer,
      currentAnswer,
      prevAnswers,
    } = this.state;
    return (
      <AppView
        prevAnswers={prevAnswers}
        currentAnswer={currentAnswer}
        score={score}
        currentLevel={currentLevel}
        handleClickNextLevel={this.handleClickNextLevel}
        handleAnswerClick={this.handleAnswerClick}
        question={question}
        isRightAnswer={isRightAnswer}
        isFalseAnswer={isFalseAnswer}
        cathegoriesData={cathegoriesData}
      />
    );
  }
}

export default App;
