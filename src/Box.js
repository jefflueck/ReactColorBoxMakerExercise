import React from 'react';
import './Box.css';

const Box = ({ id, backgroundColor, width, height, handleRemove }) => {
  const remove = () => handleRemove(id);
  return (
    <div>
      <div
        className="Box"
        style={{
          id: { id },
          handleRemove,
          backgroundColor,
          width: `${width}px`,
          height: `${height}px`,
        }}
      ></div>
      <button className="Box-Button" onClick={remove}>
        ❌
      </button>
    </div>
  );
};

export default Box;
