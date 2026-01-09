import React, { useState } from 'react';

const Selection = ({ applyColor }) => {
  const [style, setStyle] = useState({
    background: '',
    height: '120px',
    width: '120px'
  });

  return (
    <div
      className="fix-box"
      style={style}
      onClick={() => applyColor(setStyle)}
    >
    </div>
  );
};

export default Selection;
