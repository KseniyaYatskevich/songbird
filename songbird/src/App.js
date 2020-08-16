import React from 'react';
import data from './helpers/movieData';
// import PropTypes from 'prop-types';
import AppView from './AppView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      errors: 0,
      score: 0,
      currentLevel: 0,
      categoriesData: data[0],
      currentAnswer: null,
      prevAnswers: [],
      isAnsweredQuestion: false,
      isEndGame: true,
    };
  }

  handleClickNextLevel = async () => {
    let { currentLevel } = this.state;
    const { isAnsweredQuestion } = this.state;
    if (!isAnsweredQuestion) return;
    if (isAnsweredQuestion && (currentLevel !== 5)) {
      currentLevel += 1;
      this.setState({
        errors: 0,
        currentLevel,
        currentAnswer: null,
        isAnsweredQuestion: false,
        prevAnswers: [],
      });
      this.getLevelData(currentLevel);
    } else {
      this.setState({
        isEndGame: true,
      });
    }
  }

  getLevelData = (currentLevel = 0) => {
    if (currentLevel !== 6) {
      const categoriesData = data[currentLevel];
      const question = this.getQuestion(categoriesData);
      this.setState({
        categoriesData,
        question,
      });
    }
  }

  getQuestion = (categoriesData) => {
    if (categoriesData) {
      const questionNumber = Math.floor(Math.random() * categoriesData.length);
      return categoriesData[questionNumber];
    }
  }

  handleAnswerClick = (answer) => {
    const {
      question,
      prevAnswers,
      score,
      errors,
    } = this.state;
    let { isAnsweredQuestion } = this.state;
    if (isAnsweredQuestion) {
      this.setState({
        currentAnswer: answer,
      });
    } else {
      const prevAnswersNew = [...prevAnswers, answer.id];
      isAnsweredQuestion = question.id === answer.id;
      this.setState({
        isAnsweredQuestion,
        currentAnswer: answer,
        prevAnswers: prevAnswersNew,
        score: isAnsweredQuestion ? (score + 5 - errors) : score,
        errors: !isAnsweredQuestion ? (errors + 1) : errors,
      });
    }
  }

  startNewGame = () => {
    this.setState({
      errors: 0,
      score: 0,
      currentLevel: 0,
      categoriesData: data[0],
      currentAnswer: null,
      prevAnswers: [],
      isAnsweredQuestion: false,
      isEndGame: false,
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
      categoriesData,
      question,
      currentAnswer,
      prevAnswers,
      isEndGame,
      isAnsweredQuestion,
    } = this.state;
    return (
      <AppView
        startNewGame={this.startNewGame}
        isAnsweredQuestion={isAnsweredQuestion}
        isEndGame={isEndGame}
        prevAnswers={prevAnswers}
        currentAnswer={currentAnswer}
        score={score}
        currentLevel={currentLevel}
        handleClickNextLevel={this.handleClickNextLevel}
        handleAnswerClick={this.handleAnswerClick}
        question={question}
        categoriesData={categoriesData}
      />
    );
  }
}

export default App;
