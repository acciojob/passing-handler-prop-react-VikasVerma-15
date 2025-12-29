import React from 'react';

const ColourSelector = (props) => {
  const { config, selectNextBackground } = props;
  const { background, classname, label } = config; // include classname and label

  return (
    <button
      className={classname} // use actual classname
      onClick={() => selectNextBackground({ background })}
    >
      {label} {/* display the label */}
    </button>
  );
}

export default ColourSelector;
