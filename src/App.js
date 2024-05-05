import React from 'react';
import './App.css';
import HomePage from './Compound/HomePage';
import DetailPage from './Compound/DetailPage';
import DesignPage from './Compound/DesignPage';
import ServicePage from './Compound/ServicePage';
import SolutionPage from './Compound/SolutionPage';
import TestimonialPage from './Compound/TestimonialPage';
import PartnersPage from './Compound/PartnersPage';
import JoinusPage from './Compound/JoinusPage';
import FooterPage from './Compound/FooterPage';
import ScrollAnimation from './Compound/ScrollAnimation';
import AboutUs from './Compound/AboutUs';






function App() {
  return (
    <div className="App">
      <HomePage />
      <AboutUs/>
      <DesignPage />
      <ScrollAnimation/>
      <ServicePage />
      <SolutionPage />
      <TestimonialPage />
      <PartnersPage />
      <JoinusPage />
      <FooterPage />
    </div>
  );
}

export default App;
