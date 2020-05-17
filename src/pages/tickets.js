import React from 'react';
import ViewTicket from '../components/view-ticket';

export default ({location}) => {
  if (location.state?.tickets) {
    return <ViewTicket tickets={location.state.tickets} />;
  }
  return <div></div>;
};
