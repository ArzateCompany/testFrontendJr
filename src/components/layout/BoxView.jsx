import React, { Component } from 'react'
import Box from '../box/Box';
import BoxBody from '../box/BoxBody';
import BoxHeader from '../box/BoxHeader';

export default class BoxView extends Component {
  render() {
    return (
      <Box>
        <BoxHeader title={this.props.title} />
        <BoxBody>
          {this.props.children}
        </BoxBody>
      </Box>
    );
  }
}
