import React from 'react';
import { Link, browserHistory } from 'react-router'

export default class Menu extends React.Component {
  render() {
    return (
      <nav className="menu">
        <Link to="/first" activeClassName={'active'}>First view</Link>
        <Link to="/second" activeClassName={'active'}>Second view </Link>
        <Link to="/third" activeClassName={'active'}>Third view</Link>
      </nav>
    );
  }
}
