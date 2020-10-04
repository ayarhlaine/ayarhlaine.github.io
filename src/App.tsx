import React from 'react';
import NavBar from './NavBar/NavBar';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import './App.scss';
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <AboutMe />
      {/* Education */}
    </div>
  );
}

export default App;
