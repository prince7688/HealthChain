import React, { Component } from 'react';
import { Card, Button,Header, Grid, Divider ,Message,Form,Segment,Input,Table} from 'semantic-ui-react';
import record from '../../ethereum/record';
import Layout from '../../components/Layout';
import { Link } from '../../routes';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class Patientlog extends Component {



  constructor(props) {
    super(props);
    this.state = {
        p_name: "",
        d_name:"",
        h_name:"",
        visit_reason:"",
        ad_date:"",
        dis_date:"",
        prescripion:"",
        sur_history:""
    };
}

  static async getInitialProps() {
    const patient_name = await record.methods.patient_name().call();
    const patient_address = await record.methods.patient_address().call();

    console.log(patient_address);
    return { patient_name , patient_address };

}
state = {
    errorMessagePatient: '',
    loadingPatient: false,
    loadingrecord:false,
    errorrecord:'',
    recordno:'',
    visible:false
  };

  removePatient = async event => {
    event.preventDefault();

    this.setState({ loadingPatient: true, errorMessagePatient: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await record.methods
        .removePatient(this.props.patient_name)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessagePatient: err.message });
    }

    this.setState({ loadingPatient: false });
  };



  
  onSubmitrecord = async event => {
    event.preventDefault();

    this.setState({ loadingrecord: true, errorrecord: '' });

    try {
      const accounts = await web3.eth.getAccounts();
       const record_summary  = await record.methods
        .getRecordByPatient(this.state.recordno).call({from:accounts[0]});

        const pres_summary  = await record.methods
        .getPrescriptionByPatient(this.state.recordno).call({from:accounts[0]});
        
       this.setState({visible:true});

       this.setState({
        p_name: record_summary[0],
        d_name:record_summary[1],
        h_name:record_summary[2],
        visit_reason:record_summary[3],
        ad_date:pres_summary[0],
        dis_date:pres_summary[1],
        prescripion:pres_summary[2],
        sur_history:pres_summary[3]
    })  
      
      

      //console.log(pres_summary[1]);

      // return ({p_name:summary[0]});
        

      //Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorrecord: err.message });
    }
    this.setState({ loadingrecord: false });
   
  };



render()
{
    // const items = [ 
    //     'Drafts will now auto-save while writing',
    //   ]

    return (
         <Layout>
           <Segment style={{ marginTop: '10px' ,color:'#6A89CC' }}>
                <Message >
                    <Grid>
                    <Grid.Row>
                    <Grid.Column width={5}>
                    <Message.Header>WELCOME {this.props.patient_name}</Message.Header>
                    <p>{this.props.patient_address}</p>
                    </Grid.Column>
                   
                    <Grid.Column width={3} style={{ marginLeft: '100px'}}>
                       <Link route="/">
                          <a>
                            <Button
                              content="Home"
                              icon="home"
                              primary
                            />
                          </a>
                       </Link>
                       </Grid.Column>

                       <Grid.Column width={3}>

                       <Link route="/Login/addrecord">
                          <a>
                            <Button
                              content="Add Record"
                              icon="add circle"
                              primary
                            />
                          </a>
                       </Link>
                       </Grid.Column>

                       

                       <Grid.Column width={3}>
                             <Form onSubmit={this.removePatient} error={!!this.state.errorMessagePatient}>

                            <Button
                                loading={this.state.loadingPatient}
                                content="Remove Account"
                                icon ="remove circle"
                                primary
                            />
                            <Message error header="Oops!" content={this.state.errorMessagePatient} />
                            </Form>
                       </Grid.Column>
                   </Grid.Row>
               </Grid>
                    
                </Message>
                   
               <Divider section />
               <h3>Want to see your past records..??</h3>
               <Form onSubmit={this.onSubmitrecord} error={!!this.state.errorrecord}>
                <Form.Field>
                  <label>Record Number:</label>
                  <Input
                    labelPosition="right"
                    value={this.state.recordno}
                    onChange={event =>
                      this.setState({ recordno: event.target.value })}
                  />
                </Form.Field>

                <Message error header="Oops!" content={this.state.errorrecord} />
                <Button loading={this.state.loadingrecord} primary>
                  Submit!
                </Button>
        </Form>
        <Divider section />
                      
        { this.state.visible && (

        <Table style={{ width:'10'}} >
          <Table.Body>
             <Table.Row>
            <Table.Cell collapsing><b>Patient Name:</b></Table.Cell>
            <Table.Cell>{this.state.p_name}</Table.Cell>
             </Table.Row>

          <Table.Row>
            <Table.Cell><b>Doctor Name:</b></Table.Cell>
            <Table.Cell>{this.state.d_name}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><b>Hospital Name:</b></Table.Cell>
            <Table.Cell>{this.state.h_name}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><b>Disease:</b></Table.Cell>
            <Table.Cell>{this.state.visit_reason}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><b>Admission Date:</b></Table.Cell>
            <Table.Cell>{this.state.ad_date}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><b>Discharge Date:</b></Table.Cell>
            <Table.Cell>{this.state.dis_date}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><b>Prescription Details:</b></Table.Cell>
            <Table.Cell>{this.state.prescripion}</Table.Cell>
          </Table.Row>

          <Table.Row>
            <Table.Cell><b>Surgical Details:</b></Table.Cell>
            <Table.Cell>{this.state.sur_history}</Table.Cell>
          </Table.Row>
    
          </Table.Body>
          </Table>
        
        
        ) }
            </Segment>
     </Layout>
    );
}
}
export default Patientlog;