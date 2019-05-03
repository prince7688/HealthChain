import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {

      web3 = new Web3(ethereum);
        try {
             ethereum.enable();
        } catch (error) {
        }
    }

 
 else {
  const provider = new Web3.providers.HttpProvider(
    'https://rinkeby.infura.io/v3/10ffd876918648e1b407307e77526121'
  );
  web3 = new Web3(provider);
}



export default web3;