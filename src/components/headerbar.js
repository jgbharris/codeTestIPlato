import React, { Component } from 'react';

import {Nav, Navbar} from 'react-bootstrap'

import './headerbar.css'

export default class HeaderBar extends Component {
  render() {

    return (
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand href="#" className="custom-brand">Brewery Finder</Navbar.Brand>
      </Navbar>
    );
  }
}