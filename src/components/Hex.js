import React, { useContext, useEffect, useState } from 'react';
import { AppContext } from '../App';
import greenTilePattern from '../green-tile.png';
import woodenTilePattern from '../wooden-tile.png';

export default function Hex() {
  const [state, setState] = useState('white');
  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    dispatch({ type: 'incrementCount' })
  }, [dispatch])

  const toggleState = () => {
    switch (state) {
      case 'white':
        dispatch({ type: 'incrementGreenCount' });
        setState('green');
        break;
      case 'green':
        dispatch({ type: 'decrementGreenCount' });
        dispatch({ type: 'incrementWoodenCount' });
        setState('wooden');
        break;
      case 'wooden':
        dispatch({ type: 'decrementWoodenCount' });
        setState('white');
        break;
      default:
        break;
    }
  }

  return (
    <svg
      onClick={toggleState}
      className={`hex ${`hex--${state}`}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 -1 127 112"
      width="125px"
      height="110px"
    >
      <defs>
        <pattern id="greenTilePattern" patternUnits="userSpaceOnUse" width="140" height="140">
          <image href={greenTilePattern} x="-5" y="-5" width="140" height="140" />
        </pattern>
        <pattern id="woodenTilePattern" patternUnits="userSpaceOnUse" width="140" height="140">
          <image href={woodenTilePattern} x="-5" y="-20" width="140" height="140" />
        </pattern>
      </defs>
      <polygon points="0,55 31.25,110 93.75,110 125,55 93.75,0 31.25,0" />
    </svg>
  )
}
