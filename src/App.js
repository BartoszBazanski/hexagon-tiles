import React, { useMemo, useReducer, useState } from 'react';

import './App.css';
import Column from './components/Column';
import Tile from './components/Tile';

export const AppContext = React.createContext({});

export function reducer(state, action) {
  switch (action.type) {
    case 'incrementCount':
      return {
        ...state,
        count: state.count + 1,
      };
    case 'incrementGreenCount':
      return {
        ...state,
        greenCount: state.greenCount + 1,
      };
    case 'decrementGreenCount':
      return {
        ...state,
        greenCount: state.greenCount - 1,
      };
    case 'incrementWoodenCount':
      return {
        ...state,
        woodenCount: state.woodenCount + 1,
      };
    case 'decrementWoodenCount':
      return {
        ...state,
        woodenCount: state.woodenCount - 1,
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    greenCount: 0,
    woodenCount: 0,
  });
  const [transform, setTransform] = useState(false);
  const scale = useMemo(() => (window.innerWidth - 40) / (1660 + 608), []);
  const height = useMemo(() => scale * 2700, [scale]);
  const whiteCount = state.count - state.greenCount - state.woodenCount;
  const floorNumber = (number) => (
    Math.floor(number * 100) / 100
  );
  const toggleTransform = () => {
    setTransform(!transform);
  };

  return (
    <AppContext.Provider value={{ dispatch }}>
      <header className="p-20">
        <h1>Total count: {state.count}</h1>
        <p>White count: {whiteCount} &lt;--- packages: {floorNumber(whiteCount / 36)}</p>
        <p>Green count: {state.greenCount} &lt;--- packages: {floorNumber(state.greenCount / 36)}</p>
        <p>Wooden count: {state.woodenCount} &lt;--- packages: {floorNumber(state.woodenCount / 36)}</p>
        <button onClick={toggleTransform}>Transform</button>
      </header>
      <div className="p-20" style={{ height: `${height}px`, overflowX: 'visible' }}>
        <div className="container" style={{ transform: `scale(${scale})` }}>
          <div className={`container__side container__side--left
            ${transform ? 'container__side--transform-left' : ''}
          `}>
            <Column className="column--with-tiles-1" componentNumber={8} component={Tile} />
            <Column className="column--with-tiles-2" componentNumber={8} component={Tile} />
            <Column componentNumber={8} component={Tile} />
          </div>
          <div className={`container__side container__side--right
            ${transform ? 'container__side--transform-right' : ''}
          `}>
            <Column colNumber={1} componentNumber={23} />
            <Column colNumber={2} componentNumber={23} />
            <Column colNumber={3} />
            <Column colNumber={4} componentNumber={23} />
            <Column colNumber={5} />
            <Column colNumber={6} componentNumber={23} />
            <Column colNumber={7} />
            <Column colNumber={8} componentNumber={23} />
            <Column colNumber={9} />
            <Column colNumber={10} componentNumber={23} />
            <Column colNumber={11} />
            <Column colNumber={12} componentNumber={23} />
            <Column colNumber={13} />
            <Column colNumber={14} componentNumber={23} />
            <Column colNumber={15} />
            <Column colNumber={16} componentNumber={23} />
            <Column colNumber={17} />
            <Column colNumber={18} componentNumber={23} />
          </div>
          <div className={`container__side--floor
            ${transform ? 'container__side--transform-floor' : ''}
          `} />
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
