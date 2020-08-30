import React from 'react';
import data from '../../helpers/movieData';
import AppView from './AppView';

import {
  soundSuccess,
  soundError,
  soundFinish,
  minQuestionScore,
  maxQuestionScore,
  textContent
} from '../../helpers/constants';

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
      isEndGame: false,
    };
  }

  handleClickNextLevel = async () => {
    let { currentLevel } = this.state;
    const { isAnsweredQuestion } = this.state;
    const maxLevel = textContent.categories.length;
    if (!isAnsweredQuestion) return;
    if (isAnsweredQuestion && (currentLevel !== maxLevel - 1)) {
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
      }, this.playAudio(soundFinish));
    }
  }

  getLevelData = (currentLevel = 0) => {
    const maxLevel = textContent.categories.length;
    if (currentLevel !== maxLevel) {
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
      isAnsweredQuestion ? this.playAudio(soundSuccess) : this.playAudio(soundError)
      this.setState({
        isAnsweredQuestion,
        currentAnswer: answer,
        prevAnswers: prevAnswersNew,
        score: isAnsweredQuestion ? (score + maxQuestionScore - errors) : score,
        errors: !isAnsweredQuestion ? (errors + minQuestionScore) : errors,
      });
    }
  }

  playAudio = (path) => {
    const audioElement = new Audio(path);
    audioElement.play();
  };

  startNewGame = () => {
    console.log(this.state)
    const { isEndGame } = this.state;
    if (isEndGame) {
      this.getLevelData();
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
