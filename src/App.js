import React from 'react';
import Header from './components/Header.js';
import menu from './pages/initial.js'
// import {db} from './components/firebase.js'


function App() {
  return (
    <div className="App">
      < Header />
      {menu}
    </div>
  );
}

export default App;

