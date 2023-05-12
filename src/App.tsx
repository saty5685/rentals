import React from 'react';
import { Navbar } from './components/Navbar';
import { ExploreRentals } from './components/Homepage/ExploreRentals';
import { Carousel } from './components/Homepage/Carousel';
import { Heros } from './components/Homepage/Heros';
function App() {
  return (
    <div>
      <Navbar />
      <ExploreRentals />
      <Carousel/>
      <Heros/>
    </div>

  );
}

export default App;
