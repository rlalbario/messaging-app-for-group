import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'reactstrap';
import Footer from './components/Footer';
import Banner from './components/Banner';
import Features from './components/Features';

function App() {
  return (
   
    <div>   
      <Banner />  
      <Features />
      <Footer />
    </div>
  );
}

export default App;
