import logo from './logo.svg';
import './App.css';
import React from 'react';
import Footer from './components/footer/Footer';
import Header from './components/header/header';
import Home from './components/home/home';

function App() {
  return (
    <div class="h3-bg">
    <div class="wrappage v2"></div>
    <Header/>
    <Home/>
    <Footer />
    </div>
  );
}

export default App;
