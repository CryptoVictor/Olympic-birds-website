import React from 'react';
import Fisicaimg from '../imgs/fisica.png';
import { Routes, Route, Link } from 'react-router-dom';

const Fisica = () => {
    return (
        <div>
            <img class="full-width-img" src={Fisicaimg}></img>
            <div class="fundo">
                <h1 className="fontezaocor">INTRODUÇÃO</h1>
                <br/>
                <div className="text-container">
                    <h4 className="fontezao2cor">Porque o bumerangue volta ? Porque o fóton não tem massa ?</h4>
                </div>
                <div class="text-container">
                    <h4 className="cor">
                    Não caiu uma maçã na sua cabeça, mas, ainda assim, você tem curiosidade, não é?  Se essas dúvidas também passam pela sua cabeça, saiba que a física é muito mais <span class="destaque2">divertida</span> do que o famoso <span class="destaque2">"sorvetão"</span> que você decorou na escola. Com o formalismo adequado, é possível modelar diversas situações da vida real, como, por exemplo, o que aconteceria se todo mundo decidisse pular ao mesmo tempo 😅.
                    </h4>
                </div>
                <h1 className="fontezaocor">OLÍMPIADAS</h1>
                <br/>
                <div className="text-container">
                    <h4 className="cor">
                    No Brasil, existem diversas olimpíadas de física para quem deseja explorar os mistérios do universo e das leis que o regem. Em nível nacional, destacam-se a <span class="destaque2">OBF</span> (Olimpíada Brasileira de Física) e o <span class="destaque2">TBF</span> (Torneio Brasileiro de Física), que é a última etapa de seleção para competições internacionais. Já em nível global, os brasileiros podem participar da <span class="destaque2">IPhO</span> (Olimpíada Internacional de Física), da <span class="destaque2">EuPhO</span> (Olimpíada Europeia de Física) e da <span class="destaque2">OIbF</span> (Olimpíada Ibero-Americana de Física). Para quem prefere colocar a mão na massa e explorar a física experimental, há também a IYPT Brasil, seletiva para o Torneio Internacional de Física Experimental.
                    </h4>
                </div>
                <br/>
                <div className="button-container">
                    <Link to="/física-materiais">
                        <button class="botao-transparente2">MATERIAIS</button>
                    </Link>
                    <Link to="/física-problemas">
                        <button class="botao-transparente2">PROBLEMAS MENSAIS</button>
                    </Link>
                    <Link to="/física-gabaritos">
                        <button class="botao-transparente2">GABARITOS COMENTADOS</button>
                    </Link>
                </div>
                <br/>
            </div>
        </div>
    );
};

export default Fisica;