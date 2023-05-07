import React from 'react';
import { Navbar } from './components/Navbar';
import { ExploreRentals } from './components/Homepage/ExploreRentals';
import { Carousel } from './components/Homepage/Carousel';
function App() {
  return (
    <div>
      <Navbar />
      <ExploreRentals />
      <Carousel/>
    </div>

  );
}

export default App;
