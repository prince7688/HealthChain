import web3 from './web3';
import PatientRecords from './build/PatientRecords.json';

const instance =  new web3.eth.Contract(
   JSON.parse(PatientRecords.interface),
   '0x6849F1A4071f13A26152a55E09C2242D1068Df03'
);
export default instance;