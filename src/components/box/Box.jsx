import React, { Component } from 'react'

export default class Box extends Component {
  render() {
    const cnRoot = ['box'];
    if(this.props.solid) cnRoot.push('box-solid');
    if(this.props.type) cnRoot.push(`box-${this.props.type}`);
    return (
      <div className={cnRoot.join(' ')}>
        {this.props.children}
      </div>
    );
  }
}

Box.defaultProps = {
  type: 'default'
}