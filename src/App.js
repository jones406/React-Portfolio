import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { ThemeProvider } from '@material-ui/core/styles'
//import CssBaseline from '@material-ui/core/CssBaseline'
import theme from './theme'


function App() {
  return (
<ThemeProvider theme={theme}>
    <div>
      <BrowserRouter>
      <div>
        <Nav />
      </div>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/portfolio">
            <Portfolio />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </Switch>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
    </ThemeProvider>
  );
}

export default App;