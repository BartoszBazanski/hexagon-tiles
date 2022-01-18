import classnames from 'classnames';
import React from 'react';

import Hex from './Hex';

export default function Column({ colNumber, componentNumber = 23, component = Hex, className }) {
  const hexArray = [...Array(componentNumber).keys()];
  const isNumber = colNumber && typeof colNumber === 'number';
  const classNames = classnames('column', className, {
    [`column--${colNumber}`]: isNumber,
  });
  const Component = component;

  return (
    <div className={classNames}>
      {hexArray.map((key) => (
        <Component key={`${colNumber}-${key}`} />
      ))}
    </div>
  )
}
