import React from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './components/Home';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
            <Nav />
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
            <Footer />
        </BrowserRouter>
  );
}

export default App;

