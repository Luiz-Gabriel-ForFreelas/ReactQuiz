// Importa a função createContex, que é utilizada para criar contextos.
// Importa a função useReducer, que permite alterarmos o state do contexto.
import {act, createContext, useReducer } from "react";

import questions from '../data/questions.js'; // Importa as questões de questions.js

const STAGES = ['Start', 'Playing', 'End']; // Define quais os states possíveis para o nosso context

// Define um state inicial para o quiz
const initialState = {
    gameStage: STAGES[0], //Define o state inicial como Start
    questions, //Define as questions iniciais (por ter o mesmo nome da variavel, não é necessário declarar como questions: questions).
    currentQuestion: 0, // Define em qual pergunta o usuário se encontra
    score: 0,
    answerSelected: false
}

// Cria uma arrow funtion baseada no quizReducer, que vai receber o state atual do context e a chave action recebida de um parametro type através de um evento onSubmit.
const quizReducer = (state, action) => {

    // Cria um switch para verificar qual o tipo de action passada no parametro
    switch(action.type) {
        case 'CHANGE_STATE':
            return {
                ...state, // Define o return terá como valor todos os itens anteriormente presentes no state
                gameStage: STAGES[1] // Altera o gameState
            }
        case 'REORDER_QUESTIONS':
            const reorderedQuestions = questions.sort(() => {
                return Math.random() -0.5;
            });
            return {
                ...state,
                questions: reorderedQuestions
            };
        case 'CHANGE_QUESTION':
            const nextQuestion = state.currentQuestion + 1;
            let endGame = false

            if(!questions[nextQuestion]) {
                endGame = true;
            }
            return {
                ...state,
                currentQuestion: nextQuestion,
                gameStage: endGame ? STAGES[2] : state.gameStage,
                answerSelected: false
            }
        case 'CHECK_ANSWER':
            if(state.answerSelected) return state;
        
            const answer = action.payload.answer;
            const option = action.payload.option;
            let correctAnswer = 0
            if(answer === option) correctAnswer = 1;

            return {
                ...state,
                score: state.score + correctAnswer,
                answerSelected: option
            }
        case 'NEW_GAME':
            return initialState;
        default:
            return state;
    }
}

export const QuizContext = createContext(); // Define a maneira de acessar o contexto após instânciado na aplicação, nomeando-o como QuizContext.

// Cria o provider, que define o valor do contexto e permite que o mesmo seja utilizado na aplicação.
export const QuizProvider = ({children}) => {
    const value = useReducer(quizReducer, initialState)

    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider> // A tag especial utilizada para que o contexto seja utilizado na aplicação esta em main.jsx
};