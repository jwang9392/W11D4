import React from 'react';
import { Link } from 'react-router-dom';

const Greeting = ({ currentUser, logout }) => {
  debugger
  return currentUser ? (
    <div>
      <h2>Hi, {currentUser.username}!</h2>
      <button onClick={logout}>Log Out</button>
    </div>
  ) : (
      <nav>
        <Link to="/login">Login</Link>
        <br />
        <Link to="/signup">Sign up!</Link>
      </nav>
    );
};


export default Greeting;
