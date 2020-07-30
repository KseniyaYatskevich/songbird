import React from 'react';
// import PropTypes from 'prop-types';
import AppView from './AppView.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      score: 0,
      currentLevel: 0,
    }
  }

  handleClickNextLevel = () => {
    let { currentLevel } = this.state;
    this.setState({
      currentLevel: currentLevel +=1,
    })
  }

  render() {
    const {
      score,
      currentLevel,
    } = this.state;
    return(
      <AppView 
        score={score}
        currentLevel={currentLevel}
        handleClickNextLevel={this.handleClickNextLevel}
      />
    );
  }
}

export default App;