import React, { useState, useEffect } from 'react';
import './Navbar.css';
import './ModalNav.css'
import Appp from './Appp';
import useModal from './useModal';
import ModalNav from './ModalNav';


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
    
    const [isOpenModal, openModal, closeModal] = useModal(); 

    return (
        <header>
        <div className={`nav ${show && 'nav__blue'}`}>
            <div className="links">
                <a href="/home">Home</a>
                <a href="#link3">Modelos</a>  
                <a href="#link1">Sobre nosotros</a>
                <a href="#link2">Contactanos</a>
                <div className="NavModal">
                    <button className="boton-modal_nav" onClick={openModal}>Billeteras</button>
                    <ModalNav
                        openModal={isOpenModal}
                        closeModal={closeModal}
                    ></ModalNav>
                </div>
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
