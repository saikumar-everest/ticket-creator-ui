import React from 'react';
import Card from 'react-bootstrap/Card';

const viewTicket = ticket => {
  return (
    <Card key={ticket}>
      <Card.Body>
        <Card.Title>{`${ticket.ticketManager}: ${ticket.subject}`}</Card.Title>
        <Card.Text>{ticket.description}</Card.Text>
      </Card.Body>
    </Card>
  );
};

export default ({tickets}) => {
  return <section>{tickets.map(ticket => viewTicket(ticket))}</section>;
};
