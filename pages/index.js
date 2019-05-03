import React, { Component } from 'react';
import { Card ,Button,Grid,Form,Message} from 'semantic-ui-react';
import Layout from '../components/Layout';
import record from '../ethereum/record';
import { Link } from '../routes';
import web3 from '../ethereum/web3';
import { Router } from '../routes';

class RecordShow extends Component {
static
async getInitialProps(props) {

    const summary = await record.methods.getreport().call();

    return {
      total_patients: summary[0],
      total_doctors: summary[1],
      record_count: summary[2],
    };
  }

 
  state = {
    errorMessagePatient: '',
    loadingPatient: false,
    errorMessageDoctor: '',
    loadingPatientDoctor: false
   
  };

  onSubmitPatient = async event => {
    event.preventDefault();

    this.setState({ loadingPatient: true, errorMessagePatient: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await record.methods
        .patientlogin()
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/Login/patient_log');
    } catch (err) {
      this.setState({ errorMessagePatient: err.message });
    }

    this.setState({ loadingPatient: false });
  };



  onSubmitDoctor = async event => {
    event.preventDefault();

    this.setState({ loadingDoctor: true, errorMessageDoctor: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await record.methods
        .doctorlogin()
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/Login/doctor_log');
    } catch (err) {
      this.setState({ errorMessageDoctor: err.message });
    }

    this.setState({ loadingDoctor: false });
  };



  renderCards() {
    const {
      total_patients,
      total_doctors,
      record_count
    } = this.props;

    const items = [
      {
        header: total_patients,
        meta: 'Number of Patients',
        description:
          'Patients in our Network',
        style: { overflowWrap: 'break-word' }
      },
      {
        header: total_doctors,
        meta: 'Number of doctors',
        description:
          'Doctors in our Network'
      },
      {
        header: record_count,
        meta: 'Number of Records',
        description:
          'Total registered records'
      }
    ];

    return <Card.Group items={items} />;
}

render() {
   return (
      <Layout>
          <h3 style={{ marginTop: '10px' ,color:'#F1837F' }}>Health Chain</h3>
          <Grid>

          <Grid.Row>
            <Grid.Column width={10}>{this.renderCards()}</Grid.Column>
               
            <Grid.Column width={6}>
                 <Link route="/registered/patient">
                  <a>
                    <Button
                      content="Registered as a Patient"
                      icon="add circle"
                      primary
                     />
                  </a>
                  </Link>


                  <Link route="/registered/doctor">
                  <a>
                    <Button style={{ marginTop: '20px'}}
                      content="Registered as a Doctor"
                      icon="add circle"
                      primary
                     />
                  </a>
                  </Link>

             </Grid.Column>
          </Grid.Row>  

             <Grid.Row>
               <Grid.Column>
                    <Form onSubmit={this.onSubmitPatient} error={!!this.state.errorMessagePatient}>

                    <Button
                        loading={this.state.loadingPatient}
                        content="Patient Login"
                        primary
                      />
                      <Message error header="Oops!" content={this.state.errorMessagePatient} />
                    </Form>
                      
               </Grid.Column>
              </Grid.Row>

              <Grid.Row>
                <Grid.Column>
                    
                <Form onSubmit={this.onSubmitDoctor} error={!!this.state.errorMessageDoctor}>
                    
                    <Button
                        loading={this.state.loadingDoctor}
                        content="Doctor Login"
                        primary
                      />
                      <Message error header="Oops!" content={this.state.errorMessageDoctor} />
                    </Form>
               </Grid.Column>
              </Grid.Row>

          </Grid>
      </Layout>
);
}
}

export default RecordShow;