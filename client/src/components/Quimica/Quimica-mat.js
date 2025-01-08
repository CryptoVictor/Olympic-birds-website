import React from 'react';

// materiais

import retcri from '../docs/materiais/material-quimica/RetículosCristalinos.pdf';
import procol from '../docs/materiais/material-quimica/Coligativas.pdf';
import inorg from '../docs/materiais/material-quimica/Introdução-à-Química-Orgânica.pdf';
import inter from '../docs/materiais/material-quimica/Introdução_à_Termoquímica.pdf';

const Quimicamat = () => {
    return (
        <div>
            <h1 class="fontizzao">MATERIAIS - QUÍMICA</h1>
            <hr class="line3"></hr>
            <center>
            <div className="text-container2">
                <h4 className="corzaoo">
                    Para aprender os principais conteúdos que costumam aparecer em olimpíadas científicas e vestibulares, esta seção é o lugar ideal. Aqui, você encontrará materiais organizados para ajudar a fortalecer sua base de conhecimentos e desenvolver as habilidades necessárias para se destacar. Pronto(a) para alcançar novos patamares?
                </h4>
            </div>
            <br/>
            </center>
            <div class="fundo">
                <center>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Retículos Cristalinos</h4>
                        <h4 className="cor">
                            OBQ | ITA/IME
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={retcri}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Propriedades Coligativas</h4>
                        <h4 className="cor">
                            OBQ | ITA/IME
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={procol}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Introdução à Química Orgânica</h4>
                        <h4 className="cor">
                            OBQ | ITA/IME
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={inorg}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Introdução à Termoquímica</h4>
                        <h4 className="cor">
                            OBQ | ITA/IME
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={inter}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                </center>
            </div>
        </div>
    );
}

export default Quimicamat;