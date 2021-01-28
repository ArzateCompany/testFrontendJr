import React from 'react';

const TableYTag = ({ textValue, position }) => {
  const style = {
    'gridColumn': 1,
    'gridRow': position,
    'textAlign': 'center'
  }
  return (
    <div style={style}>{textValue}</div>
  );
}

export default TableYTag;