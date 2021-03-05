import React from 'react';

const Cover = ({ setPlaying }) => {
  return (
    <div>
      <button onClick={() => setPlaying((playing) => true)}>play</button>
    </div>
  );
};

export default Cover;
