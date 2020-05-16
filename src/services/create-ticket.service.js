import * as axios from 'axios';
import Logger from 'js-logger';

Logger.useDefaults();
const createTicketQuery = `
mutation Ticket($ticketInput: TicketInput!) {
    ticket(ticketInput: $ticketInput) {
      id,
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
