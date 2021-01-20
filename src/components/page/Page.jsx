import React, { Component } from 'react'

export default class Page extends Component {
  render() {
    return (
      <div className="content-wrapper">
        {this.props.children}
      </div>
    );
  }
}
