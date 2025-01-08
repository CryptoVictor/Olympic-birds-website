import React from 'react';

// questoes

import semana1_que from '../docs/problemas/problemas-matematica/questoes/Problemas_Semana_1.pdf';
import semana2_que from '../docs/problemas/problemas-matematica/questoes/Problemas_Semana_2.pdf';
import semana3_que from '../docs/problemas/problemas-matematica/questoes/Problemas_Semana_3.pdf';
import semana4_que from '../docs/problemas/problemas-matematica/questoes/Problemas_Semana_4.pdf';
import semana5_que from '../docs/problemas/problemas-matematica/questoes/Problemas_Semana_5.pdf';
import semana6_que from '../docs/problemas/problemas-matematica/questoes/Problemas_Semana_6.pdf';
import semana7_que from '../docs/problemas/problemas-matematica/questoes/Problemas_Semana_7.pdf';

// gabaritos

import semana1_sol from '../docs/problemas/problemas-matematica/solucoes/Soluções_Semana_1.pdf';
import semana2_sol from '../docs/problemas/problemas-matematica/solucoes/Soluções_Semana_2.pdf';
import semana3_sol from '../docs/problemas/problemas-matematica/solucoes/Soluções_Semana_3.pdf';
import semana4_sol from '../docs/problemas/problemas-matematica/solucoes/Soluções_Semana_4.pdf';
import semana5_sol from '../docs/problemas/problemas-matematica/solucoes/Soluções_Semana_5.pdf';
import semana6_sol from '../docs/problemas/problemas-matematica/solucoes/Soluções_Semana_6.pdf';
import semana7_sol from '../docs/problemas/problemas-matematica/solucoes/Soluções_Semana_7.pdf';

const Matprob = () => {
    return (
        <div>
            <h1 class="fontizzao">PROBLEMAS - MATEMÁTICA</h1>
            <hr class="line3"></hr>
            <center>
            <div className="text-container2">
                <h4 className="corzaoo">
                    Olá, estudante! Bem-vindo à seção dedicada aos arquivos dos nossos desafios mensais. Aqui, você encontrará problemas cuidadosamente elaborados para testar a resistência do seu capacete e desafiar suas habilidades em diversos níveis de dificuldade e conteúdos. Preparado para encarar o próximo desafio?
                </h4>
            </div>
            <br/>
            </center>
            <div class="fundo">
                <center>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Problemas da Semana 07 - 12/12/2024</h4>
                        <h4 className="cor">
                        Determinantes | Polinômios | Teoria dos números
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={semana7_que}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href={semana7_sol}>
                            <h4 className="cordiff2">Soluções</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Problemas da Semana 06 - 28/11/2024</h4>
                        <h4 className="cor">
                        Polinômios | Números Complexos | Geometria Espacial e Analítica
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={semana6_que}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href={semana6_sol}>
                            <h4 className="cordiff2">Soluções</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Problemas da Semana 05 - 14/11/2024</h4>
                        <h4 className="cor">
                        Funções | Teoria dos Números | Princípio de Fermat | Equação Diofantina
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={semana5_que}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href={semana5_sol}>
                            <h4 className="cordiff2">Soluções</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Problemas da Semana 04 - 06/11/2024</h4>
                        <h4 className="cor">
                        Geometria Espacial e Analítica | Funções | Teoria dos Números
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={semana4_que}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href={semana4_sol}>
                            <h4 className="cordiff2">Soluções</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Problemas da Semana 03 - 16/10/2024</h4>
                        <h4 className="cor">
                        Binômio de Newton | Funções | Números Complexos | Trigonometria | Geometria Plana
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={semana3_que}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href={semana3_sol}>
                            <h4 className="cordiff2">Soluções</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Problemas da Semana 02 - 06/10/2024</h4>
                        <h4 className="cor">
                        Teoria dos Números | Análise Combinatória | Funções
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={semana2_que}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href={semana2_sol}>
                            <h4 className="cordiff2">Soluções</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Problemas da Semana 01 - 22/09/2024</h4>
                        <h4 className="cor">
                        Geometria Plana | Análise Combinatória | Funções
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={semana1_que}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href={semana1_sol}>
                            <h4 className="cordiff2">Soluções</h4>
                        </a>
                    </div>
                    <br/>
                </center>
            </div>
        </div>
    );
}

export default Matprob;
