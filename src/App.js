import React, { useMemo, useReducer } from 'react';

import './App.css';
import Column from './components/Column';

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
  const scale = useMemo(() => (window.innerWidth - 40) / 1660, []);
  const height = useMemo(() => scale * 2440, [scale]);
  const whiteCount = state.count - state.greenCount - state.woodenCount;
  const floorNumber = (number) => (
    Math.floor(number * 100) / 100
  );

  return (
    <AppContext.Provider value={{ dispatch }}>
      <header className="p-20">
        <h1>Total count: {state.count}</h1>
        <p>White count: {whiteCount} &lt;--- packages: {floorNumber(whiteCount / 36)}</p>
        <p>Green count: {state.greenCount} &lt;--- packages: {floorNumber(state.greenCount / 36)}</p>
        <p>Wooden count: {state.woodenCount} &lt;--- packages: {floorNumber(state.woodenCount / 36)}</p>
      </header>
      <div className="p-20" style={{ height: `${height}px`, overflow: 'hidden' }}>
        <div className="container" style={{ transform: `scale(${scale})`}}>
          <Column number={1} />
          <Column number={2} />
          <Column number={3} />
          <Column number={4} />
          <Column number={5} />
          <Column number={6} />
          <Column number={7} />
          <Column number={8} />
          <Column number={9} />
          <Column number={10} />
          <Column number={11} />
          <Column number={12} />
          <Column number={13} />
          <Column number={14} />
          <Column number={15} />
          <Column number={16} />
          <Column number={17} />
          <Column number={18} />
          {/* <Column number={19} /> */}
          {/* <Column number={20} /> */}
        </div>
      </div>
    </AppContext.Provider>
  );
}

export default App;
