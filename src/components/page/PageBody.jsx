import React, { Component } from 'react'

export default class PageBody extends Component {
  render() {
    return (
      <section className="content">
        {this.props.children}
      </section>
    );
  }
}
