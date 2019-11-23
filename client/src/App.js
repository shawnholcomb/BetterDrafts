import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Fourohfour from "./pages/Fourohfour";
import './App.css';

function App() {
  return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route component={Fourohfour} />
          </Switch>
        </div>
      </Router>
  );
}

export default App;
