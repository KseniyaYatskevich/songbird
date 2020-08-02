import React from 'react';
import data from './helpers/birdsData';
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
      currentAnswer: {},
    };
  }

  handleClickNextLevel = async () => {
    let { currentLevel } = this.state;
    this.setState({
      currentLevel: currentLevel += 1,
      currentAnswer: {},
    });
    await this.getLevelData(currentLevel);
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
    console.log(answer);
    this.setState({
      currentAnswer: answer,
    });
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
      currentAnswer,
    } = this.state;
    return (
      <AppView
        currentAnswer={currentAnswer}
        score={score}
        currentLevel={currentLevel}
        handleClickNextLevel={this.handleClickNextLevel}
        handleAnswerClick={this.handleAnswerClick}
        question={question}
        isRightAnswer={isRightAnswer}
        cathegoriesData={cathegoriesData}
      />
    );
  }
}

export default App;
