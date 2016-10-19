import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {

  render () {
    return (
      <div>
        <h1>My Plate App</h1>
        <ul>
          <li><Link to="/menu">Menu</Link></li>
          <li><Link to="/plate">Plate</Link></li>
          {/* todo: there should be two links here, one to your menu and one to your plate*/}
        </ul>
        <div>
        { this.props.children }
           {/* todo: this is where either menu or plate should render, depending on the url*/}
        </div>
      </div>
    );
  }
}
