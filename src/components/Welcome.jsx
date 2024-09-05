import React from 'react';

import Quiz from '../img/quiz.svg';

import { useContext } from 'react'; // Importa o useContext para que possamos acessar contextos

import { QuizContext } from '../context/quiz'; // Importa o QuizContext para que possamos acessar o contexto

import './Welcome.css'

// Cria a estrutura onde o usuário poderá interagir, selecionando o quiz desejado
const Welcome = () => {
    // Cria uma constante com as funções para obter o valor do context e alterar o valor do context, nesta ordem.
    const [quizState, dispatch] = useContext(QuizContext);
    return (
        <div id="welcome">
            <h2>Seja bem-vindo</h2>
            <p>Clique no botão abaixo para iniciar</p>

            {/* 
                Cria um evento onClick que chama a função para alterar o state do context Quiz, passando uma chave type com o valor 'CHANGE_STATE'
                Este valor é importante para a operação que ocorre por trás em ./context/quiz.jsx
            */}
            <button onClick={() => dispatch({type: 'CHANGE_STATE'})}>Iniciar</button>

            {/* Chama a imagem desejada através de uma variavel importada com o react, nomeada como Quiz*/}
            <img src={Quiz} alt="Início do Quiz"/>
        </div>
    )
}

export default Welcome