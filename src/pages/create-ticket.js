import React, {Component} from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import {graphql, Link} from 'gatsby';
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
    createdSuccessfully: null,
    response: {},
  };

  handleInputChange = event => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = async event => {
    event.preventDefault();
    const {ticketManager, subject, description, email} = this.state;
    const {
      data: {data, errors},
    } = await create({ticketManager, subject, description, email});

    this.setState({
      createdSuccessfully: this.isCreatedSuccessfully(data, errors),
      response: {
        data: {
          ticket: {...data.ticket, ticketManager},
        },
        errors,
      },
    });
  };

  isCreatedSuccessfully(data, errors) {
    return !!data?.ticket || !errors?.length;
  }

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

  errorInCreation = errorMessage => {
    return (
      <div className="alert alert-danger" role="alert">
        Some error in creation: {errorMessage}
      </div>
    );
  };

  successInCreation = ticket => {
    return (
      <section>
        <div className="alert alert-success" role="alert">
          Ticket successfully created!
          <Link className="ml-5" to="/tickets" state={{tickets: [ticket]}}>
            View tickets
          </Link>
        </div>
      </section>
    );
  };

  createActionMessage = () => {
    if (this.state.createdSuccessfully) {
      return this.successInCreation(this.state.response.data.ticket);
    }
    if (this.state.createdSuccessfully === null) {
      return;
    }
    return this.errorInCreation(this.state.response.errors?.[0]?.message);
  };

  render() {
    return (
      <section>
        {this.createActionMessage()}
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
              required
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
              required
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
              required
            />
          </Form.Group>
          <Button type="submit">Create</Button>
        </Form>
      </section>
    );
  }
}
