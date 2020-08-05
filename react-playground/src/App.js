import React from 'react';
import TheDate from './state/TheDate';
import Counter from './state/Counter';
import HelloWorld from './state/Drills/HelloWorld';
import Bomb from './state/Drills/Bomb';
import RouletteGun from './state/Drills/RouletteGun';


function App() {
  return (
    <main className='App'>
      {/* <TheDate />
      <Counter count={123} /> */}
      <HelloWorld />
      {/* <Bomb />
      <RouletteGun /> */}
    </main>
  );
}

export default App;
