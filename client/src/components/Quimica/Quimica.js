import React from 'react';
import Quimicaimg from '../imgs/quimica.png';
import { Routes, Route, Link } from 'react-router-dom';

const Quimica = () => {
    return (
        <div>
            <img class="full-width-img" src={Quimicaimg}></img>
            <div class="fundo">
                <h1 className="fontezaocor">INTRODUÇÃO</h1>
                <br/>
                <div className="text-container">
                    <h4 className="fontezao2cor">Por que a água apaga o fogo? Por que o ferro enferruja?</h4>
                </div>
                <div class="text-container">
                    <h4 className="cor">
                    Não aconteceu uma explosão no seu laboratório, mas, ainda assim, você tem <span class="destaque2">curiosidade</span>, não é? Se essas perguntas já passaram pela sua cabeça, saiba que a química é muito mais fascinante do que <span class="destaque2">decorar a tabela periódica</span> ou <span class="destaque2">balancear aquelas equações intermináveis</span> na escola. Com as ferramentas certas, é possível explorar mistérios incríveis, como o motivo de alguns elementos brilharem no escuro, como as moléculas interagem para criar cheiros e sabores, ou até as reações químicas por trás de uma <span class="destaque2">bomba</span>. 🔥
                    </h4>
                </div>
                <h1 className="fontezaocor">OLÍMPIADAS</h1>
                <br/>
                <div className="text-container">
                    <h4 className="cor">
                    No Brasil, existem diversas olimpíadas de química para quem deseja explorar o mundo dos átomos e moléculas. Em nível estadual e nacional, destacam-se a <span class="destaque2">OBQ</span> (Olimpíada Brasileira de Química) e a <span class="destaque2">OBQjr</span> (Olimpíada Brasileira de Química Júnior). Já em nível internacional, os brasileiros podem almejar grandes desafios, como a <span class="destaque2">IChO</span> (International Chemistry Olympiad) e a <span class="destaque2">IMChO</span> (International Mendeleev Chemistry Olympiad).
                    </h4>
                </div>
                <br/>
                <div className="button-container-qui">
                    <Link class="last" to="/química-materiais">
                        <button class="botao-transparente2">MATERIAIS</button>
                    </Link>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default Quimica;