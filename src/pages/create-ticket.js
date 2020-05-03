import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {supportingTicketManagers} from '../constants/supporting-ticket-manager';

export default class CreateTicket extends Component {
  //   state = {
  //     ticketManager: '',
  //     subject: '',
  //     description: '',
  //     email: '',
  //   };

  //   handleInputChange = event => {
  //     this.setState({[event.target.name]: event.target.value});
  //   };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(`${this.state.description}/${this.state.subject}/${this.state.email}/${this.state.ticketManager}`);
  };

  renderTicketManagers = () => {
    var options = supportingTicketManagers.map(manager => (
      <option key={manager} value={manager}>
        {manager.charAt(0).toUpperCase() + manager.slice(1)}
      </option>
    ));
    return (
      <Form.Group controlId="createTicketForm.ticketManager">
        <Form.Label>Ticket Manager</Form.Label>
        <Form.Control as="select">{options}</Form.Control>
      </Form.Group>
    );
  };

  render() {
    return (
      <section>
        <Form className="m-5" onSubmit={this.handleSubmit}>
          {this.renderTicketManagers()}
          <Form.Group controlId="createTicketForm.subject">
            <Form.Label>Subject</Form.Label>
            <Form.Control type="text" placeholder="Printer not working!" />
          </Form.Group>
          <Form.Group controlId="createTicketForm.email">
            <Form.Label>Email</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" />
          </Form.Group>
          <Form.Group controlId="createTicketForm.description">
            <Form.Label>Description</Form.Label>
            <Form.Control as="textarea" rows="3" />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </section>
    );
  }
}
