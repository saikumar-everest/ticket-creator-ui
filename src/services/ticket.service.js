import * as axios from 'axios';
import Logger from 'js-logger';

Logger.useDefaults();
const createTicketQuery = `
mutation Ticket($ticketInput: TicketInput!) {
    ticket(ticketInput: $ticketInput) {
      id,
      ticketManager,
      subject,
      status,
      priority,
      description
    }
  } 
`;
const fetchTicketsQuery = `
query Tickets($ticketManager: String!) {
  tickets(ticketManager: $ticketManager) {
    id,
    ticketManager,
    subject,
    status,
    priority,
    description
  }
}
`;

const instance = axios.create({
  baseURL: process.env.SERVER_URL,
  headers: {'Content-Type': 'application/json'},
});

export const create = async ticketInput => {
  const data = {
    variables: {ticketInput},
    query: createTicketQuery,
  };
  return instance.post('/graphql', data);
};

export const fetchTickets = async ticketManager => {
  const data = {
    variables: {ticketManager},
    query: fetchTicketsQuery,
  };
  return instance.post('/graphql', data);
};
