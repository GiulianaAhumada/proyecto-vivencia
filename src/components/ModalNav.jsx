import React from 'react';
import Cuenta from './BotonesWeb3';
import './ModalNav';

const ModalNav = ({openModal,closeModal}) => {
    return ( 
        <div className={`modal-nav ${ openModal && "modal-open" }`}>
            <div className="modal-nav_style">
                <button className="boton-close-nav" onClick={closeModal} >X</button>
                <div className="items_nav_modal">
                    <Cuenta />
                </div>
            </div>
        </div>
        

     );
}
 
export default ModalNav;