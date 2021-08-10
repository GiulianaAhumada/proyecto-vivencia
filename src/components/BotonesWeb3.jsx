import React from 'react'
import * as Web3 from 'web3';
import Portis from '@portis/web3';


const Cuenta = () => {
    const connect = () => {
        if(window.ethereum.isMetaMask){
          
          window.ethereum.enable();

          const ethereumButton = document.querySelector('.enableEthereumButton');
          const showAccount = document.querySelector('.showAccount');
  
          ethereumButton.addEventListener('click', () => {
            getAccount();
          });
  
          async function getAccount() {
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            const account = accounts[0];
            showAccount.innerHTML = account;
          }
        }
        else{
          alert("Instala la extensión de Metamask: https://metamask.io");
        }
      }

    const connectportis = () => {

      const portis = new Portis('fba33320-6baa-4212-8c3f-f3a797693cfb', 'mainnet');
      const web3 = new Web3(portis.provider);
      const buttonPortis = document.querySelector('.enableButtonPortis');
      const showPortis = document.querySelector('.showPortis'); 

      buttonPortis.addEventListener('click', () => {
        web3.eth.getAccounts((error, accounts) => {
          const account = accounts[0];
          showPortis.innerHTML = account;
        });
      });

    }


    return(
      <>
      <h3>Cuenta Metamask:</h3>
      <span class="showAccount">
        <button className="botones enableEthereumButton" onClick={connect}>Iniciar Sesión</button>
      </span>
      <h3>Cuenta Portis:</h3>
      <span className="showPortis">
        <button className="botones enableButtonPortis" onClick={connectportis}>Inicia Sesión</button>
      </span>
      </>
    );
}
 
export default Cuenta;