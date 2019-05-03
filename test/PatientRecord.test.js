const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const InterfacePatient = require('../ethereum/build/InterfacePatientRecords.json');
const PatientRecords = require('../ethereum/build/PatientRecords.json');


