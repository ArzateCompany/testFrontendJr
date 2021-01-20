import React, { Component } from 'react'

export default class BoxHeader extends Component {
  render() {
    const cnRoot = ['box-header'];
    if(this.props.border) cnRoot.push('with-border')
    return (
      <div className={cnRoot.join(' ')}>
        {this.renderContent()}
      </div>
    );
  }

  renderContent() {
    if(this.props.title) {
      return (
        <div>
          <h3 className="box-title">{this.props.title}</h3>
          <div className="box-tools pull-right">
            {this.props.children}
          </div>
        </div>
      );
    } else {
      return (
        <div>
          {this.props.children}
        </div>
      );
    }
  }
}
