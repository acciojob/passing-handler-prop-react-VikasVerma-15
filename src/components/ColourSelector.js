import React from 'react';

const ColourSelector = ({ config, selectNextBackground }) => {
  const { background, classname, label, key: colorKey } = config; // rename key to avoid React key shadowing

  return (
    <button
      className={classname}       // button styling
      data-testid={colorKey}      // Cypress will use this
      onClick={() => selectNextBackground({ background })}
    >
      {label}                     {/* display the color label */}
    </button>
  );
}

export default ColourSelector;
