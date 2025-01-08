import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import obfep from '../imgs/obfep.jpeg';

// gabaritos obfep

import nivel_a_1obfep from '../docs/gabaritos/gabaritos-fisica/obfep/1°fase/OBFEP_Nível_A.pdf';
import nivel_b_1obfep from '../docs/gabaritos/gabaritos-fisica/obfep/1°fase/OBFEP_Nível_B.pdf';
import nivel_c_1obfep from '../docs/gabaritos/gabaritos-fisica/obfep/1°fase/OBFEP_Nível_C.pdf';
import nivel_a_2obfep from '../docs/gabaritos/gabaritos-fisica/obfep/2°fase/Gabarito_OBFEP_Nível_B.pdf';

const Fisicagab = () => {
    return (
        <div>
            <h1 class="fontizzao">GABARITOS COMENTADOS - FÍSICA</h1>
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
                        <img src={obfep} class="imagem-circular"/>
                    </div>
                </div>
                <br/>
                <div className="button-container-diff">
                    <button class="botao-transparente2-selected">OBFEP</button>
                    <Link to="/física-gabaritos-obf">
                        <button class="botao-transparente2">OBF</button>
                    </Link>
                </div>
                <br/>
                <div className="text-container11">
                        <h4 className="fontezao7cor">1° Fase - 2024</h4>
                </div>
                <div className="button-container-diff">
                    <a href={nivel_a_1obfep}>
                        <button class="botao-transparente2-diff">Nível A</button>
                    </a>
                    <a href={nivel_b_1obfep}>
                        <button class="botao-transparente2-diff">Nível B</button>
                    </a>
                    <a href={nivel_c_1obfep}>
                        <button class="botao-transparente2-diff">Nível C</button>
                    </a>
                </div>
                <br/>
                <div className="text-container11">
                        <h4 className="fontezao7cor">2° Fase - 2024</h4>
                </div>
                <div className="button-container-diff">
                    <a href={nivel_a_2obfep}>
                        <button class="botao-transparente2-diff">Nível A</button>
                    </a>
                </div>
                </center>
                <br/>
            </div>
        </div>
    );
}

export default Fisicagab;