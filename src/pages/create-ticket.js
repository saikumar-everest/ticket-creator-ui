import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {graphql} from 'gatsby';
import {create} from '../services/create-ticket.service';

export const supportingTicketManagersQuery = graphql`
  query {
    site {
      siteMetadata {
        supportingTicketManagers
      }
    }
  }
`;

export default class CreateTicket extends Component {
  state = {
    ticketManager: this.props.data.site.siteMetadata.supportingTicketManagers[0],
    subject: '',
    description: '',
    email: '',
  };

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = event => {
    event.preventDefault();
    // console.log(`${this.state.description}/${this.state.subject}/${this.state.email}/${this.state.ticketManager}`);
    const {ticketManager, subject, description, email} = this.state;
    const ticketInput = {
      ticketManager,
      subject,
      description,
      email,
    };
    create(ticketInput);
  };

  renderTicketManagers = () => {
    const {supportingTicketManagers} = this.props.data.site.siteMetadata;
    var options = supportingTicketManagers.map(manager => (
      <option key={manager} value={manager}>
        {manager.charAt(0).toUpperCase() + manager.slice(1)}
      </option>
    ));
    return (
      <Form.Group controlId="createTicketForm.ticketManager">
        <Form.Label>Ticket Manager</Form.Label>
        <Form.Control
          as="select"
          name="ticketManager"
          onChange={this.handleInputChange}
          value={this.state.ticketManager}
        >
          {options}
        </Form.Control>
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
            <Form.Control
              type="text"
              name="subject"
              value={this.state.subject}
              onChange={this.handleInputChange}
              placeholder="Printer not working!"
            />
          </Form.Group>
          <Form.Group controlId="createTicketForm.email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={this.state.email}
              onChange={this.handleInputChange}
              placeholder="name@example.com"
            />
          </Form.Group>
          <Form.Group controlId="createTicketForm.description">
            <Form.Label>Description</Form.Label>
            <Form.Control
              as="textarea"
              rows="3"
              name="description"
              value={this.state.description}
              onChange={this.handleInputChange}
            />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </section>
    );
  }
}
