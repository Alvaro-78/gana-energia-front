import React from 'react';
import './Footer.css';

import facebook from  '../../assets/Icons/facebook.png';
import twitter from  '../../assets/Icons/twitter.png';
import instagram from '../../assets/Icons/instagram.png'
import whatsapp from '../../assets/Icons/whatsapp.png'
import pinterest from '../../assets/Icons/pinterest.png'
import linkedin from  '../../assets/Icons/linkedin.png';

const Footer = () => {
    return (
        <div className="footerBody">
            <div className="iconContainer">
                <div>
                    <a className="icon"
                    href="https://www.facebook.com/">
                        <img src={facebook} 
                        alt="facebook"/>
                    </a>
                </div>
                <div> 
                    <a className="icon"
                    href="https://twitter.com/">
                        <img src={twitter} 
                        alt=""/>
                    </a>
                </div>
                <div>
                    <a className="icon"
                    href="https://www.instagram.com/">
                        <img src={instagram} 
                        alt=""/>
                    </a>
                </div>
                <div >
                    <a className="icon"
                    href="https://www.whatsapp.com/?lang=es/">
                        <img src={whatsapp} 
                        alt=""/>
                    </a>
                </div>
                <div>
                    <a className="icon"
                    href="https://www.pinterest.es/">
                        <img src={pinterest} 
                        alt=""/>
                    </a>
                </div>
                <div>
                    <a className="icon"
                    href="https://www.linkedin.com/in/%C3%A1lvaro-aguerr%C3%A9/">
                        <img src={linkedin} 
                        alt=""/>
                    </a>
                </div>
            </div>
            <div className="divRedes">
                <h5>Síguenos en Redes Sociales</h5>
                Contáctanos por email : chollopop@gmail.com
            </div>
            <footer className="footer">&copy; Copyright 2021 CHOLLOPOP</footer>
            <div className="textFooter">
                <h5>Somos de Valencia y le hacemos la competencia a las grandes plataformas!!!!
                </h5>
            </div>
        </div>
    )
}

export default Footer
