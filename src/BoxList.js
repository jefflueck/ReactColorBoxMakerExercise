import React, { useState } from 'react';
import Box from './Box';
import NewBoxForm from './NewBoxForm';
import { v4 as uuidv4 } from 'uuid';
import './BoxList.css';

const BoxList = () => {
  const initialState = [];
  const [box, setBoxes] = useState(initialState);
  const addBox = (newBox) => {
    setBoxes((box) => [...box, { ...newBox, id: uuidv4() }]);
    console.log(newBox);
  };
  // solution
  const remove = (id) => {
    setBoxes((boxes) => boxes.filter((box) => box.id !== id));
  };

  return (
    <div className="BoxList">
      <div className="NewBoxForm">
        <NewBoxForm addBox={addBox} />
      </div>
      <div className="Boxes">
        {box.map(({ id, backgroundColor, width, height }) => (
          <Box
            id={id}
            handleRemove={remove}
            backgroundColor={backgroundColor}
            width={width}
            height={height}
            key={id}
          />
        ))}
      </div>
    </div>
  );
};

export default BoxList;
