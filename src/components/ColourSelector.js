import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, classname, label } = config;

  return (
    <button
      className={classname} // apply CSS class
      onClick={() => selectNextBackground({ background })} // update selected color in parent
    >
      {label} {/* show the color name */}
    </button>
  );
}

export default ColourSelector;
