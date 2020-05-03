import React from 'react';
import {Link} from 'gatsby';
import Button from 'react-bootstrap/Button';

const IndexPage = () => (
  <div>
    <p>
      <Link to="/create-ticket">Create a ticket</Link>
    </p>
  </div>
);

export default IndexPage;
