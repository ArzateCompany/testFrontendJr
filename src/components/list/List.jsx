import React, { Component } from 'react'

const ulStyle = {
  listStyle: 'none',
  paddingLeft: '20px',
  fontStyle: 'italic',
}

export default class List extends Component {
  renderCheckboxList(instructions) {
    return instructions.map((item, index) => {
      return (
        <div className="checkbox" key={index}>
          <label><input type="checkbox" value="" />{item}</label>
        </div>
      );
    });
  }

  renderList(instructions) {
    return instructions.map((item, index) => {
      return (
        <li key={index}><label><i className='fa fa-check-square-o' /> {item}</label></li>
      );
    });
  }

  render() {
    if(this.props.type === 'checkbox') {
      return (
        this.renderCheckboxList(this.props.list)
      );
    } else {
      return (
        <ul style={ulStyle}>
          {this.renderList(this.props.list)}
        </ul>
      );
    }
    
  }
}

List.defaultProps = {
  list: [],
  type: 'icon'
}