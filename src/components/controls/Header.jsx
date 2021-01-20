import React, { Component } from 'react'
import { Link } from 'react-router-dom';

export default class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <Link className="logo" to="/">
          <span className="logo-lg">{this.props.title}</span>
        </Link>
        <nav className="navbar navbar-static-top" role="navigation">
          <div className="navbar-custom-menu">
            {this.props.children}
          </div>
        </nav>
      </header>
    );
  }
}
