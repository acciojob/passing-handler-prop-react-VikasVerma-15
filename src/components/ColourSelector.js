import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config; // destructure correctly

  return (
    <button
      className={classname} // use the destructured classname from config
      onClick={() => selectNextBackground({ background })}
    >
      {label} {/* display the label */}
    </button>
  );
}

export default ColourSelector;
