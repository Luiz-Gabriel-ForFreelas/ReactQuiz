import React, { useEffect, useReducer } from 'react';

import { useContext } from 'react';

import { QuizContext } from '../context/quiz';

import Option from './Option'

import './Questions.css';

const Questions = () =>{
    const [quizState, dispatch] = useContext(QuizContext); // Define uma const para pegar e alterar os valores do state do context com useContext.
    const currentQuestion = quizState.questions[quizState.currentQuestion]; // Instancia uma variavel chamada currentQuestion, 

    const onselectOption = (option) => {
        dispatch({
            type: 'CHECK_ANSWER',
            payload: {answer: currentQuestion.answer, option}
        })
    }

    return (<div id='question'>
            {/* Chama o valor currentQuestion do context para mostrar em qual questão o usuário está */}
            {/* Chama o valor questions do context para aplicar o método length e retornar o valor todal de questões */}
            <p>Pergunta {quizState.currentQuestion + 1} de {quizState.questions.length}</p>
            <h2>{currentQuestion.question}</h2>
            <div id='options-container'>
                {currentQuestion.options.map((option) => (
                    <Option option={option} key={option} answer={currentQuestion.answer} selectOption={() => onselectOption(option)}/>
                ))}
            </div>
            {quizState.answerSelected && (
                <button onClick={() => {dispatch({type: 'CHANGE_QUESTION'})}}>Continuar</button>
            )}
        </div>)
}

export default Questions