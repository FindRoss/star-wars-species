import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Species from './components/Species';
import Race from './components/Race';
import Nav from './components/Nav';

import { Grommet, Box } from 'grommet';
import './App.css';




function App() {

  const [darkMode, setDarkMode] = useState(false);
  const handleDarkToggle = (checked) => (checked === true) ? setDarkMode(true) : setDarkMode(false)

  const theme = {
    global: {
      font: {
        family: 'Poppins',
        customSmallFont: '14px',
      },
      checkBox: {
        size: "14px",
        icon: {
          size: "small"
        }
      },

      colors: {
        customAnchorColor: darkMode ? "light-1" : "brand",
        customBorder: darkMode ? "accent-1" : "brand",
        customBoxBg: darkMode ? "dark-3" : "light-1",
        customNavBg: darkMode ? "dark-1" : "#fff",
      }
    }
  }

  const lightDark = {
    navColors: {
      background: darkMode ? "dark-1" : "#fff",

    },
    bodyColors: {
      background: darkMode ? "dark-2" : "light-2",
      color: darkMode ? "light-2" : "dark-1",
    }
  }


  return (
    <Router>
      <Grommet style={{ height: "100%" }} theme={theme}>
        <Nav darkMode={darkMode} handleDarkToggle={handleDarkToggle} />
        <Box flex={true} direction="column" style={{ display: "table", height: "100%", width: "100%" }} background={lightDark.bodyColors.background} color={lightDark.bodyColors.color} >
          <div className="sws-container">
            <Switch>
              <Route path="/" exact component={Species} />
              <Route path="/species/:id" component={Race} />
            </Switch>
          </div>
        </Box>
      </Grommet>
    </Router >
  );
}

export default App;
