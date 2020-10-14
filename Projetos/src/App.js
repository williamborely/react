import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import '../node_modules/font-awesome/css/font-awesome.min.css'
import './App.css';

import Header from './components/templates/Header/Header'
import NavBar from './components/templates/NavBar/NavBar'
import Footer from './components/templates/Footer/Footer'

import Router from './routes'

function App() {
  return (
    <div className="App">
      <Header></Header>
      <div className="Content">
        <NavBar></NavBar>
        <Router></Router>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
