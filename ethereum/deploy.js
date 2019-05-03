const HDWalletProvider =  require('truffle-hdwallet-provider');
const Web3 = require('web3');
const PatientRecords = require('./build/PatientRecords.json');

const  provider = new HDWalletProvider(
  'round creek almost tobacco torch crime final virtual talent fix source genius' ,
  'https://rinkeby.infura.io/v3/10ffd876918648e1b407307e77526121'
);

const web3  =  new Web3(provider);

const deploy = async () => {

  const accounts =  await web3.eth.getAccounts();

  console.log('Attemping to deploy contract to account', accounts[0]);

  const result =  await  new web3.eth.Contract(JSON.parse(PatientRecords.interface))
        .deploy({data : PatientRecords.bytecode })
        .send({ gas: '4000000' ,  from : accounts[0] });
    
  //console.log(PatientRecords.interface);

  console.log('contract deploy to the ' , result.options.address);
};
deploy();
