import React, { Component } from 'react';

import {Nav, Navbar} from 'react-bootstrap'

import './headerbar.css'

export default class HeaderBar extends Component {
  render() {

    return (
      <Navbar expand="lg" className="navbar-custom">
        <Navbar.Brand href="#" className="custom-brand">Brewery Finder</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end col">
          <Nav>
            <Nav.Link className="custom-link" href="https://github.com/jgbharris/codeTestIPlato" target="_blank">Repo Link</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}