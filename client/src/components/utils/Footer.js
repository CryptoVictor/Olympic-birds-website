import React, { Component } from 'react';
import logoinverted from '../imgs/logoinverted.png';
import logoinstagram from '../imgs/logotipo-do-instagram.png';
import logoyoutube from '../imgs/youtube.png';

class Footer extends Component {

    render() {
        return (
            <div className="footer">
                <div className="down">
                    <div className="logo-container">
                        <img className="logo-footer" src={logoinverted} alt="Logo Olympic Birds" />
                        <h5 className="text-footer">Olympic Birds</h5>
                    </div>
                    <div className="cont">
                        <h4 className="text-social">REDES SOCIAIS</h4>
                        <div className="contimg">
                            <a href="https://www.instagram.com/olympicbirds?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==">
                                <img className="logo-social" src={logoinstagram} alt="Instagram" />
                            </a>
                            <a href="https://www.youtube.com/@OlympicBirds">
                                <img className="logo-social-two" src={logoyoutube} alt="YouTube" />
                            </a>
                        </div>
                    </div>
                    <div className="contact">
                        <h4 className="text-conct">CONTATO</h4>
                        <h5 className="text-email">olympicbirds@gmail.com</h5>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;
