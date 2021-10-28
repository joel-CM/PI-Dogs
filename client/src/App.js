import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Inicio from "./components/Inicio";
import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/home" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default App;
