import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Species from './components/species/Species';
import Race from './components/race/Race';
import Nav from './components/Nav';

import './App.css';

function App() {

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkToggle = checked => checked ? setDarkMode(true) : setDarkMode(false);

  useEffect(() => {
    const htmlTag = document.getElementsByTagName('html')[0];
    const bodyTag = document.getElementsByTagName('body')[0];
    if (darkMode) {
      htmlTag.classList.add('dark')
      bodyTag.className = '';
      bodyTag.classList.add('bg-gray-600')
    }
    if (!darkMode) {
      htmlTag.classList.remove('dark')
      bodyTag.className = '';
      bodyTag.classList.add('bg-blue-100')
    }
  }, [darkMode])

  return (
    <Router>
      <div>
        <Nav darkMode={darkMode} handleDarkToggle={handleDarkToggle} />
        <Switch>
          <Route path="/" exact component={Species} />
          <Route path="/species/:id" component={Race} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
