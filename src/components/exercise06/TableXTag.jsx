import React from 'react';

const TableXTag = ({ textValue, position }) => {
  const style = {
    'display': 'inline'
  }
  return (
    <div style={style}>{textValue}</div>
  );
}

export default TableXTag;