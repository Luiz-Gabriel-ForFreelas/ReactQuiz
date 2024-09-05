import './App.css';

import { useEffect } from 'react';
import { useContext } from 'react';
import { QuizContext } from './context/quiz';

import Questions from './components/Questions';

import Welcome from '../src/components/Welcome';

import GameOver from '../src/components/GameOver';


// É a tag principal do projeto, responsável por chamar o component Welcome para dar inicio a aplicação.
function App() {

  const [quizState, dispatch] = useContext(QuizContext)

  useEffect(() => {
    dispatch({type: 'REORDER_QUESTIONS'});
  }, [])

  return (
    <div className='App'>
      <h1>Quiz de Programação</h1>
      {quizState.gameStage === 'Start' && <Welcome />}
      {quizState.gameStage === 'Playing' && <Questions />}
      {quizState.gameStage === 'End' && <GameOver />}
    </div>
  )
}

export default App
