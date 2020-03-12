import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Fragment>
        <Switch>
          <Route exact path="/">
            Home
          </Route>
          <Route exact path="/credit-line/">
            LandingPage
          </Route>
          <Route path="/credit-line/pan-details">PanDetails</Route>
          <Route path="/credit-line/confirm-limit">ConfirmLimit</Route>
        </Switch>
      </Fragment>
    </Router>
  );
};

export default App;
