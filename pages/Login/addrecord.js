import React, { Component } from 'react';
import { Card, Button,Input ,Message,Form,Segment} from 'semantic-ui-react';
import record from '../../ethereum/record';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';


class AddRecord extends Component {
    state = {
      patientname: '',
      doctorname:'',
      hospitalname: '',
      visitreason:'',
      admissiondate:'',
      dischargedate:'',
      prescription:'',
      surgicalhistory:'',
      errorMessage: '',
      loading: false
    };
  
    onSubmit = async event => {
      event.preventDefault();
  
      this.setState({ loading: true, errorMessage: '' });
  
      try {
        const accounts = await web3.eth.getAccounts();
        await record.methods
          .addRecord(this.state.patientname,
                     this.state.doctorname,
                     this.state.hospitalname,
                     this.state.visitreason,
                     this.state.admissiondate,
                     this.state.dischargedate,
                     this.state.prescription,
                     this.state.surgicalhistory)
          .send({
            from: accounts[0]
          });
  
        Router.pushRoute('/Login/patient_log');
      } catch (err) {
        this.setState({ errorMessage: err.message });
      }
  
      this.setState({ loading: false });
    };
  
    render() {
      return (
            <Layout>
            <Segment style={{ marginTop: '10px' }}>

            <h3 style={{color:'#F1837F' }}>Add Your Record</h3>
  
            <Form  error={!!this.state.errorMessage} onSubmit={this.onSubmit}>
                 <Form.Field>
                    <label>Patient Name:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.patientname}
                            onChange={event =>
                            this.setState({ patientname: event.target.value })}
                        />
                  </Form.Field>
                  
                  <Form.Field>
                    <label>Doctor Name:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.doctorname}
                            onChange={event =>
                            this.setState({ doctorname: event.target.value })}
                        />
                  </Form.Field>

                  <Form.Field>
                    <label>Hospital Name:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.hospitalname}
                            onChange={event =>
                            this.setState({ hospitalname: event.target.value })}
                        />
                  </Form.Field>

                  <Form.Field>
                    <label>Disease:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.visitreason}
                            onChange={event =>
                            this.setState({ visitreason: event.target.value })}
                        />
                  </Form.Field>

                  <Form.Field>
                    <label>Admission Date:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.admissiondate}
                            onChange={event =>
                            this.setState({ admissiondate: event.target.value })}
                        />
                  </Form.Field>

                  <Form.Field>
                    <label>Discharge Date:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.dischargedate}
                            onChange={event =>
                            this.setState({ dischargedate: event.target.value })}
                        />
                  </Form.Field>

                  <Form.Field>
                    <label>Prescription Details:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.prescription}
                            onChange={event =>
                            this.setState({ prescription: event.target.value })}
                        />
                  </Form.Field>

                  <Form.Field>
                    <label>Surgical Details:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.surgicalhistory}
                            onChange={event =>
                            this.setState({ surgicalhistory: event.target.value })}
                        />
                  </Form.Field>

                  {/* <Form.Field>
                    <label>Tests Details:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.testhistory}
                            onChange={event =>
                            this.setState({ testhistory: event.target.value })}
                        />
                  </Form.Field>

                  <Form.Field>
                    <label>Suggestion by Doctor:</label>
                        <Input
                            labelPosition="right"
                            value={this.state.report}
                            onChange={event =>
                            this.setState({ report: event.target.value })}
                        />
                  </Form.Field> */}

                    <Message error header="Oops!" content={this.state.errorMessage} />
                    <Button loading={this.state.loading} 
                     primary>Submit!</Button>
            </Form>
            </Segment>
            </Layout>
      );
    }
  }
  
  export default AddRecord;
  