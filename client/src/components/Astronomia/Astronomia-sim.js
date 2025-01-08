import React from 'react';

// materiais

import aulaop2 from '../docs/simulados-astronomia/Aulão_P2.pdf';
import gabarito_sim from '../docs/simulados-astronomia/Gabarito_Simulado_P1_OB.pdf';
import sim_p1 from '../docs/simulados-astronomia/Simulado_P1_OB.pdf';

const Astronomiasim = () => {
    return (
        <div>
            <h1 class="fontizzao">SIMULADOS - ASTRONOMIA</h1>
            <hr class="line3"></hr>
            <center>
            <div className="text-container2">
                <h4 className="corzaoo">
                    Para os estudantes que desejam testar seus conhecimentos e se preparar para os desafios reais, esta seção de simulados é perfeita. Aqui você encontrará exercícios que simulam as principais provas e competições, ajudando você a treinar e evoluir. Pronto(a) para encarar o próximo teste? 🚀
                </h4>
            </div>
            <br/>
            </center>
            <div class="fundo">
                <center>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Seletivas Online 2024/2025</h4>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Aulão do Simulado (P2)</h4>
                    </div>
                    <div class="text-container5">
                        <a class="active" href={aulaop2}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href="https://www.youtube.com/watch?v=2oQvxb0neZk">
                            <h4 className="cordiff2">Gabarito</h4>
                        </a>
                    </div>
                    <br/>
                    <div className="text-container3">
                        <h4 className="fontezao7cor">Simulado (P1)</h4>
                    </div>
                    <div class="text-container5">
                        <a class="active" href={sim_p1}>
                            <h4 className="cordiff">Questões</h4>
                        </a>
                        <a class="active" href={gabarito_sim}>
                            <h4 className="cordiff2">Gabarito</h4>
                        </a>
                    </div>
                    <br/>
                </center>
            </div>
        </div>
    );
}

export default Astronomiasim;