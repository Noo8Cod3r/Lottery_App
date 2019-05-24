import React from 'react';
import './App.css';
import Lottery from './Components/Lottery';

function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery title='Mini Daily' maxNum={10} maxBalls={4} />
      <Lottery title='Bowie Numbers' />
    </div>
  );
}

export default App;
