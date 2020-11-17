import React, { useState } from "react";

export const List = ({ name }) => {
  const [count, setCount] = useState(1);
  const onIncrementMinus = () => {
    setCount(count - 1);
  };
  const onIncrementPlas = () => {
    4;
    setCount(count + 1);
  };

  return (
    <div className="pages">
      <button className="previos" onClick={onIncrementMinus}>
        previos
      </button>
      <div>{count - 1}</div>
      <div>{count}</div>
      <div>{count + 1}</div>
      <button className="next" onClick={onIncrementPlas}>
        next
      </button>
    </div>
  );
};
