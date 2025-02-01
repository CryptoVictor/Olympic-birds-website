import React from 'react';
import passarinho from './imgs/passarinho.png';
import material from './imgs/mat.png';
import gabarito from './imgs/gab.png';
import questao from './imgs/qst.png';
import InstagramWidget from './utils/Instagram';

const Home = () => {
    return (
            <div>
                <div class="img-passarinho">
                    <img class="passarinho" src={passarinho}></img>
                </div>
                <br/>
                <div class="content">
                    <h1 class="fonte">DEMOCRATIZANDO A EDUCAÇÃO</h1>
                    <hr class="line2"></hr>
                    <div class="textao">
                        <h4>Movidos pela determinação de transformar o Brasil,<span class="destaque"> o projeto Olympic Birds tem como propósito fundamental aumentar o acesso a oportunidades acadêmicas</span>, como olimpíadas científicas e vestibulares. Além disso, para os engajados, oferece conteúdos de qualidade excepcional para capacitá-los ao mais alto nível.</h4>
                    </div>
                    <br/>
                    <br/>
                    <h1 class="fonte">NOSSOS CONTEÚDOS</h1>
                    <br/>
                    <div class="separacao">
                        <div class="bloco">
                            <img src={material}></img>
                            <div class="textao2">
                            <h3 class="fonte">MATERIAIS DE ESTUDO</h3>
                            <h4>Para aprender os principais conteúdos que caem em olímpiadas científicas e vestibulares.</h4>
                            </div>
                        </div>
                        <div class="bloco">
                            <img src={gabarito}></img>
                            <div class="textao2">
                            <h3 class="fonte">GABARITOS COMENTADOS</h3>
                            <h4>Para os estudantes ansiosos em saber seus acertos nas principais olímpiadas e seletivas do Brasil.</h4>
                            </div>
                        </div>
                        <div class="bloco">
                            <img src={questao}></img>
                            <div class="textao2">
                            <h3 class="fonte">PROBLEMAS MENSAIS</h3>
                            <h4>Para testar a resistência do seu capacete com problemas de diversos níveis e conteúdos.</h4>
                            </div>
                        </div>
                    </div>
                    <br/>
                    <br/>
                    <h1 class="fonte">NOSSAS ÚLTIMAS PUBLICAÇÕES</h1>
                    <hr class="line2"></hr>
                    <center>
                        <InstagramWidget/>
                    </center>
                    <br/>
                    <center>
                    <br/>
                    <div class="video">
                        <div class="bloco2">
                            <h1 class="fonte">ASSISTA AS NOSSAS AULAS NO<span class="destaque"> YOUTUBE!</span></h1>
                        </div>
                        <div class="video-responsive">
                            <iframe
                                src="https://www.youtube.com/embed/SQ48JpyGa5o"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                    </center>
                    <br/>
                    <h1 class="fonte">NOSSA COMUNIDADE OLÍMPICA</h1>
                    <hr class="line2"></hr>
                    <br/>
                    <h4 class="fontezao">"Trim-trimm!" Fale conosco do Olympic Birds, o que podemos fazer por você?</h4>
                    <center>
                        <h4 class="fontezao2">Não somos uma atendente chata de marketing, mas sim uma comunidade que se une, fortalece e potencializa o voo uns dos outros. Se quiser se aventurar mais pelas jornadas científicas ou tirar dúvidas, entre em nossa comunidade no WhatsApp:</h4>
                    </center>
                    <br/>
                    <a href="https://chat.whatsapp.com/LNxdKHySQPD1H3KkzmjD5o">
                        <button class="botao-transparente">COMUNIDADE DO OLYMPIC BIRDS</button>
                    </a>
                </div>
                <br/>
            </div>
    );
};

export default Home;