import React from 'react';

const TableBar = ({ height }) => {
  const style = {
    'width': '100%',
    'height': `${height}%`,
    'backgroundColor': 'pink',
    'alignSelf': 'end'
  }
  return (
    <div className="table__bar" style={style}>
    </div>
  )
}

export default TableBar;
