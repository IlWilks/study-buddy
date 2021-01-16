import React, { useState, } from 'react';

const PointCounter = () => {
  // Declare a new state variable, which we'll call "count"
  const [points, setPoints] = useState(0);

  return (
    <div>
      <span> Comment Points: {points}  </span>
      <button onClick={() => setPoints(points + 1)}>
        Add Points
      </button>
    </div>
  );
}

export default PointCounter;
