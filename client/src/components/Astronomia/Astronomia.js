import React from 'react';
import Astronomiaimg from '../imgs/astronomia.png';
import { Routes, Route, Link } from 'react-router-dom';

const Astronomia = () => {
    return (
        <div>
            <img class="full-width-img" src={Astronomiaimg}></img>
            <div class="fundo">
                <h1 className="fontezaocor">INTRODUÇÃO</h1>
                <br/>
                <div className="text-container">
                    <h4 className="fontezao2cor">VOLTAR NO TEMPO É POSSÍVEL! 🔥</h4>
                </div>
                <div class="text-container">
                    <h4 className="cor">
                    Acredite ou não, você está tecnicamente sempre vendo o passado. Por exemplo, sabia que, se o Sol desaparecesse agora, você só perceberia isso 8 minutos depois? Estranho, não é? Isso acontece porque nenhuma informação é instantânea — tudo está limitado pela velocidade da luz, que, embora seja incrivelmente rápida, não é infinita. <span class="destaque2">Uau!</span>
                    </h4>
                    <br/>
                    <h4 className="cor">
                    Astronomia pode até estar fora do currículo escolar, mas é uma ciência fascinante e fundamental. Desde as grandes navegações até os sistemas modernos de satélites e GPS, ela está presente em nossas vidas. Apaixonar-se pelas estrelas não é loucura, é humildade: um desejo genuíno de compreender os fenômenos mais surpreendentes da natureza.
                    </h4>
                </div>
                <h1 className="fontezaocor">OLÍMPIADAS</h1>
                <br/>
                <div className="text-container">
                    <h4 className="cor">
                    No Brasil, existem diversas olimpíadas de astronomia para quem deseja explorar o universo e seus mistérios. Em nível nacional, destacam-se a <span class="destaque2">OBA</span> (Olimpíada Brasileira de Astronomia) e a <span class="destaque2">MOBFOG</span> (Mostra Brasileira de Foguetes). Já em nível internacional, os brasileiros podem almejar grandes desafios, como a <span class="destaque2">IOAA</span> (Olimpíada Internacional de Astronomia e Astrofísica), a <span class="destaque2">OLAA</span> (Olimpíada Latino-Americana de Astronomia e Astronáutica) e a <span class="destaque2">IAAC</span> (Competição Online Internacional de Astronomia e Astrofísica). <span class="destaque2">Dê o primeiro passo rumo às estrelas!</span>
                    </h4>
                </div>
                <br/>
                <div className="button-container-qui">
                    <Link to="/astronomia-materiais">
                        <button class="botao-transparente2">MATERIAIS</button>
                    </Link>
                    <Link to="/astronomia-problemas">
                        <button class="botao-transparente2">PROBLEMAS MENSAIS</button>
                    </Link>
                    <Link to="/astronomia-simulados">
                        <button class="botao-transparente2">SIMULADOS</button>
                    </Link>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default Astronomia;