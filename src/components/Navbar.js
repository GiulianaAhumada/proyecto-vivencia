import React, { useState, useEffect } from 'react';
import './Navbar.css';
import Appp from './Appp';


const Navbar = () => {
  
    const [show, setShow] = useState(false)
    const controlNavbar = () => {
        if (window.scrollY > 300) {
            setShow(true)
        } else {
            setShow(false)
        }
    }
    useEffect(() => {
        window.addEventListener('scroll', controlNavbar)
        return () => {
            window.removeEventListener('scroll', controlNavbar)
        }
    }, [])
   
    return (
        <header>
        <div className={`nav ${show && 'nav__blue'}`}>
          <div className="links">
          <a href="/home">Home</a>  
          <a href="#link1">Sobre nosotros</a>
          <a href="#link2">Contactanos</a>    
          <Appp/>
          </div>         
        </div>
       <div className="titulo">
        <h1> Auto Company</h1>
         <br />
        <h2>Concesionaria de autos peugeot</h2>
        </div>
        </header>        
    )
}

export default Navbar
