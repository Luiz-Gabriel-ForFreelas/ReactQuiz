import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { QuizProvider } from './context/quiz.jsx' // Chama o provedor do contexto Quiz, nomeado como QuizProvider.

/* Cria o root no index.html chamando a tag App, que será a página inicial do projeto */
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QuizProvider> {/*Utiliza a tag QuizProvider para englobar o contexto em App, fazendo com que toda a aplicação possa acessar o contexto de QuizContext*/}
      <App/>
    </QuizProvider>
  </StrictMode>
)
