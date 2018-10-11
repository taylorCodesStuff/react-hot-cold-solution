import React from 'react';

import './top-nav.css';
import { resetGame } from '../actions';
import { connect } from 'react-redux';

export function TopNav(props) {
  return (
    <nav>
      <ul className="clearfix">
        <li>
          <a 
            href="#what" 
            className="what"
            aria-label="How to play"
          >
            What?
          </a>
        </li>
        <li>
          <a
            href="#feedback"
            className="new"
            aria-label="Start a new game"
            onClick={() => props.dispatch(resetGame(Math.round(Math.random() * 100) + 1))}
          >
            + New Game
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default connect()(TopNav);