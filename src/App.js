import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./containers/home/Home";
import LandingPage from "./containers/CreditLine/LandingPage"

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/creditline" component={LandingPage}></Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
