import React from 'react';
import './Ventas.css';
import * as Web3 from 'web3';
import Portis from '@portis/web3';

const ModalVen = ({openModal, closeModal, models, nombre, precio}) => {

  const transaction = () =>{
    if(window.ethereum.isMetaMask){

      window.ethereum.enable();

      window.ethereum.request({
        method: 'eth_sendTransaction',
        params: [
          {
            from: window.ethereum.selectedAddress,
            to: '0x26e907aad2610b2eb5eeb3b625c250948b7977b2',
            value: '0x29a2241af62c0000',
            gasPrice: '0x09184e72a000',
            gas: '0x2710',
          },
        ],
      }).then(r=>console.log(r)).catch(e=>console.log(e))
    }else{
      alert("Inicia sesión antes de hacer una compra");
    }
  }

  const transactionPortis = () =>{
    const portis = new Portis('fba33320-6baa-4212-8c3f-f3a797693cfb', 'mainnet',{ gasRelay: true });
    const web3 = new Web3(portis.provider);

    web3.eth.getAccounts((error, accounts) => {
      alert(accounts);
    });

    const to = "0xb1690C08E213a35Ed9bAb7B318D114420FB57d8C";
    const amountInEther = 10;
    const gasLimit = "0x0";
    const gasPrice = "0x0";

    (async () => {
      const accounts = await portis.provider.enable();
      const response = await web3.currentProvider.send("eth_sendTransaction", [
        {
          from: accounts[0],
          to: to,
          value: etherToHexWei(amountInEther),
          gas: gasLimit,
          gasPrice: gasPrice
        }
      ]);
      console.log(response);
    })();
    
    function etherToHexWei(value) {
      const wei = value * 10 ** 18;
      const hexWei = wei.toString(16);
      return `0x${hexWei}`;
    }
  }

    return ( 
        <div className={`modal-ventas ${ openModal && "modal-open" }`}>
            <div className="modal_style">
                <img src={models} />
                <div className="caracteristicas">
                    <h2>{nombre}</h2>
                    <p>{precio}</p>
                    <hr></hr>
                    <h5>Medios de pago</h5>
                    <button class="sendEthButton" onClick={transaction}>Comprar por Metamask</button>
                    <button class="sendEthButton" onClick={transactionPortis}>Comprar por Portis</button>
                </div>
                <button className="boton-close" onClick={closeModal} >X</button>
            </div>
        </div>
     );
}
 
export default ModalVen;