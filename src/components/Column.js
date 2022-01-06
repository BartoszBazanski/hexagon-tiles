import React from 'react';

import Hex from './Hex';

export default function Column({ number }) {
  const hexArray = [...Array(21).keys()];
  const isNumber = number && typeof number === 'number';
  const className = `column ${isNumber && `column--${number}`}`;

  return (
    <div className={className}>
      {hexArray.map((key) => (
        <Hex key={`${number-key}`} />
      ))}
    </div>
  )
}
