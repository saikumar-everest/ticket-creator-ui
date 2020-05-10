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

export const create = async ticketInput => {
  const instance = axios.create({
    baseURL: 'http://localhost:3000',
    headers: {'Content-Type': 'application/json'},
  });
  const data = {
    variables: {
      ticketInput,
    },
    query: createTicketQuery,
  };
  instance
    .post('/graphql', data)
    .then(res => Logger.debug(res))
    .catch(err => Logger.error(err));
};
