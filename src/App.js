import React from 'react';
import {BrowserRouter as Router, Route } from "react-router-dom"
import Home from './components/home';
import './App.css';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <Router>
      <Navbar/>
    <Route exact path="/">
      <Home/>
    </Route>
    <Footer/>
    </Router>
  );
}

export default App;
