import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div>
      <main className="main">
    <h1>404 - Not Found!</h1>
    <Link to="/">
      Go Home
    </Link>
    </main>
  </div>
);

export default NotFound;