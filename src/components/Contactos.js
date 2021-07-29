import './contacto.css'
import React from 'react'
import logo1 from './../assets/Img/twitter.png';
import logo2 from './../assets/Img/instagram.png';
import logo3 from './../assets/Img/facebook.png';

const Contactos = () => {
    return (
        
        <div className="logos" id="link2">
            <h1 >Síguenos en nuestras redes</h1>

            <a href="https://www.twitter.com"><img src={logo1} title="Twitter"></img></a>
            <a href="https://www.instagram.com"><img src={logo2} title="Instagram"></img></a>
            <a href="https://www.facebook.com"><img src={logo3} title="Facebook"></img></a>
            
        </div>
    )
}
export default Contactos
