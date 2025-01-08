import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import obf from '../imgs/OBF.png';

// gabaritos obf

import nivel_1_2obf from '../docs/gabaritos/gabaritos-fisica/obf/2°fase/Gabarito_Extra_Oficial_OBF_N1.pdf';
import nivel_2_2obf from '../docs/gabaritos/gabaritos-fisica/obf/2°fase/Gabarito_Extra_Oficial_OBF_N2.pdf';
import nivel_3_2obf from '../docs/gabaritos/gabaritos-fisica/obf/2°fase/Gabarito_Extra_Oficial_OBF_N3.pdf';
import nivel_jr_3obf from '../docs/gabaritos/gabaritos-fisica/obf/3°fase-t/OBF_Fase_3_Nível_Jr.pdf';
import nivel_1_3obf from '../docs/gabaritos/gabaritos-fisica/obf/3°fase-t/OBF_Fase_3_Nível_I.pdf';
import nivel_2_3obf from '../docs/gabaritos/gabaritos-fisica/obf/3°fase-t/OBF_Fase_3_Nível_II.pdf';
import nivel_3_3obf from '../docs/gabaritos/gabaritos-fisica/obf/3°fase-t/OBF_Fase_3_Nível_III.pdf';
import nivel_1_3eobf from '../docs/gabaritos/gabaritos-fisica/obf/3°fase-e/OBF_Fase_3_Experimental_N1.pdf';
import nivel_2_3eobf from '../docs/gabaritos/gabaritos-fisica/obf/3°fase-e/OBF_Fase_3_Experimental_N2.pdf';

const Fisicagabobf = () => {
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
                        <img src={obf} class="imagem-circular"/>
                    </div>
                </div>
                <br/>
                <div className="button-container-diff">
                    <Link to="/física-gabaritos">
                        <button class="botao-transparente2">OBFEP</button>
                    </Link>
                    <button class="botao-transparente2-selected">OBF</button>
                </div>
                <br/>
                <div className="text-container11">
                        <h4 className="fontezao7cor">2° Fase - 2024</h4>
                </div>
                <div className="button-container-diff">
                    <a href={nivel_1_2obf}>
                        <button class="botao-transparente2-diff">Nível 1</button>
                    </a>
                    <a href={nivel_2_2obf}>
                        <button class="botao-transparente2-diff">Nível 2</button>
                    </a>
                    <a href={nivel_3_2obf}>
                        <button class="botao-transparente2-diff">Nível 3</button>
                    </a>
                </div>
                <br/>
                <div className="text-container11">
                        <h4 className="fontezao7cor">3° Fase T - 2024</h4>
                </div>
                <div className="button-container-diff">
                    <a href={nivel_jr_3obf}>
                        <button class="botao-transparente2-diff">Nível Jr</button>
                    </a>
                    <a href={nivel_1_3obf}>
                        <button class="botao-transparente2-diff">Nível 1</button>
                    </a>
                    <a href={nivel_2_3obf}>
                        <button class="botao-transparente2-diff">Nível 2</button>
                    </a>
                    <a href={nivel_3_3obf}>
                        <button class="botao-transparente2-diff">Nível 3</button>
                    </a>
                </div>
                <br/>
                <div className="text-container11">
                        <h4 className="fontezao7cor">3° Fase E - 2024</h4>
                </div>
                <div className="button-container-diff">
                    <a href={nivel_1_3eobf}>
                        <button class="botao-transparente2-diff">Nível 1</button>
                    </a>
                    <a href={nivel_2_3eobf}>
                        <button class="botao-transparente2-diff">Nível 2</button>
                    </a>
                </div>
                </center>
                <br/>
            </div>
        </div>
    );
}

export default Fisicagabobf;