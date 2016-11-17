import React from 'react';

import Header from '../components/Header';
import Menu from '../components/Menu';
import Footer from '../components/Footer';

export default class App extends React.Component {
  render() {
    return (
      <div className="main">
        <Header>
          <Menu />
        </Header>
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
