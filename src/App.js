import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Waiter from './pages/waiter';
import Kitchen from './pages/kitchen';
import Nav from './components/Nav.js';



function App() {
  return (
    <Router>
    <div>
      <Nav/>
      {/* A <Switch> looks through its children <Route>s and
          renders the first one that matches the current URL. */}
      <Switch>
        <Route exact path="/" component={Waiter}/>
        <Route path="/kitchen" component={Kitchen}/>
      </Switch>
    </div>
  </Router>
  );
}

export default App;


