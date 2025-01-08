import React from 'react';

// professores

import NataliaRosa from '../imgs/qs/Natalia-Rosa.jpg';
import KauaVictor from '../imgs/qs/Kaua-Victor.jpg';
import MariaClara from '../imgs/qs/Maria-Clara.jpg';

// aulas nat

import aula1_nat from '../docs/materiais/material-astronomia/natália/Aula_1.pdf';
import aula2_nat from '../docs/materiais/material-astronomia/natália/Aula_2.pdf';
import aula3_nat from '../docs/materiais/material-astronomia/natália/Aula_3.pdf';
import aula4_nat from '../docs/materiais/material-astronomia/natália/Aula_4.pdf';
import aula5_nat from '../docs/materiais/material-astronomia/natália/Aula_5.pdf';
import aula6_nat from '../docs/materiais/material-astronomia/natália/Aula_6.pdf';
import aula7_nat from '../docs/materiais/material-astronomia/natália/Aula_7.pdf';
import aula8_nat from '../docs/materiais/material-astronomia/natália/Aula_8.pdf';
import aula11_nat from '../docs/materiais/material-astronomia/natália/Aula_11.pdf';
import aula12_nat from '../docs/materiais/material-astronomia/natália/Aula_12.pdf';
import aula13_nat from '../docs/materiais/material-astronomia/natália/Aula_13.pdf';

// aulas maria

import aula1_maria from '../docs/materiais/material-astronomia/maria/Aula_1.pdf';
import aula2_maria from '../docs/materiais/material-astronomia/maria/Aula_2.pdf';
import aula3_maria from '../docs/materiais/material-astronomia/maria/Aula_3.pdf';
import aula4_maria from '../docs/materiais/material-astronomia/maria/Aula_4.pdf';
import aula5_maria from '../docs/materiais/material-astronomia/maria/Aula_5.pdf';
import aula6_maria from '../docs/materiais/material-astronomia/maria/Aula_6.pdf';
import aula7_maria from '../docs/materiais/material-astronomia/maria/Aula_7.pdf';
import aula8_maria from '../docs/materiais/material-astronomia/maria/Aula_8.pdf';
import aula9_maria from '../docs/materiais/material-astronomia/maria/Aula_9.pdf';
import aula10_maria from '../docs/materiais/material-astronomia/maria/Aula_10.pdf';
import aula11_maria from '../docs/materiais/material-astronomia/maria/Aula_11.pdf';

// aulas kaua

import aula1_kaua from '../docs/materiais/material-astronomia/kaua/Aula_1.pdf';
import aula2_kaua from '../docs/materiais/material-astronomia/kaua/Aula_2.pdf';
import aula3_kaua from '../docs/materiais/material-astronomia/kaua/Aula_3.pdf';
import aula4_kaua from '../docs/materiais/material-astronomia/kaua/Aula_4.pdf';
import aula5_kaua from '../docs/materiais/material-astronomia/kaua/Aula_5.pdf';
import aula6_kaua from '../docs/materiais/material-astronomia/kaua/Aula_6.pdf';
import aula7_kaua from '../docs/materiais/material-astronomia/kaua/Aula_7.pdf';
import aula8_kaua from '../docs/materiais/material-astronomia/kaua/Aula_8.pdf';
import aula9_kaua from '../docs/materiais/material-astronomia/kaua/Aula_9.pdf';
import aula10_kaua from '../docs/materiais/material-astronomia/kaua/Aula_10.pdf';
import aula11_kaua from '../docs/materiais/material-astronomia/kaua/Aula_11.pdf';
import aula12_kaua from '../docs/materiais/material-astronomia/kaua/Aula_12.pdf';

