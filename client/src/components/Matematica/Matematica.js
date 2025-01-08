import React from 'react';
import Matematicaimg from '../imgs/matematica.png';
import { Routes, Route, Link } from 'react-router-dom';

const Matematica = () => {
    return (
        <div>
            <img class="full-width-img" src={Matematicaimg}></img>
            <div class="fundo">
                <h1 className="fontezaocor">INTRODUÇÃO</h1>
                <br/>
                <div className="text-container">
                    <h4 className="fontezao2cor">Por que π está em todos os lugares? O que é o infinito?</h4>
                </div>
                <div class="text-container">
                    <h4 className="cor">
                    A matemática não é apenas uma linguagem "chata" — ela é essencial para <span class="destaque2">simbolizar</span> todas as <span class="destaque2">dúvidas</span> da humanidade que surgem nas demais ciências exatas. É por meio da matemática que conseguimos descrever quantitativamente tudo o que acontece no universo. E não, <span class="destaque2">isso não tem nada a ver com decorar tabuadas ou produtos notáveis,</span> mas sim com compreender um sistema incrível capaz de capturar a beleza e a lógica da <span class="destaque2">natureza</span>.
                    </h4>
                </div>
                <h1 className="fontezaocor">OLÍMPIADAS</h1>
                <br/>
                <div className="text-container">
                    <h4 className="cor">
                    No Brasil, existem diversas olimpíadas de matemática para quem deseja explorar o fascinante mundo dos números e padrões. Em nível nacional, destacam-se a <span class="destaque2">OBM</span> (Olimpíada Brasileira de Matemática) e a <span class="destaque2">OBMEP</span> (Olimpíada Brasileira de Matemática das Escolas Públicas). Já em nível internacional, os brasileiros podem participar de desafios como a <span class="destaque2">IMO</span> (Olimpíada Internacional de Matemática), a <span class="destaque2">APMO</span> (Asian Pacific Mathematics Olympiad), a <span class="destaque2">EGMO</span> (European Girls’ Mathematical Olympiad) e muitas outras competições.
                    </h4>
                </div>
                <br/>
                <div className="button-container">
                    <Link class="last" to="/matemática-materiais">
                        <button class="botao-transparente2">MATERIAIS</button>
                    </Link>
                    <Link class="last" to="/matemática-problemas">
                        <button class="botao-transparente2">PROBLEMAS MENSAIS</button>
                    </Link>
                    <Link class="last" to="/matemática-gabaritos">
                        <button class="botao-transparente2">GABARITOS COMENTADOS</button>
                    </Link>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default Matematica;