import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import mandacaru from '../imgs/mandacaru.jpg';

// gab-man

import gabman from '../docs/gabaritos/gabaritos-matematica/Mandacaru_Gabarito_Extra_Oficial.pdf';

const Matematicagabman = () => {
    return (
        <div>
            <h1 class="fontizzao">GABARITOS COMENTADOS - MATEMÁTICA</h1>
            <hr class="line3"></hr>
            <center>
            <div className="text-container2">
                <h4 className="corzaoo">
                    Para os estudantes ansiosos por conferir seus acertos nas principais olimpíadas e seletivas do Brasil, esta seção foi feita para você. Aqui, você poderá acompanhar seu desempenho e avaliar sua evolução rumo ao sucesso. Preparado(a) para conferir seus resultados?
                </h4>
            </div>
            <br/>
            </center>
            <div class="fundo">
                <center>
                <div class="equipe-container">
                    <div class="membro">
                        <img src={mandacaru} class="imagem-circular"/>
                    </div>
                </div>
                <br/>
                <div className="button-container-diff">
                    <Link to="/matemática-gabaritos">
                        <button class="botao-transparente2">OBMEP</button>
                    </Link>
                    <Link to="/matemática-gabaritos-oim">
                        <button class="botao-transparente2">OIM</button>
                    </Link>
                    <button class="botao-transparente2-selected">Mandacaru</button>
                    <Link to="/matemática-gabaritos-ompd">
                        <button class="botao-transparente2">OMpD</button>
                    </Link>
                </div>
                <br/>
                <div className="text-container11">
                        <h4 className="fontezao7cor">2° Fase - 2024</h4>
                </div>
                <div className="button-container-diff">
                    <a href={gabman}>
                        <button class="botao-transparente2-diff">Lampião</button>
                    </a>
                </div>
                </center>
                <br/>
            </div>
        </div>
    );
}

export default Matematicagabman;