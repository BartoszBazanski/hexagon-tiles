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
        activeCount: state.activeCount + 1,
      };
    case 'decrementGreenCount':
      return {
        ...state,
        activeCount: state.activeCount - 1,
      };
    default:
      throw new Error();
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    activeCount: 0,
  });
  const scale = useMemo(() => (window.innerWidth - 40) / 1660, []);
  const whiteCount = state.count - state.activeCount;
  const floorNumber = (number) => (
    Math.floor(number * 100) / 100
  );

  return (
    <AppContext.Provider value={{ dispatch }}>
      <header className="p-20">
        <h1>Total count: {state.count}</h1>
        <p>Green count: {state.activeCount} &lt;--- packages: {floorNumber(state.activeCount / 36)}</p>
        <p>White count: {whiteCount} &lt;--- packages: {floorNumber(whiteCount / 36)}</p>
      </header>
      <div className="p-20">

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
