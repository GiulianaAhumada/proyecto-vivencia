import React from 'react';
import './Ventas.css';
import Imagenes from '../assets/Img/Imagenes';
import ModalVen from './ModalVentas';
import useModal from './useModal';

const Ventas = () => {

    const [isOpenModal1, openModal1, closeModal1] = useModal(); 
    const [isOpenModal2, openModal2, closeModal2] = useModal();
    const [isOpenModal3, openModal3, closeModal3] = useModal();
    const [isOpenModal4, openModal4, closeModal4] = useModal();
    const [isOpenModal5, openModal5, closeModal5] = useModal();
    const [isOpenModal6, openModal6, closeModal6] = useModal();

    return (
        <section className="ventas">

            <div className="item-ventas" onClick={openModal1}>
                <img src={Imagenes.mod1} alt="" />
                <hr></hr>
                <p>PRECIO CONTADO $2.198.000</p>
                <h6>NUEVO  208 <em>LIKE 1.6</em></h6>
            </div>
            <ModalVen 
                openModal={isOpenModal1}
                closeModal={closeModal1}
                models={Imagenes.mod1}
                nombre="LIKE 1.6"
                precio="$2.198.000"
            >
            </ModalVen>

            <div className="item-ventas" onClick={openModal2}>
                <img src={Imagenes.mod2} alt="" />
                <hr></hr>
                <p>PRECIO CONTADO $2.379.300</p>
                <h6>NUEVO  208 <em>ACTIVE 1.6</em></h6>
            </div>
            <ModalVen 
                openModal={isOpenModal2}
                closeModal={closeModal2}
                models={Imagenes.mod2}
                nombre="ACTIVE 1.6"
                precio="$2.379.300"
            >
            </ModalVen>

            <div className="item-ventas" onClick={openModal3}> 
                <img src={Imagenes.mod3} alt="" />
                <hr></hr>
                <p>PRECIO CONTADO $2.563.900</p>
                <h6>NUEVO 208  <em>ACTIVE TIPTRONIC 1.6</em></h6>
            </div>
            <ModalVen 
                openModal={isOpenModal3}
                closeModal={closeModal3}
                models={Imagenes.mod3}
                nombre="ACTIVE TIPTRONIC 1.6"
                precio="$2.563.900"
            >
            </ModalVen>

            <div className="item-ventas" onClick={openModal4}>
                <img src={Imagenes.mod4} alt="" />
                <hr></hr>
                <p>PRECIO CONTADO $2.641.800</p>
                <h6>NUEVO 208  <em>ALLURE 1.6</em></h6>
            </div>
            <ModalVen 
                openModal={isOpenModal4}
                closeModal={closeModal4}
                models={Imagenes.mod4}
                nombre="ALLURE 1.6"
                precio="$2.641.800"
            >
            </ModalVen>

            <div className="item-ventas" onClick={openModal5}>
                <img src={Imagenes.mod5} alt="" />
                <hr></hr>
                <p>PRECIO CONTADO $3.767.200</p>
                <h6>NUEVO 208  <em>ALLURE TIPTRONIC 1.6</em></h6>
            </div>
            <ModalVen 
                openModal={isOpenModal5}
                closeModal={closeModal5}
                models={Imagenes.mod5}
                nombre="ALLURE TIPTRONIC 1.6"
                precio="$3.767.200"
            >
            </ModalVen>

            <div className="item-ventas" onClick={openModal6}>
                <img src={Imagenes.mod6} alt="" />
                <hr></hr>
                <p>PRECIO CONTADO $4.462.545</p>
                <h6>NUEVO 208  <em>GT TIPTRONIC</em></h6>
            </div>
            <ModalVen 
                openModal={isOpenModal6}
                closeModal={closeModal6}
                models={Imagenes.mod6}
                nombre="GT TIPTRONIC"
                precio="$4.462.545"
            >
            </ModalVen>
        </section>
     );
}
 
export default Ventas;