pragma solidity ^0.4.17;

contract InterfacePatientRecords {
    function addDoctor(string _doctor_name) public;

     
    function removeDoctor(string _doctor_name) public;

    function addPatient(string _patient_name) public;

    function removePatient(string _patient_name) public;


    function addRecord
        (
        string _patient_name,
        string _doctor_name,
        string _hospital_name,
        string _visitReason,
        string _admissionDate,
        string _dischargeDate,
        string _prescription,
        string _surgical_history
        )public;

    

    function getRecordByPatient(uint256 _recordNumber) public view returns
            (
                
           string,
           string,
            string,
            string
            
            );
            
            
       function getPrescriptionByPatient(uint256 _recordNumber) public view returns
            (
                
            string,
            string,
            string,
            string
            );
            
    
    function getRecordByDoctor(uint256 _recordNumber, address _patient_Address) 
            public view returns
            (
                
             string,
            string,
            string,
            string
            );
            
        function getPrescriptionByDoctor(uint256 _recordNumber, address _patient_Address) 
            public view returns
            (
                
             string,
            string,
            string,
            string
            );

}


contract PatientRecords is InterfacePatientRecords
{


    uint constant public MAX_COUNT = 50;

    uint256 public total_patients=0;
    uint256 public total_doctors=0;
    uint256 public recordCount = 0;
    
    mapping (address => bool) public isPatient;
    mapping (address => bool) public isDoctor;
    mapping (uint256 => mapping (address => Records)) records;
    mapping (address => Patient_info) public patients;
    mapping (address => Doctor_info) public doctors;
    mapping (address => mapping (string => uint256)) mappingByName;

    address public patient_address;
    string public patient_name;
    string public doctor_name;
    
    struct Patient_info {
        string _patient_name;
        uint256 _patient_record;
    }
    
     struct Doctor_info {
        string _doctor_name;
    }
   
   

    struct Records {
        string _patient_name;
        string _doctor_name;
        string _hospital_name;
        string _visitReason;
        string _admissionDate;
        string _dischargeDate;
        string _prescription;
        string _surgical_history;
    }


    modifier doctorDoesNotExist(address doctor) {
        require(!isDoctor[doctor]);
        _;
    }

    modifier doctorExist(address doctor) {
        require(isDoctor[doctor]);
        _;
    }

    modifier patientDoesNotExist(address patient) {
        require(!isPatient[patient]);
        _;
    }

     modifier patientExist(address patient) {
        require(isPatient[patient]);
        _;
    }
    
    modifier notNull(string _name) {
        require(bytes(_name).length > 0);
        _;
    }

    modifier recordExists(uint256 _recordNumber, address _patientAddress) {
          require(patients[_patientAddress]._patient_record > _recordNumber);
          require(_recordNumber > 0);
        _;
    }


    function PatientRecords() public
    {
      
    }

   
    function addDoctor(string _doctor_name) public //onlyOwner
        doctorDoesNotExist(msg.sender)
        patientDoesNotExist(msg.sender)
        notNull(_doctor_name)
    {
        isDoctor[msg.sender] = true;
        doctors[msg.sender]._doctor_name = _doctor_name;
        total_doctors = total_doctors +1;
        //emit DoctorAddition(msg.sender);
    }

    function removeDoctor(string _doctor_name)
        public
        doctorExist(msg.sender)
    {
        isDoctor[msg.sender] = false;
        delete doctors[msg.sender];
         total_doctors = total_doctors - 1;
        //emit DoctorRemoval(msg.sender);
    }

    
    function addPatient(string _patient_name)
        public 
        patientDoesNotExist(msg.sender)
        doctorDoesNotExist(msg.sender)
        notNull(_patient_name)
    {
        isPatient[msg.sender] = true;
        patients[msg.sender]._patient_name = _patient_name;
        patients[msg.sender]._patient_record = 1;
        total_patients =  total_patients +1;
        //address _patient_Address = msg.sender;
        
       // emit PatientAddition(msg.sender);
    }


    function removePatient(string _patient_name)
        public
        patientExist(msg.sender)
    {
        isPatient[msg.sender] = false;
        uint256 current_record_count = patients[msg.sender]._patient_record;
        recordCount = recordCount - (current_record_count - 1 );
        delete patients[msg.sender];
        total_patients = total_patients - 1;
        //emit PatientRemoval(msg.sender);
    }

    function doctorlogin() public 
             doctorExist(msg.sender)
    {
        doctor_name = doctors[msg.sender]._doctor_name;

    }

    function patientlogin() public 
             patientExist(msg.sender)
    {
        patient_name = patients[msg.sender]._patient_name;
        patient_address = msg.sender;
        
    }

    function getreport() public view returns (uint256,uint256,uint256)
    {       
       return(
         total_patients,total_doctors, recordCount
       );
    }

    function addRecord (
        string _patient_name,
        string _doctor_name,
        string _hospital_name,
        string _visitReason,
        string _admissionDate,
        string _dischargeDate,
        string _prescription,
        string _surgical_history)
        public
        patientExist(msg.sender)
    {
        uint256 current_record_count = patients[msg.sender]._patient_record;
        records[current_record_count][msg.sender]._patient_name = _patient_name;
        records[current_record_count][msg.sender]._doctor_name = _doctor_name;
        records[current_record_count][msg.sender]._hospital_name = _hospital_name;
        records[current_record_count][msg.sender]._visitReason = _visitReason;
        records[current_record_count][msg.sender]._admissionDate = _admissionDate;
        records[current_record_count][msg.sender]._dischargeDate = _dischargeDate;
        records[current_record_count][msg.sender]._prescription = _prescription;
        records[current_record_count][msg.sender]._surgical_history = _surgical_history;
        
        patients[msg.sender]._patient_record++;

       // emit PatientRecordAdded(recordCount, _patientAddress);

        recordCount += 1;
    }

    
    
    
    function getRecordByPatient(uint256 _recordNumber) public
        patientExist(msg.sender)
        recordExists(_recordNumber,msg.sender)
        view
        returns
            (
                
            string,
            string,
            string,
            string
             
            )

            {
                    string memory  _patient_name = records[_recordNumber][msg.sender]._patient_name;
                    string memory _doctor_name = records[_recordNumber][msg.sender]._doctor_name;
                    string memory  _hospital_name = records[_recordNumber][msg.sender]._hospital_name;
                    string memory _visitReason = records[_recordNumber][msg.sender]._visitReason ;
                    //bytes32 prince = "pince"
                    //string memory _dischargeDate = records[_recordNumber][msg.sender]._dischargeDate;

                     return(_patient_name, _doctor_name,_hospital_name,_visitReason);
                
            }
            
            
    function getPrescriptionByPatient(uint256 _recordNumber) public
        patientExist(msg.sender)
        recordExists(_recordNumber,msg.sender)
        constant
        returns
            (
                
            string,
             string,
             string,
             string
            )
            {
                    string  memory _admissionDate =  records[_recordNumber][msg.sender]._admissionDate;
                    string  memory _dischargeDate = records[_recordNumber][msg.sender]._dischargeDate;
                    string  memory _prescription = records[_recordNumber][msg.sender]._prescription;
                    string   memory  _surgical_history = records[_recordNumber][msg.sender]._surgical_history;

                   return(_admissionDate,_dischargeDate,_prescription,_surgical_history);
            }
            
            
        function getRecordByDoctor(uint256 _recordNumber,address Address) public
        doctorExist(msg.sender)
        patientExist(Address)
        recordExists(_recordNumber,Address)
        constant
        returns
            (
                
            string,
            string,
            string,
            string
             
            )
            {
                   string  memory  _patient_name = records[_recordNumber][Address]._patient_name;
                    string  memory _doctor_name = records[_recordNumber][Address]._doctor_name;
                  string memory _hospital_name = records[_recordNumber][Address]._hospital_name;
                  string memory _visitReason = records[_recordNumber][Address]._visitReason ;
                  
                     
                    
                return(_patient_name, _doctor_name,_hospital_name,_visitReason);
            }
            
            
    function getPrescriptionByDoctor(uint256 _recordNumber,address Address) public
        doctorExist(msg.sender)
        patientExist(Address)
        recordExists(_recordNumber,Address)
        view
        returns
            (
             string,
            string,
            string,
            string
            )
            {
                     string memory _admissionDate =  records[_recordNumber][Address]._admissionDate;
                     string memory _dischargeDate =  records[_recordNumber][Address]._dischargeDate;
                     string memory _prescription = records[_recordNumber][Address]._prescription;
                     string memory _surgical_history = records[_recordNumber][Address]._surgical_history;
        

                     return(_admissionDate,_dischargeDate,_prescription,_surgical_history);
            }
            
            
    

}
