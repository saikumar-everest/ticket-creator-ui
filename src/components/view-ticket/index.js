import React, {Component} from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import {fetchTickets} from '../../services/ticket.service';

const viewTicket = ticket => {
  return (
    <Card key={ticket.id}>
      <Card.Body>
        <Card.Title>{`${ticket.ticketManager}: ${ticket.subject}`}</Card.Title>
        <Card.Text>{ticket.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default class ViewTicket extends Component {
  state = {
    tickets: this.props.tickets,
  };

  viewTickets = tickets => {
    return (
      <section>
        <div>
          <Button
            className="primary"
            style={{width: '-webkit-fill-available'}}
            onClick={() => this.loadAllTickets(tickets[0].ticketManager)}
          >
            View all
          </Button>
        </div>
        {tickets.map(ticket => viewTicket(ticket))}
      </section>
    );
  };

  loadAllTickets = async ticketManager => {
    const {
      data: {data},
    } = await fetchTickets(ticketManager);
    this.setState({tickets: data.tickets});
  };

  render() {
    return this.viewTickets(this.state.tickets);
  }
}
