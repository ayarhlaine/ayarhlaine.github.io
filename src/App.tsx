import React from 'react';
import NavBar from './NavBar/NavBar';
import Banner from './Banner/Banner';
import AboutMe from './AboutMe/AboutMe';
import MyEducation from './MyEducation/MyEducation';
import './App.scss';
function App() {
  return (
    <div className="app">
      <NavBar />
      <Banner />
      <AboutMe />
      <MyEducation />
    </div>
  );
}

export default App;
