import React from 'react';

// materiais

import matele from '../docs/materiais/material-fisica/Matemática_Para_Eletrostática.pdf';
import momli from '../docs/materiais/material-fisica/Momento_Linear.pdf';
import oncor from '../docs/materiais/material-fisica/Ondas_em_Cordas.pdf';
import potele from '../docs/materiais/material-fisica/Óptica_Geométrica.pdf';
import propg from '../docs/materiais/material-fisica/Potencial_Elétrico.pdf';

const Fisicamat= () => {
    return (
        <div>
            <h1 class="fontizzao">MATERIAIS - FÍSICA</h1>
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
                        <h4 className="fontezao7cor">Matemática para Eletrostática</h4>
                        <h4 className="cor">
                            OBF | ITA/IME | SOIF
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={matele}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Momento Linear</h4>
                        <h4 className="cor">
                            OBF | ITA/IME | SOIF
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={momli}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Ondas em Cordas</h4>
                        <h4 className="cor">
                            OBF | ITA/IME | SOIF
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={oncor}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Potencial Elétrico</h4>
                        <h4 className="cor">
                            OBF | ITA/IME | SOIF
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={potele}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Princípios de óptica geométrica</h4>
                        <h4 className="cor">
                            OBF | ITA/IME | SOIF
                        </h4>
                    </div>
                    <div class="text-container4">
                        <a class="active" href={propg}>
                            <h4 className="cordiffff">Material</h4>
                        </a>
                    </div>
                    <br/>
                </center>
            </div>
        </div>
    );
}

export default Fisicamat;