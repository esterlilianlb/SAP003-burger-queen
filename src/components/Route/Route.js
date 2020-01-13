import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Waiter from '../../pages/waiter/waiter';
import Kitchen from '../../pages/kitchen/kitchen';
import Home from '../../pages/home/home';

function MyRoute() {
    return (
    <section className="main-section">
        <Router>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
     <Switch>
          <Route exact path="/" component={Home}/>
        <Route path="/waiter" component={Waiter}/>
        <Route path="/kitchen" component={Kitchen}/>
      </Switch>
  </Router>
    </section>
    )}

    export default MyRoute;