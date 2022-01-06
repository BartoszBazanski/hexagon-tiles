import React, { useContext, useEffect, useState } from 'react'
import { AppContext } from '../App';
import tilePattern from '../green-tile.png';

export default function Hex() {
  const [active, setActive] = useState(false);
  const { dispatch } = useContext(AppContext)

  useEffect(() => {
    dispatch({ type: 'incrementCount' })
  }, [])

  const toggleActive = () => {
    if (active) {
      dispatch({ type: 'decrementGreenCount' });
    } else {
      dispatch({ type: 'incrementGreenCount' });
    }

    setActive(!active);
  }

  return (
    <svg
      onClick={toggleActive}
      className={`hex ${active ? 'hex--green' : ''}`}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-1 -1 127 112"
      width="125px"
      height="110px"
    >
      <defs>
        <pattern id="tilePattern" patternUnits="userSpaceOnUse" width="140" height="140">
          <image href={tilePattern} x="-5" y="-5" width="140" height="140" />
        </pattern>
      </defs>
      <polygon points="0,55 31.25,110 93.75,110 125,55 93.75,0 31.25,0" />
    </svg>
  )
}
