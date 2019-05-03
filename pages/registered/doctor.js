import React, { Component } from 'react';
import { Form, Button, Input, Message } from 'semantic-ui-react';
import Layout from '../../components/Layout';
import record from '../../ethereum/record';
import web3 from '../../ethereum/web3';
import { Router } from '../../routes';

class PatientNew extends Component {
  state = {
    name: '',
    errorMessage: '',
    loading: false
  };

  onSubmit = async event => {
    event.preventDefault();

    this.setState({ loading: true, errorMessage: '' });

    try {
      const accounts = await web3.eth.getAccounts();
      await record.methods
        .addDoctor(this.state.name)
        .send({
          from: accounts[0]
        });

      Router.pushRoute('/');
    } catch (err) {
      this.setState({ errorMessage: err.message });
    }

    this.setState({ loading: false });
  };

  render() {
    return (
      <Layout>
        <h3 style={{ marginTop: '10px' ,color:'#F1837F' }}>Registered as a Doctor</h3>

        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
          <Form.Field>
            <label>Enter Your Name</label>
            <Input
              labelPosition="right"
              value={this.state.name}
              onChange={event =>
                this.setState({ name: event.target.value })}
            />
          </Form.Field>

          <Message error header="Oops!" content={this.state.errorMessage} />
          <Button loading={this.state.loading} primary>
            Registered!
          </Button>
        </Form>
      </Layout>
    );
  }
}

export default PatientNew;