const Astronomiamat = () => {
    return (
        <div>
            <h1 class="fontizzao">MATERIAIS - ASTRONOMIA</h1>
            <hr class="line3"></hr>
            <center>
            <div className="text-container2">
                <h4 className="corzaoo">
                Para aprender os principais conteúdos que costumam aparecer em olimpíadas científicas, esta seção é o lugar ideal. Aqui, você encontrará materiais organizados para ajudar a fortalecer sua base de conhecimentos e desenvolver as habilidades necessárias para se destacar. Pronto(a) para alcançar novos patamares?
                </h4>
            </div>
            <br/>
            </center>
            <div class="fundo">
                <center>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Curso Preparatório das Seletivas de Astronomia 2025</h4>
                    </div>
                </center>
                <div class="equipe-container">
                    <div class="membro">
                        <img src={NataliaRosa} class="imagem-circular"/>
                        <center>
                            <h3 class="fontezao3cor">Natália Rosa</h3>
                            <h5 class="textozao">Astronomia de Posição</h5>
                            <br/>
                            <a class="none" href={aula1_nat}>
                                <h5 class="fontezao3cor">Aula 1</h5>
                            </a>
                            <a class="none" href={aula2_nat}>
                                <h5 class="fontezao3cor">Aula 2</h5>
                            </a>
                            <a class="none" href={aula3_nat}>
                                <h5 class="fontezao3cor">Aula 3</h5>
                            </a>
                            <a class="none" href={aula4_nat}>
                                <h5 class="fontezao3cor">Aula 4</h5>
                            </a>
                            <a class="none" href={aula5_nat}>
                                <h5 class="fontezao3cor">Aula 5</h5>
                            </a>
                            <a class="none" href={aula6_nat}>
                                <h5 class="fontezao3cor">Aula 6</h5>
                            </a>
                            <a class="none" href={aula7_nat}>
                                <h5 class="fontezao3cor">Aula 7</h5>
                            </a>
                            <a class="none" href={aula8_nat}>
                                <h5 class="fontezao3cor">Aula 8</h5>
                            </a>
                            <a class="none" href="https://www.youtube.com/watch?v=qeX-Qu-4tRo&list=PLQPAdnRxXs_4fdi9L8DFB4pdrFCsD6luG&index=9" >
                                <h5 class="fontezao3cor">Aula 9</h5>
                            </a>
                            <a class="none" href="https://www.youtube.com/watch?v=ZvZyYyQi4U0&list=PLQPAdnRxXs_4fdi9L8DFB4pdrFCsD6luG&index=10" >
                                <h5 class="fontezao3cor">Aula 10</h5>
                            </a>
                            <a class="none" href={aula11_nat}>
                                <h5 class="fontezao3cor">Aula 11</h5>
                            </a>
                            <a class="none" href={aula12_nat}>
                                <h5 class="fontezao3cor">Aula 12</h5>
                            </a>
                            <a class="none" href={aula13_nat}>
                                <h5 class="fontezao3cor">Aula 13</h5>
                            </a>
                        </center>
                    </div>
                    <div class="membro">
                        <img src={MariaClara} class="imagem-circular"/>
                        <center>
                            <h3 class="fontezao3cor">Maria Clara</h3>
                            <h5 class="textozao">Fotometria</h5>
                            <br/>
                            <a class="none" href={aula1_maria} >
                                <h5 class="fontezao3cor">Aula 1</h5>
                            </a>
                            <a class="none" href={aula2_maria}  >
                                <h5 class="fontezao3cor">Aula 2</h5>
                            </a>
                            <a class="none" href={aula3_maria}  >
                                <h5 class="fontezao3cor">Aula 3</h5>
                            </a>
                            <a class="none" href={aula4_maria}  >
                                <h5 class="fontezao3cor">Aula 4</h5>
                            </a>
                            <a class="none" href={aula5_maria}  >
                                <h5 class="fontezao3cor">Aula 5</h5>
                            </a>
                            <a class="none" href={aula6_maria}  >
                                <h5 class="fontezao3cor">Aula 6</h5>
                            </a>
                            <a class="none" href={aula7_maria}  >
                                <h5 class="fontezao3cor">Aula 7</h5>
                            </a>
                            <a class="none" href={aula8_maria}  >
                                <h5 class="fontezao3cor">Aula 8</h5>
                            </a>
                            <a class="none" href={aula9_maria}  >
                                <h5 class="fontezao3cor">Aula 9</h5>
                            </a>
                            <a class="none" href={aula10_maria}  >
                                <h5 class="fontezao3cor">Aula 10</h5>
                            </a>
                            <a class="none" href={aula11_maria}  >
                                <h5 class="fontezao3cor">Aula 11</h5>
                            </a>
                        </center>
                    </div>
                    <div class="membro">
                        <img src={KauaVictor} class="imagem-circular"/>
                        <center>
                            <h3 class="fontezao3cor">Kauã Victor</h3>
                            <h5 class="textozao">Mecânica Celeste</h5>
                            <br/>
                            <a class="none" href={aula1_kaua} >
                                <h5 class="fontezao3cor">Aula 1</h5>
                            </a>
                            <a class="none" href={aula2_kaua} >
                                <h5 class="fontezao3cor">Aula 2</h5>
                            </a>
                            <a class="none" href={aula3_kaua} >
                                <h5 class="fontezao3cor">Aula 3</h5>
                            </a>
                            <a class="none" href={aula4_kaua} >
                                <h5 class="fontezao3cor">Aula 4</h5>
                            </a>
                            <a class="none" href={aula5_kaua} >
                                <h5 class="fontezao3cor">Aula 5</h5>
                            </a>
                            <a class="none" href={aula6_kaua} >
                                <h5 class="fontezao3cor">Aula 6</h5>
                            </a>
                            <a class="none" href={aula7_kaua} >
                                <h5 class="fontezao3cor">Aula 7</h5>
                            </a>
                            <a class="none" href={aula8_kaua} >
                                <h5 class="fontezao3cor">Aula 8</h5>
                            </a>
                            <a class="none" href={aula9_kaua} >
                                <h5 class="fontezao3cor">Aula 9</h5>
                            </a>
                            <a class="none" href={aula10_kaua} >
                                <h5 class="fontezao3cor">Aula 10</h5>
                            </a>
                            <a class="none" href={aula11_kaua} >
                                <h5 class="fontezao3cor">Aula 11</h5>
                            </a>
                            <a class="none" href={aula12_kaua} >
                                <h5 class="fontezao3cor">Aula 12</h5>
                            </a>
                        </center>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Astronomiamat;