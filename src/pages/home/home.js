import React from 'react';
import Nav from '../../components/Nav/Nav'
import './home.css';
import logo from '../../images/logo.png';


function Home() {
  return (
    <div>
    <div className="logo">
        <img alt="burger-queen" src={logo}/>
        <h1>Burger Queen</h1>
        </div>
        <div className="nav"><Nav/></div>
    </div>
    
  );
}

export default Home;


