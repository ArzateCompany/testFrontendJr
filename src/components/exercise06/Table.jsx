import React from 'react';

const Table = ({ children, width, height, columns, rows }) => {
  const style = {
    'display': 'grid',
    'gridColumnGap': '10px',
    'width': width,
    'height': height,
    'gridTemplateColumns': `repeat(8, 1fr)`,
    'gridTemplateRows': '1fr 40px',
  };

  return (
    <div className="table" style={style}>
      {children}
    </div>
  );
};

export default Table;