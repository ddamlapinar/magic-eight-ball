import "./styles.css";

import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from "react-router-dom";
import MagicEightBall from "./components/MagicEightBall";
import About from "./components/pages/About";
import NavBar from "./components/navbar/NavBar";
import Contact from "./components/pages/contact/Contact";
import links from "./data/links.js";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <div className="App">
      <Router>
        <NavBar links={links} />
        <Switch>
          <Route exact path="/">
            <MagicEightBall />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/404">
            <NotFound />
          </Route>
          <Redirect from="*" to="/404">
            <NotFound />
          </Redirect>
        </Switch>
      </Router>
    </div>
  );
}
