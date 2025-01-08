import React from 'react';

// questoes

import semana1_que from '../docs/problemas/problemas-astronomia/questoes/Semana_1_Astronomia_OB.pdf';
import semana2_que from '../docs/problemas/problemas-astronomia/questoes/Semana_2_Astronomia_OB.pdf';
import semana3_que from '../docs/problemas/problemas-astronomia/questoes/Semana_3_Astronomia_OB.pdf';
import semana4_que from '../docs/problemas/problemas-astronomia/questoes/Semana_4_Astronomia_OB.pdf';
import semana5_que from '../docs/problemas/problemas-astronomia/questoes/Semana_5_Astronomia_OB.pdf';
import semana6_que from '../docs/problemas/problemas-astronomia/questoes/Semana_6_Astronomia_OB.pdf';

// gabaritos

import semana1_sol from '../docs/problemas/problemas-astronomia/solucoes/Solução_Semana_1_Astronomia_OB.pdf';
import semana2_sol from '../docs/problemas/problemas-astronomia/solucoes/Solução_Semana_2_Astronomia.pdf';
import semana3_sol from '../docs/problemas/problemas-astronomia/solucoes/Soluções_Semana_3_Astronomia_OB.pdf';
import semana4_sol from '../docs/problemas/problemas-astronomia/solucoes/Soluções_Semana_4_Astronomia_OB.pdf';
import semana6_sol from '../docs/problemas/problemas-astronomia/solucoes/Soluções_Semana_6_Astronomia.pdf';

const Astronomiaprob = () => {
    return (
        <div>
            <h1 class="fontizzao">PROBLEMAS - ASTRONOMIA</h1>
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
                        <h4 className="fontezao7cor">Problemas da Semana 06 - 28/08/2024</h4>
                        <h4 className="cor">
                        Mecânica Celeste | Astronomia de Posição
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
                        <h4 className="fontezao7cor">Problemas da Semana 05 - 01/08/2024</h4>
                        <h4 className="cor">
                        Mecânica Celeste | Eletromagnetismo | Diagrama HR | Astronomia de Posição
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={semana5_que}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Problemas da Semana 04 - 17/07/2024</h4>
                        <h4 className="cor">
                        Fotometria | Átomo de Bohr | Astronomia de Posição
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
                        <h4 className="fontezao7cor">Problemas da Semana 03 - 10/07/2024</h4>
                        <h4 className="cor">
                        Astronomia de Posição | Mecânica Celeste | Física Moderna
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
                        <h4 className="fontezao7cor">Problemas da Semana 02 - 03/07/2024</h4>
                        <h4 className="cor">
                        Posição dos Astros na Esfera Celeste | Mecânica Celeste | Colisões
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
                        <h4 className="fontezao7cor">Problemas da Semana 01 - 26/06/2024</h4>
                        <h4 className="cor">
                        Mecânica Celeste | Telescópios | Termodinâmica
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

export default Astronomiaprob;