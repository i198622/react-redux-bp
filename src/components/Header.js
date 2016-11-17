import React from 'react';

export default class Header extends React.Component {
  render() {
    return(
      <header>
        <h3>Logo</h3>
        {this.props.children}
        <hr />
      </header>
    );
  }
}
