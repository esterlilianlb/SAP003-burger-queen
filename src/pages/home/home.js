import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Waiter from '../../pages/waiter/waiter';
import Kitchen from '../../pages/kitchen/kitchen';
import Nav from '../../components/Nav/Nav';
import './home.css';
import '../../images/logo.png';


function Home() {
  return (
    <Router>
    <section className={"main-section"}>
        <div className={"logo"}>
            <img alt="burger-queen" url="logo.png"/>
        </div>
        <h1>Burger Queen</h1>
      <div className="nav"><Nav/></div>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/waiter" component={Waiter}/>
        <Route path="/kitchen" component={Kitchen}/>
      </Switch>
    </section>
  </Router>
  );
}

export default Home;


