import React from 'react';
import PropTypes from 'prop-types';
import './Navbar.css';

const Navbar = (props) => (
    <header>
      <h2><a>Memory Game</a></h2>
      <nav>
        <li><a onClick={props.onNewGame}>New Game</a></li>
      </nav>
    </header>
  );

export default Navbar;
