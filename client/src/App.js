import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import Inicio from "./components/Inicio";
import Home from "./components/Home";
import Formulario from "./components/Formulario";
import DogDetail from "./components/DogDetail";

class App extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Inicio} />
          <Route exact path="/home" component={Home} />
          <Route exact path="/create" component={Formulario} />
          <Route exact path="/home/:id/dog" component={DogDetail} />
        </Switch>
      </div>
    );
  }
}

export default App;
