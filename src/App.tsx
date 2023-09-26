/* eslint-disable react/react-in-jsx-scope */

import { BrowserRouter } from 'react-router-dom';
import Stars from './components/canvas/Stars';

import { Navbar, About, Hero, Experience, Tech, Works, Feedbacks, Contact } from './components'
function App() {
  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className=" bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <Stars />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
