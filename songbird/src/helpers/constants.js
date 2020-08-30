import soundError from '../assets/audio/error.mp3';
import soundSuccess from '../assets/audio/success.mp3';
import soundFinish from '../assets/audio/finish.mp3';

const textContent = {
  categories: ['Советское кино', 'Русское кино', 'Зарубежное кино', 'Мутьтфильмы', 'Сериалы', 'Мюзиклы'],
  task: 'Прослушайте мелодию. Выберите правильный ответ.',
  buttons: {
    nextLevel: 'Следующий вопрос',
    newGame: 'Начать новую игру',
  }
}

const maxScore = 30;
const minQuestionScore = 1;
const maxQuestionScore = 5;

export {
  soundError,
  soundSuccess,
  soundFinish,
  textContent,
  maxQuestionScore,
  minQuestionScore,
  maxScore,
};
